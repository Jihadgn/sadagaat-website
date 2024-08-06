import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import address from '../../services';


function MainSlider() {
    const [slides, setSlides] = useState([]);

    async function fetchData() {
        console.log("slider");
        const fetcher = await window.fetch(`${address()}slider`);
        const res = await fetcher.json();
        setSlides(res);
    }

    // get sliders on page load
    useEffect(() => {
        fetchData();

    }, []);


    var sliderSetting = {
        dots: false,
        speed: 2000,
        autoPlay: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: true,
        arrows: false, 
    };


    return (
        <>
            <main >
                {/* Carousel */}
                <section className="bg-white  mb-10">
                    <Slider {...sliderSetting}>
                        {slides.map((slide, index) => (
                            <div key={index}>
                                <img src={`${address()}slider/${slide.imageName}/image`} className="slider w-full"/>
                            </div>
                        ))}
                    </Slider>
                </section>
            </main>
        </>
    )
}

export default MainSlider
