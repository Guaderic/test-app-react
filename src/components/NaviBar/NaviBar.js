import {Container, Navbar, Nav,} from "react-bootstrap";
import {Link} from "react-router-dom";






const NaviBar = () => {
    return(
        <>

            <Navbar bg='dark' expand='sm' variant='dark'>
                <Container>
                    <Navbar.Brand><Nav.Link as={Link} to={'/'}>Movies</Nav.Link></Navbar.Brand>
                    <Navbar.Text><Nav.Link as={Link} to={'booking'}>Booking</Nav.Link></Navbar.Text>
                </Container>
            </Navbar>

        </>
    )
}

export {NaviBar}