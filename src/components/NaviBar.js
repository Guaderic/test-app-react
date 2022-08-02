import {Container, Navbar} from "react-bootstrap";

import {BookingDates} from "./BookingDates";


const NaviBar = () => {
    return(
        <>

            <Navbar bg='dark' expand='sm' variant='dark'>
                <Container>
                    <Navbar.Brand>Movies</Navbar.Brand>
                </Container>
            </Navbar>
            <BookingDates/>
        </>
    )
}

export {NaviBar}