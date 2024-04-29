import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import address from '../../services';

function Home() {

    const [about, setAbout] = useState([]);
    const [about1, setAbout1] = useState("")
    const [about2, setAbout2] = useState("")
    const [about3, setAbout3] = useState("")

    async function fetchAbout() {
        const fetcher = await window.fetch(`${address()}about-us`,
        {
            headers: { 'accept-language': `en` }
        });
        const response = await fetcher.json();
        setAbout(response.text);
    }

    async function fetchAboutImages() {
        const img1 = await window.fetch(`${address()}about-us/ABOUTUS1/image`);
        const res1 = await img1.json();
        setAbout1(img1);
        const img2 = await window.fetch(`${address()}about-us/ABOUTUS2/image`);
        const res2 = await img2.json();
        setAbout2(img2);
        const img3 = await window.fetch(`${address()}about-us/ABOUTUS3/image`);
        const res3 = await img3.json();
        setAbout3(img3);
    }


    // get sliders on page load
    useEffect(() => {
        fetchAboutImages();
        fetchAbout();
    }, []);


    return (
        <>
            <main >
                {/* about Sadagaat */}
                <section className="pt-1 pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    <div className="col-span-10 grid xl:grid-cols-2 md:grid-cols-1 pt-2">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
                            <div>
                                <div className="img-hover-border">

                                    {
                                        !about1 ?
                                            <img
                                                className="img-responsive"

                                                src={`${address()}about-us/ABOUTUS1/image`}
                                                // src={require("../images/about 275 330.jpg")}
                                                alt=""
                                                style={{ width: "100%", height: "330px" }}
                                            />
                                            :
                                            <img
                                                className="img-responsive"

                                                //  src={`${address()}cover-image/MAINPAGE1`}
                                                src={require("../images/about 275 330.jpg")}
                                                alt=""
                                                style={{ width: "100%", height: "330px" }}
                                            />

                                    }


                                </div>
                            </div>
                            <div className="hidden  md:block">
                                <div className="img-hover-border">
                                    {
                                        !about2 ?
                                            <img
                                                className="img-responsive"

                                                src={`${address()}about-us/ABOUTUS2/image`}
                                                // src={require("../images/about 275 330.jpg")}
                                                alt=""
                                                style={{ width: "100%", height: "156px" }}
                                            />
                                            :
                                            <img
                                                className="img-responsive"

                                                //  src={`${address()}cover-image/MAINPAGE1`}
                                                src={require("../images/about 325-177.jpg")}
                                                alt=""
                                                style={{ width: "100%", height: "156px" }}
                                            />

                                    }

                                </div>
                                <div className="img-hover-border mt-4 mt-sm-20">
                                    {
                                        !about3 ?
                                            <img
                                                className="img-responsive"

                                                src={`${address()}about-us/ABOUTUS3/image`}
                                                // src={require("../images/about 275 330.jpg")}
                                                alt=""
                                                style={{ width: "100%", height: "156px" }}
                                            />
                                            :
                                            <img
                                                className="img-responsive"

                                                //  src={`${address()}cover-image/MAINPAGE1`}
                                                src={require("../images/x.jpg")}
                                                alt=""
                                                style={{ width: "100%", height: "156px" }}
                                            />

                                    }


                                </div>
                            </div>
                        </div>
                        <div className="text-black px-4 xl:pt-0 md:pt-6 sm:pt-6">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">ABOUT SADAGAAT</h1>
                            <p className="pt-7 font-normal text-gray-700">
                                {about != null ?
                                    <p>
                                        {about} <br />
                                    </p> :
                                    <p>
                                        Sadagaat Charity organazation is a registered charity of the Voluntary and
                                        Humanitarian Action Commission, which has been active in assisting vulnerable
                                        groups for more than 15 years, during which many successful projects, whether
                                        seasonal or ongoing, have been implemented through the support of
                                        philanthropists from within and outside Sudan, Under 4 Divisions: Feeding, Health,
                                        Wash, and Education. The implementation of these projects is by an integrated
                                        administrative body, starting with membership in the Sadagaat community and ending
                                        with an executive unit that directly supervises daily activities. The small
                                        executive body that implements the projects depends on: Administrative
                                        competence in coordination and scientific methodology.
                                    </p>
                                }
                            </p>
                            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2   gap-2 pt-6">
                                <Link to="/about"
                                    className="text-center bg-white border rounded border-black text-blue-900 py-3">Read More</Link>
                                <button onClick={() => { window.location.href = '/donate' }}
                                    className="text-center btn border-black text-white px-7 py-3">Donate</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
