import express from "express";

import { addcar, getAllcars, getCar, removeCar} from "../controllers/carController";

const router = express.Router();

// localhost:8000/cars/ GET, POST
//router.route("/").get(getAllcars);
router.route("/").get(getAllcars).post(addcar);

// localhost:8000/cars/:id
router.route("/:id").get(getCar).delete(removeCar);


export default router;