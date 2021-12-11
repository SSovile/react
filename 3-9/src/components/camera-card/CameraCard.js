import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import no_image from '../../assets/img/no_image.jpg'
import './camera-card.css'
import axios from "axios";
import {API_URL} from "../../utils/consts";
import ModalFormEdit from "../modal-form/ModalFormEdit";
import {Link} from "react-router-dom";


const CameraCard = ({id, name, cover, memory, price, zoom, loadResponse}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (event) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleDelete(event) {
        axios.delete(`${API_URL}${id}`)
            .then(r => {
                    loadResponse()
                    console.log(r.data)
                }
            )
    }

    return (
        <Link to={`/catalog/${id}`}>
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
                        <button className="camera-card__delete-button" onClick={handleDelete} >
                            <box-icon name='trash'/>
                        </button>
                        <ModalFormEdit id={id} name={name} cover={cover} memory={memory} price={price} zoom={zoom} loadResponse={loadResponse} open={open} setOpen={setOpen} handleClose={handleClose}/>
                        <button className="camera-card__edit-button" onClick={handleClickOpen}>
                            <box-icon name='edit-alt'/>
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
        </Link>
    );
}


CameraCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cover: PropTypes.string,
    memory: PropTypes.string,
    price: PropTypes.string,
    zoom: PropTypes.string,
    loadResponse: PropTypes.func
};

export default CameraCard;