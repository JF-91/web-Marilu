

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

//React-Bootstrap
import { Navbar as NavbarApp, Nav, Container, } from 'react-bootstrap'

//React-router
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

import Logo from '../icons/Logo';

import { phone, mail } from './network'

const Navbar = () => {

    
  return (
    
        
        <>
        <NavbarApp collapseOnSelect fixed='top' expand='sm'  bg="light" variant='' sticky='top'>
            <Container>
                <NavbarApp.Brand href="/">{<Logo />}</NavbarApp.Brand>
                <NavbarApp.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarApp.Collapse >
                    <Nav className="me-auto" id="responsive-navbar-nav">
                        <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                        <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                        <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
                    </Nav>
                
                    <Nav>
                        <IconButton href={mail}>
                            <EmailOutlinedIcon></EmailOutlinedIcon>
                        </IconButton> 
                    </Nav>
                    <Nav >
                        
                        <IconButton href={phone}>
                            <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
                            {"+ 01 4704203"}
                        </IconButton>
                        
                    </Nav>
                </NavbarApp.Collapse>
                
            </Container>
        </NavbarApp>
        </>
    
  )
}

export default Navbar