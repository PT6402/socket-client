import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleSend = () => {
    axios.get("http://localhost:8080/send");
  };
  return (
    <>
      <h1 className="font-bold">Home Page</h1>
      <div className="card flex gap-2">
        <button onClick={() => navigate("/collection")}>Collection page</button>
        <button onClick={handleSend}>Send message</button>
      </div>
    </>
  );
}
