import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader";
import CameraCard from "../components/camera-card/CameraCard";
import Container from "@mui/material/Container";
import DropSelector from "../components/selectors/DropSelector";
import {API_URL} from "../utils/consts";
import ModalFormCreate from "../components/modal-form/ModalFormCreate";
import axios from "axios";
import ComboBox from "../components/selectors/ComboBox";

const Catalog = () => {
    const [cameraNameSortValue, setCameraNameSortValue] = useState('asc');
    const [searchValue, setSearchValue] = useState(null);
    const [response, setResponse] = useState({
        loading: false,
        data: null,
        error: false
    })

    function loadResponse() {
        setResponse({
                loading: true,
                data: null,
                error: false
            })
            axios.get(API_URL)
                .then(response => {
                    setResponse({
                        loading: false,
                        data: response.data,
                        error: false
                    })
                    console.log(response.data)
                })
                .catch(() => {
                    setResponse({
                        loading: false,
                        data: null,
                        error: true
                    })
                })
    }

    useEffect(loadResponse, [])

    let content = null
    let allCameras = []

    if (response.error) {
        content = <div className="bg-blue-300 mb-2 p-3 rounded">
            There was an error. Please, try to reload the page.
        </div>
    }

    if (response.loading) {
        content = <Loader/>
    }

    if(response.data) {
        if (cameraNameSortValue === 'asc') {
            let processedData = response.data
            if (searchValue !== null) {
                processedData = response.data.filter(camera => camera.name === searchValue)
            }
            processedData.sort((a, b) => (a.name > b.name) ? 1 : -1)
            content = processedData.map((camera, id) =>
                <CameraCard key={id} id={camera.id} name={camera.name} cover={camera.imageURL} price={camera.price} memory={camera.memory} zoom={camera.zoom} loadResponse={loadResponse}/>
            )
        } else if (cameraNameSortValue === 'desc') {
            let processedData = response.data
            if (searchValue !== null) {
                processedData = response.data.filter(camera => camera.name === searchValue)
            }
            processedData.sort((a, b) => (a.name < b.name) ? 1 : -1)
            content = processedData.map((camera, id) =>
                <CameraCard key={id} id={camera.id} name={camera.name} cover={camera.imageURL} price={camera.price} memory={camera.memory} zoom={camera.zoom} loadResponse={loadResponse}/>
            )
        } else {
            let processedData = response.data
            if (searchValue !== null) {
                processedData = response.data.filter(camera => camera.name === searchValue)
            }
            content = processedData.map((camera, id) =>
                <CameraCard key={id} id={camera.id} name={camera.name} cover={camera.imageURL} price={camera.price} memory={camera.memory} zoom={camera.zoom} loadResponse={loadResponse}/>
        )
        }

        response.data.map((camera) => allCameras.push(camera.name))
    }

    return (
        <>
            <Container sx={{paddingBottom: '50px'}} maxWidth="lg">
                <div className="row">
                    <ComboBox
                        label="Search by name"
                        options={allCameras}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                    <DropSelector
                        select={cameraNameSortValue}
                        setSelect={setCameraNameSortValue}
                        options={["Asc", "Desc"]}
                        values={["asc", "desc"]}
                        label="Sort by name"
                    />
                    <ModalFormCreate loadResponse={loadResponse}/>
                </div>
                { content }
            </Container>
        </>

    );
};

export default Catalog;