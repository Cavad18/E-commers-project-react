import { Card, CardGroup } from "react-bootstrap";

export default function About() {
  return (
    <div className="container">
      <div className="row align-items-center py-5">
        <div className="col-md-6">
          <h1 className="py-3 m-4">Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping{" "}
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region. <br /> <br /> Exclusive has more than 1
            million products to offer, growing very fast. Exclusive offers a
            diverse assortment in categories ranging from consumer goods.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            width="500"
            src="/images/online-shopping-system 1.png"
            alt="Online shopping"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <section className="py-5">
        <CardGroup>
          <Card className="m-3">
            <Card.Img variant="top" src="/images/Frame 874.png" />
            <Card.Body>
              <Card.Title>Emin Sadiqli</Card.Title>
              <Card.Text>Founder & Chairman</Card.Text>
            </Card.Body>
            <Card.Footer>
              <i class="bi bi-twitter m-1"></i>{" "}
              <i class="bi bi-instagram m-1"></i> <i class="bi bi-send m-1"></i>
            </Card.Footer>
          </Card>
          <Card className="m-3">
            <Card.Img variant="top" src="/images/Frame 875.png" />
            <Card.Body>
              <Card.Title>Iman Imanov</Card.Title>
              <Card.Text>Managing Director</Card.Text>
            </Card.Body>
            <Card.Footer>
              <i class="bi bi-twitter m-1"></i>{" "}
              <i class="bi bi-instagram m-1"></i> <i class="bi bi-send m-1"></i>
            </Card.Footer>
          </Card>
          <Card className="m-3">
            <Card.Img variant="top" src="/images/Frame 876.png" />
            <Card.Body>
              <Card.Title>Nicat Piriyev</Card.Title>
              <Card.Text>Product designer.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <i class="bi bi-twitter m-1"></i>{" "}
              <i class="bi bi-instagram m-1"></i> <i class="bi bi-send m-1"></i>
            </Card.Footer>
          </Card>
        </CardGroup>
      </section>
    </div>
  );
}
