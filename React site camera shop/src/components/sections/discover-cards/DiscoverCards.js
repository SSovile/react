import React, {useState} from 'react';
import Card from "../card/Card";
import "./discover-cards.css"
import Button from "@material-ui/core/Button";

function DiscoverCards(props) {

    const [showCards, setShowCards] = useState(false);

    const data = [
    {title: 'Canon', memory: 'Memory: 2400', zoom: 'Zoom: 3x', imageURL: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$'},
    {title: 'Camera', memory: 'Memory: 2400', zoom: 'Zoom: 3x', imageURL: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$'},
    {title: 'Camera', memory: 'Memory: 2400', zoom: 'Zoom: 3x', imageURL: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$'},
    {title: 'Camera', memory: 'Memory: 2400', zoom: 'Zoom: 3x', imageURL: 'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$'}]

    let content = null;

    showCards === false
        ? content = data.slice(0, 3).map((item, index) => (
        <Card heading={item.title} memory={item.memory} zoom={item.zoom} imageURL={item.imageURL} key={index}/>
    ))
        : content = data.map((item, index) => (
            <Card heading={item.title} memory={item.memory} zoom={item.zoom} imageURL={item.imageURL} key={index}/>
        ))


    return (
        <div className="discover-cards">
            {content}
            {showCards === false ?
                <Button
                    className="shadow-2xl btn-green"
                    variant="contained"
                    color="primary"
                    onClick={() => {setShowCards(true)}}
                >
                    View More
                </Button>
                : null}
        </div>
    );
}

export default DiscoverCards;