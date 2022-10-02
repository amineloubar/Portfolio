import React from "react";
import mobileDesign from "../assets/other/ui_design.jpg";
import webDesign from "../assets/other/web_design.jpg";
import frontEnd from "../assets/other/front-end.jpg";
import Title from "./reusable components/Title";
import ServicesCard from "./reusable components/ServicesCard";

function Services() {
    return (
        <div className="services-section mt-5 text-center mx-auto" id="services">
            <Title title="Services" />
            <div className="row cards gap-5">
                <ServicesCard
                    src={mobileDesign}
                    alt="mobile design"
                    cardTitle="Mobile Interface Design"
                    cardDescription="Design user interface for mobile application, beautiful and user
        friendly."
                />
                <ServicesCard
                    src={webDesign}
                    alt="web design"
                    cardTitle="Web Design"
                    cardDescription="Design websites interface, websites experience."
                />
                <ServicesCard
                    src={frontEnd}
                    alt="front end"
                    cardTitle="Front end development"
                    cardDescription="Transform the design to a real website using HTML, CSS,
            JavaScript..."
                />
            </div>
        </div>
    );
}

export default Services;
