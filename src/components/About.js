import React from "react";
import blogData from "../data/blog";

function About({image, about}) {
    const defaultImage = "https://via.placeholder.com/215";
    const selectedImage =  image || defaultImage;
    return (
        <aside>
            <img src={selectedImage} alt="blog logo" />
            <p>{about}</p> 
        </aside>
    );
}

export default About;