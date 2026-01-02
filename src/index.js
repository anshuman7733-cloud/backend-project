import dotenv  from "dotenv";
import connectDB from "./db/index.js";



connectDB()
  














// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("Error: ", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
