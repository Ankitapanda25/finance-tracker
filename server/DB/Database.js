import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = "mongodb+srv://ankita25:ankita2016@cluster0.kctgqri.mongodb.net/test?retryWrites=true&w=majority";

    const {connection} = await mongoose.connect(db);

    console.log(`MongoDB Connected to ${connection.host}`);

}