import express from "express";
import carRoutes from "./routes/carRoutes";
import cors from "cors";
const app = express();

// MIDDL EWARE
app.use(express.json({limit: "10kb"}));

// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//CORS
app.use(
    cors({
      origin: "http://localhost:8000",
    })
  );

app.use("/car", carRoutes);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Our Express Server!!!!");
})



export default app;