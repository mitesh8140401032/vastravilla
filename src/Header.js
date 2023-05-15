import Container from 'react-bootstrap/Container';
import Logo from './img/vastra_villa_logo.webp'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className="contaier">
            <Navbar collapseOnSelect expand="lg" variant="black">
                <Container>
                    <Navbar.Brand href="#home"> <img src={Logo} height={100} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='bi' >
                            <Link className='aqz' to={'/'}>Home</Link>
                            <Link className='aqz' to={'/Saree'}>Saree</Link>
                            <Link className='aqz' to={'/salwarSuit'}>Salwar_Suit</Link>
                            <Link className='aqz' to={'/Stitched'}>Stitched</Link>
                            <Link className='aqz' to={'/wedding'}>Wedding</Link>
                            <Link className='aqz' to={'/Lehengas'}>Lehengas</Link>
                            <Link className='aqz' to={'/About'}>About</Link>
                            <button className='m-0 p-0' ><Link className='aqz' to={'/Login'}>Login</Link></button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}
