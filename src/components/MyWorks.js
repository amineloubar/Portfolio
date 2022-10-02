import React from "react";
import image1 from "../assets/works/img (1).png";
import image2 from "../assets/works/img (2).png";
import image3 from "../assets/works/img (3).png";
import image4 from "../assets/works/img (4).png";
import Title from "./reusable components/Title";
import Carousel from "react-bootstrap/Carousel";

function MyWorks() {
    return (
        <div className="works my-5" id="projects">
            <Title title="Projects" />
            <Carousel className="work-images mx-auto">
                <Carousel.Item>
                    <img className="d-block w-100" src={image1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="web design" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="web design" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image4} alt="mobile design" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyWorks;
