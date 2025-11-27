import { Card } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <hr />
      <p className="m-5">
        Home / <span className="fw-bold">Contact</span>
      </p>

      {/* Контейнер с двумя колонками */}
      <div className="d-flex gap-4 m-4 flex-wrap">
        {/* Левая карточка — твоя */}
        <Card className="shadow p-0" style={{ width: "350px" }}>
          <Card.Body className="p-4">
            <Card.Title>
              <i class="bi bi-telephone text-light bg-danger p-2 me-2 rounded"></i>
              Call to us
            </Card.Title>

            <Card.Text className="mt-3">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </Card.Text>
          </Card.Body>

          <hr className="w-75 mx-auto" />

          <Card.Body className="p-4">
            <Card.Title>
              <i class="bi bi-envelope text-light bg-danger p-2 me-2 rounded"></i>
              Write to us
            </Card.Title>

            <Card.Text className="mt-3">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="flex-grow-1 p-4 shadow rounded">
          <form className="d-flex flex-column gap-3">
            <div className="d-flex gap-3 flex-nowrap">
              <input
                type="text"
                placeholder="Your Name *"
                className="form-control flex-grow-1"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="form-control flex-grow-1"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="form-control flex-grow-1"
              />
            </div>

            <textarea
              className="form-control mt-3"
              rows="6"
              placeholder="Your Message"
            ></textarea>


            <div className="text-end">
              <button className="btn btn-danger px-4 py-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
