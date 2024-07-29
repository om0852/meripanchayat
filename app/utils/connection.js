import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("mongodb is already connected");
        return;

    }
    try {
        await mongoose.connect(`${process.env.DB_URL}meripanchayat`, {
            dbName: "meripanchayat",
         })
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}