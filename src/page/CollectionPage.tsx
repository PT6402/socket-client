import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket, io } from "socket.io-client";

export default function CollectionPage() {
  const [socket, setSocket] = useState<Socket>();
  const navigate = useNavigate();
  useEffect(() => {
    const newSocket = io("https://socket-server-gamma.vercel.app", {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!socket) return;
    socket.on("receive_message", (data) => {
      console.log("show on client: ", data);
    });
  }, [socket]);
  return (
    <>
      <h1 className="font-bold">Collection Page</h1>
      <div className="card">
        <button onClick={() => navigate("/")}>Home page</button>
      </div>
    </>
  );
}
