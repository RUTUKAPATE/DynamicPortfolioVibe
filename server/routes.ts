import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "../shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request data
      const result = contactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.errors 
        });
      }
      
      const { name, email, subject, message } = result.data;
      
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "noreply@example.com", // This would be replaced with an actual email in production
          pass: process.env.EMAIL_PASSWORD || "password",
        },
      });
      
      // Email content
      const mailOptions = {
        from: `"Portfolio Contact" <noreply@example.com>`,
        to: "rutuja16kapate@gmail.com",
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
          </div>
        `,
      };
      
      // Send email
      // In a real environment, this would actually send the email
      // Here we'll simulate a successful email send
      
      // Store the contact message in database
      await storage.createContactMessage({ name, email, subject, message });
      
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
