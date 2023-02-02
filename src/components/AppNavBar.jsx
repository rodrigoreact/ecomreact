import React, {useEffect, useState} from "react";//bien
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";//bien
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Acart from './Acart';


const AppNavbar = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token")

   //Cart
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


    /* salir*/
    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    /*Obtener historial de compras y sino loguearse*/
    const getPurchases = () => {
        if(token){
            navigate("/purchases")
        } else {
            navigate("/login")
        }
    }
  return (
    <>
    <Navbar expand="lg" variant="dark" bg="primary" size="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        eCommerce App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/purchases">    */}
            <Nav.Link onClick={() => getPurchases()} to="/purchases">                
              Purchases
            </Nav.Link>
            <Nav.Link onClick={handleShow}>
            <i className='bx bx-cart-alt bx-md'></i>
            </Nav.Link>
            {token && 
            <Nav.Link onClick={() => logout()}>Log Out</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Acart show={show} handleClose={handleClose} />
    </>
  );
};

export default AppNavbar;