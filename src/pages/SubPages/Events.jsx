import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'flowbite-react'

function Events() {

    const [event, setEvent] = useState([])
    const [cover, setCover] = useState({})

    async function fetchEvents() {
        const fetcher = await window.fetch(`${address()}events`, {
            headers: { "accept-language": `en` },
        });
        const response = await fetcher.json();
        setEvent(response);
      

    }
    async function fetchCover() {
        const fetcher = await window.fetch(`${address()}cover-image/EVENT2`,
            { headers: { 'accept-language': `en` } })
            .then((fetcher) => {
                if (fetcher.status == 500) {
                    setCover(undefined)
                } else {
                    setCover(fetcher);
                }
            });
    }

    useEffect(() => {
        fetchEvents()
        fetchCover()
    }, [])

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                {(cover !== undefined) ?
                    <section className="py-10 hub-section "
                        style={{
                            backgroundImage: 'url(' + `${address()}cover-image/EVENT2` + ')'
                        }}
                    >
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> Events  </h3>
                        </div>
                    </section>
                    :
                    <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> Events  </h3>
                        </div>
                    </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {event.map((eventData) => (
                            <Link to={"/events/" + eventData.id}>
                                <Card key={eventData.id}>
                                    <div className="text-gray-800">
                                        <div className="event-content pb-6  ">
                                            <h2 className="font-bold text-xl pt-10 pb-3">
                                                {eventData.name}
                                            </h2>
                                            <hr className="eventsHr w-10" />
                                            <p className="project-discription text-lg pt-7">
                                                {eventData.description}
                                            </p>
                                            <h2 className="text-md text-gray-500 pt-6 pb-3">
                                                <span className="text-md text-gray-500 flex">
                                                    <svg className="w-6 h-6 text-gray-600 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                                                    </svg>
                                                    {eventData.startDate}
                                                </span>
                                                <p className="text-md text-gray-500 flex pt-2">
                                                    <svg className="w-6 h-6 text-gray-600 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                                                    </svg>
                                                    {eventData.locationName}
                                                </p>
                                            </h2>
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

export default Events
