import axios from "axios";

export async function sendMessageToAI(messages) {
  const res = await axios.post("http://localhost:5000/api/chat", {
    messages,
  });

  return res.data.reply;
}