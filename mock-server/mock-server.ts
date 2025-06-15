import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:8000"],
    methods: ["GET"],
  })
); // Enable CORS for all routes
const PORT = 4000;

app.get("/appointments", (req, res) => {
  const data = fs.readFileSync(
    new URL("../mock-data/getAppointments.json", import.meta.url),
    "utf-8"
  );
  res.json(JSON.parse(data));
});

app.get("/availability/classes", (req, res) => {
  const data = fs.readFileSync(
    new URL("../mock-data/getAvailabilityClasses.json", import.meta.url),
    "utf-8"
  );
  res.json(JSON.parse(data));
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
