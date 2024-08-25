import { Navbar, Nav, Container} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React from "react";

const MainLayout = ({ children }) => {

    const history = useHistory();
    
    const OnSignIn = () => {
        history.replace("/login");
    }

    return (
        <>
        <Navbar bg="light" variant="light" className="mb-4">
            <Navbar.Brand href="/">QR Menu</Navbar.Brand>
            <Nav className="flex-grow-1 justify-content-end">
                <Nav.Link onClick={OnSignIn}>Login</Nav.Link>
            </Nav>
        </Navbar>
        <Container>
            {children}
        </Container>
        </>
    )
}

export default MainLayout;