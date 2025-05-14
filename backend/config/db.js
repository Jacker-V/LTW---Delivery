import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://hoangha182712:252712@cluster0.j8il6rc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}