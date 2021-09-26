import React, { useContext } from "react";
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/const";
import { observer } from 'mobx-react-lite';


const NavBar = observer(() => {
    // eslint-disable-next-line no-unused-vars
    const { user } = useContext(Context)

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>МамКупи</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button variant={'outline-light'}>Админ Панель</Button>
                            <Button variant={'outline-light'} className="ml-2">Войти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button variant={'outline-light'} onClick= {()=> user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
    )
});



export default NavBar;