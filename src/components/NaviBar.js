
import {Navbar, Nav, Link, Button} from "react-bootstrap"

function NaviBar () {
    return(
        <>
        <Navbar collapseOnSelect expend='lg' bg='dark' variant='dark'>
            <Navbar.Brand>Movie Site</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            </Navbar>
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="mr-auto">
                <Nav.Link><Link>Home</Link></Nav.Link>
                <Nav.Link><Link>Movies</Link></Nav.Link>
                <Nav.Link><Link></Link>Booking</Nav.Link>
            </Nav>
            <Nav>
                <Button variant='primary' className='mr-2'>Log In</Button>
                <Button varian='primary'>Sign Out</Button>
            </Nav>
        </Navbar.Collapse>
        </>
    )
}

export {Navbar}