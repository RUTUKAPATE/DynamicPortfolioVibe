import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  contactSchema, 
  projectSchema, 
  skillSchema, 
  workshopSchema, 
  certificationSchema,
  insertProjectSchema,
  insertSkillSchema,
  insertWorkshopSchema,
  insertCertificationSchema
} from "../shared/schema";
import nodemailer from "nodemailer";
import { db } from "./db";
import { 
  projects, 
  skills, 
  workshops, 
  certifications, 
  contactMessages 
} from "../shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // ===== Contact API Endpoints =====

  // Submit contact form
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
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Verify SMTP connection
      try {
        await transporter.verify();
        console.log('SMTP connection verified successfully');
      } catch (error) {
        console.error('SMTP verification failed:', error);
        throw new Error('Failed to connect to email server');
      }

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

      // Send the email
      await transporter.sendMail(mailOptions);

      // Store the contact message in database
      await storage.createContactMessage({ name, email, subject, message });

      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Get all contact messages
  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  // ===== Projects API Endpoints =====

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const { category } = req.query;
      let query = db.select().from(projects);

      if (category && typeof category === 'string') {
        query = query.where(eq(projects.category, category));
      }

      const projectsList = await query.orderBy(projects.createdAt);
      return res.status(200).json(projectsList);
    } catch (error) {
      console.error("Error fetching projects:", error);
      return res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  // Get project by ID
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [project] = await db.select().from(projects).where(eq(projects.id, parseInt(id)));

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      return res.status(200).json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      return res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Create project
  app.post("/api/projects", async (req, res) => {
    try {
      const result = projectSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid project data", 
          errors: result.error.errors 
        });
      }

      const [project] = await db.insert(projects).values(result.data).returning();
      return res.status(201).json(project);
    } catch (error) {
      console.error("Error creating project:", error);
      return res.status(500).json({ message: "Failed to create project" });
    }
  });

  // ===== Skills API Endpoints =====

  // Get all skills
  app.get("/api/skills", async (req, res) => {
    try {
      const { category } = req.query;
      let query = db.select().from(skills);

      if (category && typeof category === 'string') {
        query = query.where(eq(skills.category, category));
      }

      const skillsList = await query;
      return res.status(200).json(skillsList);
    } catch (error) {
      console.error("Error fetching skills:", error);
      return res.status(500).json({ message: "Failed to fetch skills" });
    }
  });

  // Create skill
  app.post("/api/skills", async (req, res) => {
    try {
      const result = skillSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid skill data", 
          errors: result.error.errors 
        });
      }

      const [skill] = await db.insert(skills).values(result.data).returning();
      return res.status(201).json(skill);
    } catch (error) {
      console.error("Error creating skill:", error);
      return res.status(500).json({ message: "Failed to create skill" });
    }
  });

  // ===== Workshops API Endpoints =====

  // Get all workshops
  app.get("/api/workshops", async (req, res) => {
    try {
      const { type } = req.query;
      let query = db.select().from(workshops);

      if (type && typeof type === 'string') {
        query = query.where(eq(workshops.type, type));
      }

      const workshopsList = await query.orderBy(workshops.date);
      return res.status(200).json(workshopsList);
    } catch (error) {
      console.error("Error fetching workshops:", error);
      return res.status(500).json({ message: "Failed to fetch workshops" });
    }
  });

  // Get workshop by ID
  app.get("/api/workshops/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [workshop] = await db.select().from(workshops).where(eq(workshops.id, parseInt(id)));

      if (!workshop) {
        return res.status(404).json({ message: "Workshop not found" });
      }

      return res.status(200).json(workshop);
    } catch (error) {
      console.error("Error fetching workshop:", error);
      return res.status(500).json({ message: "Failed to fetch workshop" });
    }
  });

  // Create workshop
  app.post("/api/workshops", async (req, res) => {
    try {
      const result = workshopSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid workshop data", 
          errors: result.error.errors 
        });
      }

      const [workshop] = await db.insert(workshops).values(result.data).returning();
      return res.status(201).json(workshop);
    } catch (error) {
      console.error("Error creating workshop:", error);
      return res.status(500).json({ message: "Failed to create workshop" });
    }
  });

  // ===== Certifications API Endpoints =====

  // Get all certifications
  app.get("/api/certifications", async (req, res) => {
    try {
      const { type } = req.query;
      let query = db.select().from(certifications);

      if (type && typeof type === 'string') {
        query = query.where(eq(certifications.type, type));
      }

      const certificationsList = await query.orderBy(certifications.year);
      return res.status(200).json(certificationsList);
    } catch (error) {
      console.error("Error fetching certifications:", error);
      return res.status(500).json({ message: "Failed to fetch certifications" });
    }
  });

  // Get certification by ID
  app.get("/api/certifications/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [certification] = await db.select().from(certifications).where(eq(certifications.id, parseInt(id)));

      if (!certification) {
        return res.status(404).json({ message: "Certification not found" });
      }

      return res.status(200).json(certification);
    } catch (error) {
      console.error("Error fetching certification:", error);
      return res.status(500).json({ message: "Failed to fetch certification" });
    }
  });

  // Create certification
  app.post("/api/certifications", async (req, res) => {
    try {
      const result = certificationSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid certification data", 
          errors: result.error.errors 
        });
      }

      const [certification] = await db.insert(certifications).values(result.data).returning();
      return res.status(201).json(certification);
    } catch (error) {
      console.error("Error creating certification:", error);
      return res.status(500).json({ message: "Failed to create certification" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}