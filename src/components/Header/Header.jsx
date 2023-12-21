import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">Explore the Code!</h1>
                    <p className="para__text">Welcome to Dev Point, your go-to destination for mastering the art of HTML and CSS! At Dev Point, we believe in the power of coding to unlock creativity and build the digital future. Whether you're a beginner eager to start your coding journey or an experienced developer looking to enhance your skills, we're here to guide you every step of the way.</p>
                    <a href = "#" className="btn btn__blue">Explore now</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;