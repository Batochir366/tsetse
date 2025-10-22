import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    subjectVideo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video", // холбогдох видео collection
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Subject", SubjectSchema);
