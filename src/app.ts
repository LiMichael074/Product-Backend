import express from "express";
import carRoutes from "./routes/carRoutes";
import cors from "cors";
const app = express();

// MIDDL EWARE
app.use(express.json({limit: "10kb"}));

// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//CORS
// app.use(
//     cors({
//       origin: "http://localhost:5173", "https://mickdealership.netlify.app/",
//     })
//   );

const whitelist = [
  "http://localhost:5173",
  "https://mickdealership.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the incoming request origin is in the whitelist
      if (!origin || whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use("/car", carRoutes);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Our Express Server!!!!");
})



export default app;