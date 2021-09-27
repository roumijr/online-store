import React, {useState}from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../modals/CreateBrand";
import CreateDevice from "../modals/CreateDevice";
import CreateType from "../modals/CreateType";


const Admin = () => {
    const  [brandVisible, setBrandVisible] = useState()
    const [typeVisible, setTypeVisible] = useState()
    const  [deviceVisible, setDeviceVisible] = useState()
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={'outline-dark'}
                className="mt-2 p-2"
                onClick={()=> setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-2"
                onClick={()=> setBrandVisible(true)}
            >
                добавить бренд
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={ ()=> setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={ ()=> setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={ ()=> setDeviceVisible(false)}/>
        </Container>
    )
}



export default Admin;


