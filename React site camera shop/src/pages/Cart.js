import React from 'react';
import Container from "@mui/material/Container";
import {useSelector} from "react-redux";
import CameraCardCart from "../components/camera-card/CameraCardCart";

const Cart = () => {
    const items = useSelector(state => state.cart.cart)

    return (
        <>
            <Container sx={{paddingBottom: '50px'}} maxWidth="lg">
                {items.length > 0 ?
                    <div>
                        {items.map((item, index) => <CameraCardCart key={index} id={item.id} name={item.name} cover={item.imageURL} price={item.price} memory={item.memory} zoom={item.zoom}/>)}
                    </div>
                    :
                    <div style={{fontSize: "2rem"}}>
                        Empty
                    </div>}
            </Container>
        </>

    );
};

export default Cart;