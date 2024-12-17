import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import CollectionPage from "./page/CollectionPage";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    const newSocket = io("https://socket-server-ndt8.onrender.com", {
      withCredentials: true,
    });
    setSocket(newSocket);
  }, []);
  useEffect(() => {
    if (!socket) return;
    socket.on("receive_message", (data) => {
      console.log("show on client: ", data);
    });
  }, [socket]);
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/collection" Component={CollectionPage} />
      </Routes>
    </>
  );
}

export default App;
