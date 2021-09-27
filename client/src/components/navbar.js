import React, { useContext } from "react";
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>МамКупи</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ Панель
                        </Button>

                        <Button
                            variant={'outline-light'}
                            onClick={() => history.push(LOGIN_ROUTE)}
                            className="ml-2"
                        >
                            Выйти
                        </Button>

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