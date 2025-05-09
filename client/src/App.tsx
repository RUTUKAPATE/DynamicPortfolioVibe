import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import CertificationsPage from "./pages/CertificationsPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App() {
  const [location] = useLocation();
  const isAdminPage = location.startsWith('/admin');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen transition-colors duration-300">
          {!isAdminPage && <Navbar />}
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/workshops" component={WorkshopsPage} />
            <Route path="/certifications" component={CertificationsPage} />
            <Route path="/admin" component={AdminPage} />
            <Route component={NotFound} />
          </Switch>
          {!isAdminPage && <Footer />}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
