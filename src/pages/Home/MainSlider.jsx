import React from "react";
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
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
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
