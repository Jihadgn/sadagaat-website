import React from "react";
import { useState, useEffect } from 'react';
import address from '../../services';
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

function NewsAndEvents() {

    const [news, setNews] = useState([]);
    const [event, setEvents] = useState([]);
    const { t, i18n } = useTranslation();

    async function fetchNews() {
        const fetcher = await window.fetch(`${address()}news`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        const nData = await fetcher.json();
        setNews(nData);
    }

    async function fetchEvents() {
        const eventsData = await window.fetch(`${address()}events`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        const eData = await eventsData.json();
        setEvents(eData);
    }


    useEffect(() => {
        fetchNews();
        fetchEvents();
    }, [i18n.language]);

    var newsSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    }

    var eventsSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    return (
        <>
            <main >
                {/* Events and News */}
                <section className="pt-10 pb-10 grid grid-cols-12 bg-gray-100">
                    <div></div>
                    <div className="col-span-10 grid lg:grid-cols-2 grid-cols-1 gap-9 pt-8">
                        <div className="slider-container gap-6">
                            <div className="pb-6">
                                <span className="text-left text-2xl font-bold pb-4 sm:pl-0 lg:pl-8 md:pl-0 text-gray-900 "> {t("Latest News")} </span>
                            </div>
                            <Slider {...newsSettings}>
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
                                                    {parse(`${news_.description} `)}
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
                        <div className="slider-container gap-10">
                            <div className="pb-6">
                                <span className="text-left text-2xl font-bold pb-4 sm:pl-0 lg:pl-8 md:pl-0 text-gray-900 "> {t("Events")} </span>
                            </div>
                            <Slider {...eventsSettings}>
                                {event.map((event_) => (
                                    <Card className="max-w-md text-gray-900 causes" key={event_.id}>
                                        <div className="thumb">
                                            <img
                                                src={`${address()}event/${event_.id}/image`}
                                                alt="event"
                                                className="overflow-hidden h-auto w-auto"
                                            />
                                        </div>
                                        <div className="text-gray-800">
                                            <div className="event-content pb-6  ">
                                                <h2 className={`font-bold text-xl pt-10 pb-3 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                    {event_.name}
                                                </h2>
                                                <hr className=" w-10" />
                                                <p className={`project-discription text-lg pt-7 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                    {parse(`${event_.description} `)}
                                                </p>
                                            </div>
                                            <Link to={"/event/" + event_.id}
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
