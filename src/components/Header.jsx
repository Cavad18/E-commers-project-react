import { useContext, useEffect } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext"

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Header() {
  const { user, getUserAccount, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getUserAccount();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
  };

  function renderProfileMenu() {
    if (user) {
      return (
        <div className="profileMenu mx-3 d-flex align-items-center gap-2">
          <Link to="/cart">
            <i className="bi bi-cart3 fs-3 mx-3"></i>
          </Link>
          <Link to="/profile">
          <i className="bi bi-person-circle fs-2"></i>
          </Link>
          <span className="username">{user.username}</span>
          <button className="logoutBtn btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="profileMenu mx-3 d-flex align-items-center gap-2">
          <Link className="bg-danger text-light p-2 rounded" to="/login">
          Log in
          </Link>
        </div>
      )
    }
  }

  return(
    <>
    <header className="header">
<div style={{ backgroundColor: "red", color: "white", textAlign: "center", padding: "8px 0" }}>
  <p className="m-0">
    Summer Sale for all swim suits and free express delivery - OFF 50%!
    <Link className="fw-bold mx-2 text-light" to={"/shop"}>Shop now</Link>
  </p>
</div>
      <Navbar expand="lg" className="container">
        <Container fluid>
          <Navbar.Brand>
              <Link to={"/"}>E-commerce</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center gap-2" style={{ maxHeight: '100px' }} navbarScroll>
              <Link to={'/'}>Home</Link>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/about'}>About</Link>
              {!user && <Link to={'/register'}>Sign Up</Link>}
              <Link to={'/shop'} className="btn btn-danger">Shop</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="What are you looking for?" className="me-2" aria-label="Search"/>
            <Button type="submit" variant="outline-danger">
              <i className="bi bi-search"></i>
            </Button>
            </Form>
            {renderProfileMenu()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  )

}
