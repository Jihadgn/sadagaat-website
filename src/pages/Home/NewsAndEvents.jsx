import React from "react";
import { useState, useEffect } from 'react';
import address from '../../services';
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function NewsAndEvents() {

    const [news, setNews] = useState([]);
    const { t, i18n } = useTranslation();

    async function fetchNews() {
        const fetcher = await window.fetch(`${address()}news`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        const response = await fetcher.json();
        setNews(response);
    }


    useEffect(() => {
        fetchNews();
    }, [i18n.language]);

    var secSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
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
                {/* Events and News */}
                <section className="pt-10 pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    <div className="col-span-10 pt-8">
                        <div>
                            <span className="text-left text-2xl font-bold pb-4 sm:pl-0 lg:pl-8 md:pl-0 text-gray-900 "> {t("Latest News")} </span>
                        </div>
                        <div className="slider-container gap-6">
                            <Slider {...secSettings}>
                                {news.map((news_) => (
                                    <Card className="max-w-md text-gray-900 causes" key={news_.id}>
                                        <div className="thumb">
                                            <img
                                                src={`${address()}news/${news_.id}/image`}
                                                alt="News"
                                                className="overflow-hidden h-auto w-auto"
                                            />
                                        </div>
                                        <div className="text-gray-800">
                                            <div className="event-content pb-6  ">
                                                <h2 className={`font-bold text-xl pt-10 pb-3 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                    {news_.name}
                                                </h2>
                                                <hr className=" w-10" />
                                                <p className={`project-discription text-lg pt-7 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                    {news_.description}
                                                </p>
                                            </div>
                                            <Link to={"/news/" + news_.id}
                                                className="btn p-3 rounded-lg "  >
                                                {t("Read More")}
                                            </Link>
                                        </div>
                                    </Card>
                                ))
                                }
                            </Slider>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default NewsAndEvents
