import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

export default function Home() {
  return (
    <div>
      <div className="p-2 ">
        <header />

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="p-5 ms-5">
        <div
          className="bg-danger"
          style={{ width: "12px", height: "30px", borderRadius: "2px" }}
        >
          <p className="m-3 text-danger fw-bold">Featured</p>
        </div>
        <h1 className="mt-3">Shop Collection</h1>
      </div>
      <section>
        <Container className="py-4">
          <Row className="g-4">
            {/* Левая большая карточка */}
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                  src="/images/Headphones.jpg"
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Headband</Card.Title>
                  <Card.Text className="text-danger fw-bold">
                    Collection →
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Правая колонка — два блока */}
            <Col md={6}>
              <Row className="g-4">
                {/* Верхняя маленькая карточка */}
                <Col md={12}>
                  <Card className="border-0 shadow-sm">
                    <Card.Img
                      src="/images/Headphones02.jpg"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>Earbuds</Card.Title>
                      <Card.Text className="text-danger fw-bold">
                        Collection →
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Нижняя маленькая карточка */}
                <Col md={12}>
                  <Card className="border-0 shadow-sm">
                    <Card.Img
                      src="/images/battery.jpg"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>Accessories</Card.Title>
                      <Card.Text className="text-danger fw-bold">
                        Collection →
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="p-5 ms-5">
        <div
          className="bg-danger"
          style={{ width: "12px", height: "30px", borderRadius: "2px" }}
        >
          <p className="m-3 text-danger fw-bold">Featured</p>
        </div>
        <h1 className="mt-3">Promotion</h1>
      </div>
      <section className="d-flex">
        <img src="/images/man.png" alt="" />
        <div
          className="p-5"
          style={{
            width: "700px",
            height: "535px",
            backgroundColor: "#f3d59eff",
          }}
        >
          <p className="fw-bold text-primary">PROMOTION</p>
          <h1>Hurry up! 40% OFF</h1>
          <p>Thousands of high tech are waiting for you</p>
          <small>Offer expires in:</small>
          <div className="row">
            <div
              className="ms-2 mt-2"
              style={{
                width: "65px",
                height: "58px",
                backgroundColor: "white",
              }}
            >
              <h1>02</h1>
              <p>Days</p>
            </div>
            <div
              className="ms-2 mt-2"
              style={{
                width: "65px",
                height: "58px",
                backgroundColor: "white",
              }}
            >
              <h1>12</h1>
              <p>Hours</p>
            </div>
            <div
              className="ms-2 mt-2"
              style={{
                width: "65px",
                height: "58px",
                backgroundColor: "white",
              }}
            >
              <h1>45</h1>
              <p>Minutes</p>
            </div>
            <div
              className="ms-2 mt-2"
              style={{
                width: "65px",
                height: "58px",
                backgroundColor: "white",
              }}
            >
              <h1>05</h1>
              <p>Seconds</p>
            </div>
          </div>
          <button
            style={{
              width: "130px",
              height: "35px",
              backgroundColor: "black",
              color: "white",
              border: "black",
              borderRadius: "5px",
            }}
            className="mt-5"
          >
            Shop now
          </button>
        </div>
      </section>
      <div className="p-5 ms-5 flex items-start">
        <div
          className="bg-danger"
          style={{ width: "12px", height: "30px", borderRadius: "2px" }}
        >
          <p className="text-danger fw-bold mt-3 ms-3">Products</p>
        </div>
        <h1 className="mt-2">Special Promotion</h1>
      </div>
      <section>
        <div
          style={{
            width: "1350px",
            height: "560px",
            background: "#2b2a29",
            padding: "40px 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ marginTop: "80px" }}>
            {" "}
            <h3 style={{ color: "#bbb", fontWeight: "bold" }}>Pro.Beyond.</h3>
            <div
              style={{
                marginTop: "20px",
                lineHeight: "75px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "80px", color: "white" }}>
                Iphone 14
              </span>
              <span
                style={{ fontSize: "80px", color: "white", fontWeight: "bold" }}
              >
                PRO
              </span>
            </div>
            <p style={{ color: "#bbb", marginTop: "20px", fontSize: "16px" }}>
              Created to change everything for the better. For everyone
            </p>
            <button
              style={{
                marginTop: "20px",
                padding: "12px 35px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#2b2a29",
                border: "1px solid white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </div>

          <img
            src="/images/Iphone.png"
            alt="iPhone"
            style={{
              height: "450px",
              position: "absolute",
              bottom: "0",
              right: "40px",
            }}
          />
        </div>
      </section>
      <section>
        <h1 className="text-danger text-center mt-5">Feedback Corner</h1>
        <CardGroup className="m-3 p-3 g-5">
          <Card className="m-4 shadow">
            <Card.Body className="p-5">
              <h1 className="text-danger">“</h1>
              <Card.Title className="text-danger">Emily Wilson</Card.Title>
              <Card.Text className="fw-bold mt-2">
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the clothes I ordered fit perfectly. I am beyond satisfied!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4 shadow">
            <Card.Body className="p-5">
              <h1 className="text-danger">“</h1>
              <Card.Title className="text-danger">Sarah Thompson</Card.Title>
              <Card.Text className="fw-bold mt-2">
                I absolutely love the quality and style of the clothing I
                purchased from this website, customer service was outstanding,
                and I received my order quickly. Highly recommended!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4 shadow">
            <Card.Body className="p-5">
              <h1 className="text-danger">“</h1>
              <Card.Title className="text-danger">Olivia Martinez</Card.Title>
              <Card.Text className="fw-bold mt-2">
                I had a great experience shopping on this website. The clothes I
                bought are fashionable and comfortable. Highly satisfied!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      <div className="p-5 ms-5">
        <div
          className="bg-danger"
          style={{ width: "12px", height: "30px", borderRadius: "2px" }}
        >
          <p className="m-3 text-danger fw-bold">Products</p>
        </div>
        <h1 className="mt-3">Explore Our Products</h1>
      </div>
      <section>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="/images/Group1.png" />
            <Card.Body>
              <Card.Title>
                <h1>Popular Products</h1>
              </Card.Title>
              <Card.Text>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </Card.Text>
              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 35px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#201c1cff",
                  border: "1px solid grey",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "rgba(232, 241, 232, 0.6)",
            }}
          >
            <Card.Img variant="top" src="/images/image 64.png" />
            <Card.Body className="mt-4">
              <Card.Title className="mt-5">
                <h1>Ipad Pro</h1>
              </Card.Title>
              <Card.Text className="mt-5">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </Card.Text>
              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 35px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#2e2929ff",
                  border: "1px solid grey",
                  backgroundColor: "rgba(232, 241, 232, 0.6)",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "rgba(206, 223, 206, 0.6)",
            }}
          >
            <Card.Img variant="top" src="/images/image 41.png" />
            <Card.Body className="mt-5">
              <Card.Title className="mt-5">
                <h1>Samsung Galaxy</h1>
              </Card.Title>
              <Card.Text className="mt-4">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </Card.Text>
              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 35px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#201c1cff",
                  border: "1px solid grey",
                  backgroundColor: "rgba(206, 223, 206, 0.6)",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.6)",
            }}
          >
            <Card.Img variant="top" src="/images/Macbook 1.png" />
            <Card.Body className="mt-5">
              <Card.Title className="mt-5">
                <h1>Macbook Pro</h1>
              </Card.Title>
              <Card.Text>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </Card.Text>
              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 35px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "white",
                  border: "1px solid grey",
                  backgroundColor: "rgba(10, 10, 10, 0.6)",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
    </div>
  );
}
