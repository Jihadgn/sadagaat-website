import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import address from '../../services';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Home() {

    const { t } = useTranslation();
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

    async function fetchAboutImages() {
        const img1 = await window.fetch(`${address()}about-us/ABOUTUS1/image`);
        const res1 = await img1.json();
        setAbout1(res1);
        const img2 = await window.fetch(`${address()}about-us/ABOUTUS2/image`);
        const res2 = await img2.json();
        setAbout2(img2);
        const img3 = await window.fetch(`${address()}about-us/ABOUTUS3/image`);
        const res3 = await img3.json();
        setAbout3(res3);
    }
    // const classParameter  set class name value  = pe-0 or pl-0 after Check page direction
    const classParameter = i18n.dir() === "rtl" ? "pr-0" : "pl-0";
    // const buttonClass  =  set class name value after Check page direction
    const buttonClass = i18n.dir() === "rtl" ? "mr-5" : "ml-5";
    // get sliders on page load
    useEffect(() => {
        // fetchAboutImages();
        fetchAbout();
    }, [i18n.language]);


    return (
        <>
            <main >
                {/* about Sadagaat */}
                <section className="pt-1 pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    {i18n.language === "en" ? (
                        <div className="col-span-10 grid xl:grid-cols-2 md:grid-cols-1 pt-2 px-16">
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
                                <div className={`${classParameter}`}>
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
                                                    src={require("../images/about 350-300.jpg")}
                                                    alt=""
                                                    style={{ width: "100%", height: "156px" }}
                                                />

                                        }


                                    </div>
                                </div>
                            </div>
                            <div className={`text-black px-4 xl:pt-0 md:pt-6 sm:pt-6 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                <span className="text-2xl font-bold  text-gray-900  uppercase">{t("About Sadagaat")}</span>
                                <div className="pt-7 font-normal text-gray-700">
                                    {about !== null ?
                                        <p className={`${i18n.language === "en" ? "text-left about-mess" : "text-right about-mess"}`}>
                                            {about} <br />
                                        </p> :
                                        <p className="about-mess">
                                            {t("about_message_1")} <br />
                                            {t("about_message_2")}
                                        </p>
                                    }
                                </div>
                                <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2  gap-2 pt-6">
                                    <Link to="/about"
                                        className={`text-center bg-white border rounded border-black text-blue-900 py-3 ${buttonClass}`}>
                                        {t("Read More")}
                                    </Link>
                                    <button onClick={() => { window.location.href = '/donate' }}
                                        className={`text-center btn border-black text-white px-7 py-3  ${buttonClass}`}>
                                        {t("Donate")}
                                    </button>
                                </div>
                            </div>
                        </div>)
                        :
                        (
                            <div className="col-span-10 grid xl:grid-cols-2 md:grid-cols-1 pt-2 px-16">
                                <div className={`text-black px-4 xl:pt-0 md:pt-6 sm:pt-6 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                    <span className="text-xl font-bold  text-gray-900 ">{t("About Sadagaat")}</span>
                                    <div className="pt-7 font-normal text-gray-700">
                                        {about !== null ?
                                            <p className={`${i18n.language === "en" ? "text-left about-mess" : "text-right about-mess"}`}>
                                                {about} <br />
                                            </p> :
                                            <p className="about-mess">
                                                {t("about_message_1")} <br />
                                                {t("about_message_2")}
                                            </p>
                                        }
                                    </div>
                                    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2  gap-2 pt-6">
                                        <Link to="/about"
                                            className={`text-center bg-white border rounded border-black text-blue-900 py-3 ${buttonClass}`}>
                                            {t("Read More")}
                                        </Link>
                                        <button onClick={() => { window.location.href = '/donate' }}
                                            className={`text-center btn border-black text-white px-7 py-3  ${buttonClass}`}>
                                            {t("Donate")}
                                        </button>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3">
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
                                                        src={require("../images/about 350-300.jpg")}
                                                        alt=""
                                                        style={{ width: "100%", height: "156px" }}
                                                    />

                                            }


                                        </div>
                                    </div>
                                    <div className={`${classParameter}`}>
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

                                </div>
                            </div>
                        )}
                </section>
            </main>
        </>
    )
}

export default Home
