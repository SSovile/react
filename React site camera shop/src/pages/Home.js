import React from "react";
import Container from "@mui/material/Container";
import DiscoverCards from "../components/sections/discover-cards/DiscoverCards";
import {Grid} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import "./home.css"

const Home = () => {
    return (
        <>
            <Container className="home" maxWidth="lg">
                <div className="home__heading-section">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img className='home__image' src='https://cdn.fotosklad.ru/unsafe/fit-in/785x465/3c40e5961ae6426784c16be3d6aeb268/image.jpg' alt="cameras" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className='home__title' component="div" variant="h3">
                        Canon EOS 80D
                        </Typography>
                        <Typography component="div">
                        it's a camera, in a sense related to the Rebel series. It is equipped with a modern autofocus system with 45 focus points, which allows you to focus faster, regardless of whether you use a normal viewfinder or a display on the back of the body. As for the viewfinder itself,
then Canon chose to call it the Smart Viewfinder because it avoids blind spots. The APS-C matrix has a resolution of 24.2 megapixels and shoots at 7fps.</Typography>
                    </Grid>
                </Grid>
                <DiscoverCards/>
                </div>
            </Container>
        </>
    )
}

export default Home