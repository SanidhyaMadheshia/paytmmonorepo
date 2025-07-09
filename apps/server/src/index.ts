import express from 'express';
import {PrismaClient} from "@repo/database/client"; // Importing the Prisma client from the database package
import cors from 'cors';
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

export async function testdatacreation() {
  const user = await prisma.user.create({

    data: {
      name: "John Doasdfasdasde",
      email : "sanjksdjkashd@,copasdmmasd"
  }});

  if(!user) {
    console.error("User creation failed");
  }


  console.log("User created successfully:", user);
  return user;


}
// Middleware to log all requests
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

app.get('/testcreatedata', (req, res) => {
    testdatacreation().then(user => {   
        res.json({ message: "User created successfully", user });
    }).catch(error => {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    });

    // res.json({
    //     msg : "This is a test route to create data",
    // })
});

// Add a test route to verify server is working
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🔍 Health check: http://localhost:${PORT}/health`);
    console.log(`⚡ Server is ready to accept connections!`);
});

export default app;