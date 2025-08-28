import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz", // forbinder til Quiz.model.js
    required: true,
  },
  chosenAnswer: {
    type: String,
    required: true,
  },
  correct: {
    type: Boolean,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  answers: [answerSchema],
  correctAnswersCount: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
