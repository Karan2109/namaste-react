import React from 'react'
import useResturantMenu from '../utils/useResturantMenu'
import { useParams } from 'react-router-dom';
// import { useEffect, useState } from "react"
// import Shimmer from './Shimmer';

const ResturantMenu = () => {

    const { resId } = useParams();

    const resInfo = useResturantMenu(resId);

    // const [resInfo, setResInfo] = useState(null)

    // const { resId } = useParams();

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch("Swiggy API was not working (use RESID insted of id in API)");
    //     const json = await data.json();

    //     console.log(json)
    // }

    // if (resInfo === null) return <Shimmer />

    // return (resInfo === null) ? <Shimmer /> : 
    return (
        <>
            <div className="">
                <h1>Resturant Name</h1>
                <h2>Manu</h2>
                <ul>
                    <li>Raita</li>
                    <li>Dosa</li>
                    <li>Medu mada</li>
                    <li>Idli</li>
                </ul>
            </div>
        </>
    )
}

export default ResturantMenu