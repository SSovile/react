import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import no_image from '../../assets/img/no_image.jpg'
import './camera-card.css'
import {useDispatch} from "react-redux";
import {removeItemAction} from "../../redux/actions/actions";

const CameraCardCart = ({id, name, cover, memory, price, zoom}) => {
    const dispatch = useDispatch()
    const removeItem = (id) => {
        dispatch(removeItemAction(id))
    }
    return (
            <Card className="camera-card">
                <CardMedia
                    className="camera-card__image"
                    component="img"
                    image={cover ? cover : no_image}
                    alt={name + " cover"}
                />
                <Box>
                    <CardContent>
                        <Typography className="camera-card__title" component="div" variant="h4">
                            {name}
                        </Typography>
                        <button className="camera-card__delete-button" onClick={() => removeItem(id)} >
                            <box-icon name='trash'/>
                        </button>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                            $ {price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                        Zoom: {zoom}
                        </Typography>
                        <Typography className="camera-card__additional" component="div">
                            {memory}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
    );
}


CameraCardCart.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cover: PropTypes.string,
    memory: PropTypes.string,
    price: PropTypes.string,
    zoom: PropTypes.string,
    loadResponse: PropTypes.func
};

export default CameraCardCart;