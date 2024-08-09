import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import React from "react";
import { useState, useEffect } from 'react';
import address from '../../services';
import Partners from '../Home/Partners';
import '../../i18next/i18n';
import { useTranslation } from "react-i18next";

function Home() {

    const { t, i18n } = useTranslation();

    const [about, setAbout] = useState([]);
    const [about1, setAbout1] = useState("")
    const [about2, setAbout2] = useState("")
    const [about3, setAbout3] = useState("")

    async function fetchAbout() {
        const fetcher = await window.fetch(`${address()}about-us`,
            {
                headers: { 'accept-language': `${i18n.language}` }
            });
        const response = await fetcher.json();
        setAbout(response.text);
    }
    const [cover, setCover] = useState();
    async function fetchAboutImages() {
        const fetch = await window.fetch(`${address()}cover-image/ABOUT1`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        setCover(fetch);
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
    }, [i18n.language]);


    return (
        <>
            <main className="bg-gray-100 ">
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* about Sadagaat */}
                {(cover !== undefined)
                    ?
                    <section style={{
                        //backgroundImage: 'url(' + "https://images.wallpaperscraft.com/image/couple_mountains_travel_125490_1280x720.jpg"+ ')',
                        backgroundImage: 'url(' + `${address()}cover-image/ABOUT1` + ')'

                    }}  >
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white uppercase">{t("About Sadagaat")} </h3>
                        </div>
                    </section>
                    :
                    <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white uppercase">{t("About Sadagaat")} </h3>
                        </div>
                    </section>
                }
                <section className="pt-10 pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    <div className="col-span-10 grid xl:grid-cols-2 md:grid-cols-1 pt-8">
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
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">  {t("About")} <span>{t("Sadagaat")}</span></h1>
                            {
                                about !== null ? <p>
                                    {about} <br />
                                </p> :
                                    <p>
                                        {t("about_message_1")} <br />
                                        {t("about_message_2")}
                                    </p>
                            }
                            <div className="grid grid-cols-4 gap-2 pt-6">
                                <button onClick={() => { window.location.href = '/donate' }}
                                    className="bg-white border-black rounded-0 rounded text-blue-900 py-2">{t("Donate")}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-10 Our mb-10">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 px-10 pt-5">
                        <div className="lg:pl-10 md:pl-0">
                            <h2 className="lg:pl-10 md:pl-0 text-3xl font-bold pt-5 text-center text-white">{t("Our Vision")}</h2>
                            {
                                about.vision !== null ?
                                    <p className="text-white text-center text-xl pt-6">{about.vision}</p>
                                    :
                                    <p className="text-white text-center text-xl pt-6">{t("vision_message_1")}</p>
                            }
                        </div>
                        <div className="pl-10">
                            <h2 className="text-3xl font-bold pt-5 text-center text-white">{t("Our Mission")}</h2>
                            {
                                about.mission !== null ?
                                    <p className="text-white text-center text-xl pt-6">{about.mission}</p>

                                    :
                                    <p className="text-white text-center text-xl pt-6">{t("mission_message_1")}</p>

                            }
                        </div>
                        <div className="pl-10">
                            <h2 className="text-3xl font-bold pt-5 text-center text-white">{t("Our Values")}</h2>
                            {
                                about.value !== null ?
                                    <p className="text-white text-center text-xl pt-6">{about.value}</p>

                                    :
                                    <p className="text-white text-center text-xl pt-6">{t("our_values_description")}</p>

                            }
                        </div>
                    </div>
                </section>
                <Partners />
                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Home
