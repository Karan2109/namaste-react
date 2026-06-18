import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Resturantcard = () => {
    return (
        <div className="res-card">
            <img className="biryani" src="https://i.pinimg.com/736x/ce/99/19/ce9919d8c596f8d0d68c14ac5bb3693d.jpg" alt="biryani"></img>
            <h3>Reena Foods</h3>
            <h4 className="cusine">Briyani, South-Indian, Chicken</h4>
            <h4 className="rating">4.3 Stars</h4>
            <h4 className="time">40 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search bar</div>
            <div className="res-container">
                <Resturantcard />
                <Resturantcard />
                <Resturantcard />
                <Resturantcard />
                <Resturantcard />
                <Resturantcard />
                <Resturantcard />
                <Resturantcard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Heading />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);