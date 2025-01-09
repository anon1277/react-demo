import { useState } from "react";

const UpdateObject = () => {
    const [data, Setdata] = useState({
        name: "anon1277",
        address: {
            city: "patna",
            state: "bihar",
        },
        country: "india",
    });

    // Update name
    const HandleOnclick = (val) => {
        Setdata((prevData) => ({
            ...prevData,
            name: val,
        }));
    };

    // Update city
    const HandleCity = (val) => {
        Setdata((prevData) => ({
            ...prevData,
            address: {
                ...prevData.address,
                city: val,
            },
        }));
    };

    return (
        <>
            <input
                type="text"
                className="form-control m-2"
                onChange={(event) => HandleOnclick(event.target.value)}
                placeholder="Update name"
            />
            <input
                type="text"
                className="form-control m-2"
                onChange={(event) => HandleCity(event.target.value)}
                placeholder="Update city"
            />

            <h1>Updating Objects in State</h1>
            <h1>Name: {data.name}</h1>
            <h1>City: {data.address.city}</h1>
            <h1>State: {data.address.state}</h1>
            <h1>Country: {data.country}</h1>

            <button
                className="btn btn-primary m-2"
                onClick={() => HandleOnclick("Updated Name")}
            >
                Update Name
            </button>
        </>
    );
};

export default UpdateObject;
