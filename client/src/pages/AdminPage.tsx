import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  isRead: boolean;
};

const AdminPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const { toast } = useToast();
  
  const { data: messages, isLoading } = useQuery({
    queryKey: ['/api/contact'],
    queryFn: () => apiRequest('GET', '/api/contact'),
  });

  const markAsRead = useMutation({
    mutationFn: (id: number) => apiRequest('PATCH', `/api/contact/${id}/read`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
      toast({
        title: "Message marked as read",
        description: "The message has been marked as read successfully."
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to mark the message as read.",
        variant: "destructive"
      });
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
          
          {messages && messages.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message: ContactMessage) => (
                    <TableRow key={message.id} className={message.isRead ? 'opacity-70' : ''}>
                      <TableCell>{formatDate(message.createdAt)}</TableCell>
                      <TableCell>{message.name}</TableCell>
                      <TableCell>
                        <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                          {message.email}
                        </a>
                      </TableCell>
                      <TableCell>{message.subject}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          message.isRead ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : 'bg-primary/10 text-primary'
                        }`}>
                          {message.isRead ? 'Read' : 'Unread'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedMessage(message)}
                        >
                          View
                        </Button>
                        {!message.isRead && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => markAsRead.mutate(message.id)}
                            disabled={markAsRead.isPending}
                          >
                            Mark as Read
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No messages found.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Message Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={(open) => !open && setSelectedMessage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.name} ({selectedMessage?.email})
              <br />
              Date: {selectedMessage && formatDate(selectedMessage.createdAt)}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedMessage(null)}
            >
              Close
            </Button>
            {selectedMessage && !selectedMessage.isRead && (
              <Button 
                onClick={() => {
                  markAsRead.mutate(selectedMessage.id);
                  setSelectedMessage(null);
                }}
                disabled={markAsRead.isPending}
              >
                Mark as Read
              </Button>
            )}
            <Button 
              variant="default" 
              onClick={() => {
                if (selectedMessage) {
                  window.location.href = `mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`;
                }
              }}
            >
              Reply via Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPage;