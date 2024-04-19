import React from "react";
import { useState, useEffect } from 'react';
import address from '../../services';
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

function NewsAndEvents() {

    const [news, setNews] = useState([]);

    async function fetchNews() {
        const fetcher = await window.fetch(`${address()}news`, {
            headers: { "accept-language": `en` },
        });
        const response = await fetcher.json();
        setNews(response.slice(0, 3));
    }

    //   async function fetchEvents() {
    //     const fetcher = await window.fetch(`${address()}events`, {
    //       headers: { "accept-language": `en` },
    //     });
    //     const response = await fetcher.json();
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
                    <div className="col-span-10 pt-8">
                            <div>
                                <span className="text-left text-2xl font-bold pb-4 sm:pl-0 lg:pl-8 md:pl-0 text-gray-900 ">Latest </span>
                                <span className="text-left text-2xl font-bold pb-4 text-blue-700 "> News and Impact stories</span>
                                <hr className="eventsHr-1" />
                            </div>
                            <div className="pt-9 grid lg:grid-cols-3 md:grid-cols-2 grid:cols-1 gap-6">
                                    {news.map((news_) => (
                                        <Card className="max-w-md text-gray-900 causes" key={news_.id}>
                                            <div className="thumb">
                                                <img
                                                    src={`${address()}news/${news_.id}/image`}
                                                    alt="News"
                                                    className="h-auto w-auto"
                                                />
                                            </div>
                                            <div className="text-gray-800">
                                                <div className="event-content pb-6  ">
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
                                        </Card>
                                    ))
                                    }
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
}

export default NewsAndEvents
