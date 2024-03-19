import Car from "../models/carModels";
import { Request, Response } from "express";

// const car = [{"id": "0", "action": "Sleep"}, {"id": "1", "action": "Drive"}];

// return car
export const getAllcars = async (req: Request, res: Response) => {
    try {
        const data = await Car.find({});
    
        res.status(200).json({
          status: "success",
          results: data.length,
          data,
        });
      } catch (err) {
        res.status(400).json({
          status: "fail",
          message: err,
        });
      }
};

//add car
export const addcar = async (req: Request, res: Response) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(200).json({
          status: "success",
          data: {
            car: newCar,
          },
        });
      } catch (err) {
        res.status(400).json({
          status: "fail",
          message: err,
        });
      }
    };

// get a single car
export const getCar = async (req: Request, res: Response) => {
    try {
      const data = await Car.findById(req.params.id);
        
      res.status(200).json({
        status: "success",
        data,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };

// delete a car
export const removeCar = async (req: Request, res: Response) => {
    try {
      const data = await Car.deleteOne({_id:req.params.id});
      res.status(200).json({
        status: "success",
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };