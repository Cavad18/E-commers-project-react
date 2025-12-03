import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Checkout() {
  const [validated, setValidated] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    state: "",
    city: "",
    adress: "",
    zip: "",
    tel: "",
    email: "",
    cardNumber: "",
    expirationMM: "",
    expirationYY: "",
    cardSecurityCode: "",
  });
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = () => {
    const token = localStorage.getItem("token");

    axios
      .get(baseUrl + "/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCartData(response.data);
          calculateTotal(response.data);
        } else {
          alert("Error");
        }
      })
      .catch((error) => handleError(error));
  };

  const calculateTotal = (data) => {
    const sum = data.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotal(sum);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearCart = () => {
    const token = localStorage.getItem("token");

    axios
      .delete(baseUrl + "/cart/clear", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => handleError(error));
  };

  const handleError = (error) => {
    console.error("Error:", error);
    alert(
      "An error occurred:" + (error.response?.data?.message || error.message)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      console.log(formData);
      clearCart();
    }

    setValidated(true);
  };

  return (
    <Container className="my-5">
      <h1 className="text-start mb-4">Checkout</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-4 border-0">
              <h3 className="mb-3">Personal Information</h3>
              <Row className="mb-3 g-3">
                <Form.Group as={Col} md="12" controlId="validationName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationSurame">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationState">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option>Azerbaijan</option>
                    <option>Turkey</option>
                    <option>Saudi Arabia</option>
                    <option>Pakistan</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select a valid state.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter you city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your adress"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>
                    Please provide a valid address
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Zip code"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>
                    Please provide a valid zip
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationTel">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Enter your phone number."
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>
                    Please provivde a valid telephone number
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>
                    Please provide a valid email
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Card>
          </Col>

          <Col md={6}>
            <div className="p-4 mb-4 border-0">
              <h3 className="mb-3">Payment Details</h3>
              <div className="d-flex flex-wrap mb-3">
                <img
                  className="mx-2"
                  width="65px"
                  src="https://abc.az/storage/abc/2019/september/10/Visa_logo.jpg"
                  alt=""
                />
                <img
                  className="mx-2"
                  width="65px"
                  src="https://www.blsinvest.dk/wp-content/uploads/2021/02/mastercard-logo-png-transparent_600px-300x239.png"
                  alt=""
                />
                <img
                  className="mx-2"
                  width="65px"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                  alt=""
                />
                <img
                  className="mx-2"
                  width="65px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrWHebRtvOTxy4VPYjaabCPS6ANzDGowQvuQ&s"
                  alt=""
                />
                <img
                  className="mx-2"
                  width="65px"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg"
                  alt=""
                />
                <img
                  className="mx-2"
                  width="65px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1200px-JCB_logo.svg.png"
                  alt=""
                />
              </div>

              <Form.Group className="mb-3" controlId="validationNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter your card number."
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationExpirationMM">
                  <Form.Label>Exp. Month</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="MM"
                    name="expirationMM"
                    value={formData.expirationMM}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationExpirationYY">
                  <Form.Label>Exp. Year</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="YY"
                    name="expirationYY"
                    value={formData.expirationYY}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationExpirationCode"
                >
                  <Form.Label>Card security code</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="CVV"
                    name="cardSecurityCode"
                    value={formData.cardSecurityCode}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <div className="fs-3 my-5">
                <h4>Order Summary</h4>

                <div className="row border-bottom border-2 my-4">
                  <div className="col">Subtotal</div>
                  <div className="col text-end subtotal">${total}</div>
                </div>
                <div className="row border-bottom border-2 my-4">
                  <div className="col">Shipping</div>
                  <div className="col text-end">FREE</div>
                </div>
                <div className="row border-bottom border-2 my-4">
                  <div className="col">Total</div>
                  <div className="col text-end total">${total}</div>
                </div>
              </div>
            </div>

            <Form.Group className="mb-3 mt-3">
              <Form.Check
                required
                id="termsCheck"
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100 py-3">
              Place Order
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
