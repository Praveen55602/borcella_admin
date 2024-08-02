import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    console.log("url is", process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: "Borcelle_Admin",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("error while connnecting to database", err);
  }
};
