import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
          bgColour: {type: String, required: true},
          name: {type: String, required: true},
          image: {type: String, required: true},
          desc:{type: String, require: true}
})

const albumModel =mongoose.models.album || mongoose.model("album",albumSchema);

export default albumModel;