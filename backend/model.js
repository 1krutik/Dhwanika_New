import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({

firstName:String,
lastName:String,
email:String,
phone:String,
service:String,
createdAt:{
type:Date,
default:Date.now
}

});

export default mongoose.model("Inquiry",inquirySchema);