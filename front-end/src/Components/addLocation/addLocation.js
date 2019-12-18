import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'


const AddLocation = props => {
    const newData = {
        location: '',
        description: '',
        longitude: '',
        latitude: ''
    }
    const [data, setData] = useState(newData)

    const handleChange = e => {
        e.persist();
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const newPlace = {
        location: data.location ,
        description: data.description ,
        longitude: data.longitude ,
        latitude: data.latitude 
    }

    const submitForm = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/locations', newPlace)
        .then(res => {
            console.log(res.data)
            console.log(newPlace)
        })
        setData(newData)
        props.history.push('/map-overview')
    }

    return (
        <div className="form-container">
            <h1 className="h1">
                Add New Location
            </h1>
            <form onSubmit={submitForm}>
                <input 
                name='location'
                placeholder='location name'
                value={data.location}
                onChange={handleChange}
                />
                <input 
                name='description'
                placeholder='description of location'
                value={data.description}
                onChange={handleChange}
                />
                <input 
                name='longitude'
                placeholder='longitude'
                value={data.longitude}
                onChange={handleChange}
                />
                <input 
                name='latitude'
                placeholder='latitude'
                value={data.latitude}
                onChange={handleChange}
                />
                <div className="button-container">
                <button>Submit Case Form</button>
                </div>
            </form>
        </div>
    )
}

export default AddLocation