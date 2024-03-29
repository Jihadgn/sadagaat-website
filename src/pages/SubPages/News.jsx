import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Card } from 'flowbite-react';

function News() {

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
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                <section className="py-10 bg-gray-500 ">
                    <div className="py-10 text-center">
                        <h3 className="text-3xl font-bold text-white">  News and Impact Stories   </h3>
                    </div>
                </section>
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 grid grid-cols-3 gap-4">
                        {news.map((news_) => (
                            <Link to={"/news/" + news_.id}>
                                <Card key={news_.id}>
                                    <img
                                        src={`${address()}news/${news_.id}/image`}
                                        alt="News"
                                        height="350px"
                                        width="650px"
                                        className="m-0"
                                    />
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
                                    </div>
                                </Card>
                            </Link>

                        ))}
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default News
