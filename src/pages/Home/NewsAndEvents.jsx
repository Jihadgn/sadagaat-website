import React from "react";
import { useState, useEffect } from 'react';
import address from '../../services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


function NewsAndEvents() {

    const [news, setNews] = useState([]);
    const [events, setEvent] = useState([]);


    async function fetchNews() {
        const fetcher = await window.fetch(`${address()}news`, {
            headers: { "accept-language": `en` },
        });
        const response = await fetcher.json();
        console.log(response);
        setNews(response.slice(0, 5));
    }


    //   async function fetchEvents() {
    //     const fetcher = await window.fetch(`${address()}events`, {
    //       headers: { "accept-language": `en` },
    //     });
    //     const response = await fetcher.json();
    //     console.log(response);
    //     setEvent(response.slice(0, 3));
    //   }


    useEffect(() => {
        // fetchEvents();
        fetchNews();
    }, [`en`]);



    return (
        <>
            <main >
                {/* Events and News */}
                <section className="pt-10 pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    <div className="col-span-10 grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 pt-8">
                        <div>
                            <h2 className="text-left text-2xl font-bold pb-4 text-blue-700 ">EVENTS</h2>
                            <hr className="eventsHr-2" />
                            {events.map((event) => (
                            <div className="">
                               
                            </div>
                             ))}
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 col-span-1">
                            <span className="text-left text-2xl font-bold pb-4 sm:pl-0 lg:pl-8 md:pl-0 text-gray-900 ">Latest </span>
                            <span className="text-left text-2xl font-bold pb-4 text-blue-700 "> News and Impact stories</span>
                            <hr className="eventsHr-1" />
                            <Slider
                                autoPlay={5000}
                                stopAutoPlayOnHover
                                dots
                                rtl={true}
                            >
                                {news.map((news_) => (
                                    <div className="causes" key={news_.id}>
                                        <div className="pt-5 grid lg:grid-cols-2 md:grid-cols-2 sm:col-span-1 gap-5">
                                            <div className="">
                                                <img
                                                    src={`${address()}news/${news_.id}/image`}
                                                    alt="News"
                                                    height="250px"
                                                />
                                            </div>
                                            <div className="text-gray-800">
                                                <div class="event-content pb-6  ">
                                                    <h2 className="font-bold text-xl pt-10 pb-3">
                                                        {news_.name}
                                                    </h2>
                                                    <hr className="eventsHr" />
                                                    <p className="project-discription text-lg pt-7">
                                                        {news_.description}
                                                    </p>
                                                </div>
                                                <Link className="btn p-3 rounded-lg "
                                                    to={"/news/" + news_.id}>
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default NewsAndEvents
