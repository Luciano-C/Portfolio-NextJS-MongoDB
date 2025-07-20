import { connect, connection } from "mongoose";

const conn = {
  isConnected: false
};

export async function dbConnect() {
  if (conn.isConnected) return;

  try {
    const db = await connect(process.env.MONGODB_URL);
    conn.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Let the calling code handle it
  }
}

// Optional: log connection events
connection.on("connected", () => {
  console.log("MongoDB connected");
});

connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});
