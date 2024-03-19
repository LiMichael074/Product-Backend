import { Schema, model } from "mongoose";

const carSchema = new Schema ({
    make: {
        type: String,
        required: [true, "Action text required"],
    },
    model: {
        type: String,
        required: [true, "Action text required"],
    },
    year: {
        type: Number,
        required: [true, "Action text required"],
    },
    engine: {
        type: String,
        required: [true, "Action text required"],
    },
    horsepower: {
        type: Number,
        required: [true, "Action text required"],
    },
    transmission: {
        type: String,
        required: [true, "Action text required"],
    },
    image: {
        type: String,
        required: [true, "Action text required"],
    },
    estimated_value_cad: {
        type: Number,
        required: [true, "Action text required"],
    }
});

export default model("Car", carSchema);