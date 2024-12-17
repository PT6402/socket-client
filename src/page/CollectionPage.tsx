import { useNavigate } from "react-router-dom";
export default function CollectionPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold">Collection Page</h1>
      <div className="card">
        <button onClick={() => navigate("/")}>Home page</button>
      </div>
    </>
  );
}
