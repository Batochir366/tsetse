import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    isPublic: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
