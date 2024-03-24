import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import address from '../../services';

// import parse from "html-react-parser";

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
                <section className="bg-white slider">
                    <Slider {...sliderSetting}>
                        {slides.map((slide) => (
                            <div>
                                <img src={`${address()}slider/${slide.imageName}/image`} />
                            </div>
                        ))}
                    </Slider>
                </section>
            </main>
        </>
    )
}

export default MainSlider
