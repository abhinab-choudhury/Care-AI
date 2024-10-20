import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const ChatSchema = new mongoose.Schema(
  {
    chat_id: {
      type: String,
      default: nanoid(),
      trim: true
    },
    prompt: {
      type: String,
      trim: true
    },
    response: {
      type: String,
      trim: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  {
    timestamps: true
  }
);

const Chat = mongoose.model('Chat', ChatSchema);
export default Chat;
