import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
   const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/userProducts")}
        style={{
          backgroundColor: "red",
          borderRadius: "5px",
          border: "none",
          color: "white",
          height: "35px",
          margin: "80px",
        }}
        className="ms-5 m-5"
      >
        My products for sale
      </button>
      <div>
        <Card className="m-4 shadow">
          <Card.Body className="p-5">
            <h2 className="text-danger">User Details</h2>
            <Card.Text className="fw-bold mt-2">
              <h2><span className="fw-bold">Name: </span>Cavad</h2>
              <h2><span className="fw-bold">Surname: </span> Rehimli</h2>
              <h2><span className="fw-bold">Email: </span> r2012@gmail.com</h2>
              <h2><span className="fw-bold">Username: </span>Trex432</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
