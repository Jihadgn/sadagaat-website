import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import address from '../../services';
import part_1 from "../../assets/images/partener1.png"
import part_2 from "../../assets/images/partener2.png"
import part_3 from "../../assets/images/partener3.png"
import LazyLoad from 'react-lazy-load'; 
import {useTranslation} from "react-i18next";

function Partners() {

    const {t} = useTranslation();
    const [part, setPart] = useState([]);
    async function fetchData() {
        const fetcher = await window.fetch(`${address()}partener`);
        const response = await fetcher.json();
        setPart(response);
        console.log("the fetch  method call ****************", part);
    }


    const images = [
        { img: part_1 },
        { img: part_2 },
        { img: part_3 }
        ]

    // get sliders on page load
    useEffect(() => {
        fetchData();
    }, []);

    var secSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <main >
                {/* our Partners */}
                <section className=" pt-10 pb-10 text-center bg-gray-100 ">
                    <span className="text-3xl font-bold tracking-tight text-gray-900 px-2"> {t("Our")}{" "} </span>
                    <span className="text-3xl font-bold tracking-tight text-blue-800 "> {t("Partners")} </span>
                    <div className="slider-container pt-9 px-10">
                        <Slider {...secSettings}>
                            {
                                Object.keys(part).length !== 0 ?
                                    part.map((part) => (
                                        <div className="item">
                                            <LazyLoad once={true}>
                                                <a href={part.link}>

                                                    <img
                                                        src={`${address()}partener/${part.imageName}/image`}
                                                        height="100vh" width='150px'
                                                        alt="Sudanese American Medical Association" />
                                                </a>
                                            </LazyLoad>
                                        </div>
                                    ))
                                    :
                                    images.map((image) => (
                                        <LazyLoad once={true}>
                                            <div className="item">
                                                <img
                                                    src={image.img}
                                                    height="100vh" width='150px'
                                                    alt="Sudanese American Medical Association"
                                                />
                                            </div>
                                        </LazyLoad>
                                    ))
                            }
                        </Slider>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Partners
