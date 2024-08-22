import {
    Card,
} from 'flowbite-react';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import address from '../../services';
import { Precision, getNumber } from "../../services/getMonthName";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";


const ProjectsSlider = (props) => {

    const { t, i18n } = useTranslation();

    const [data, setData] = useState([]);

    let [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(6);

    function filterProjectsType(type) {
        return (type === "completed" ? 1 : (type === "ongoing" ? 2 : 3));
    }

    async function fetchData() {
        const projectType = filterProjectsType(props.type);
        let prefix = address();
        let FilterUrl =
            prefix +
            "projects/filtter?type=" +
            projectType +
            "&page=" +
            currentPage +
            "&size=" +
            postsPerPage;
        const fetcher = await window.fetch(
            FilterUrl,
            {
                headers: { "accept-language": `${i18n.language}` },
            },
            {
                items: (page) => page.results,
                params: true,
            }
        );
        const response = await fetcher.json();
        console.log(response);
        setData(response.data);

    }

    useEffect(() => {
        fetchData();
    }, [props]);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <main >
                {/* our projects */}
                <section className="pt-10 pb-10 grid grid-cols-12 text-center bg-gray-100 ">
                    <div></div>
                    <div className="col-span-10">
                        <span className="text-3xl font-bold tracking-tight text-gray-900 px-2">{t("Our")}{" "} </span>
                        <span className="text-3xl font-bold tracking-tight text-blue-800 ">  {t("Projects")} </span>
                        <div className="pt-9">
                            <Slider {...settings}>
                                {data !== undefined && data.length > 0 ? (
                                    data.map((project, index) => (
                                        <Link to={"/single-project/" + project.id} key={index}>
                                            <Card className="max-w-md text-gray-900 causes px-3" >
                                                <div className="thumb" >
                                                    <img
                                                        src={`${address()}projects/${project.id}/image`}

                                                    />
                                                </div>
                                                <div className={`grid grid-cols-2 pt-1 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                    <h3 className="text-right flex text-lg font-bold">{t("Raised")}  {getNumber(project.raised)}   </h3>
                                                    <h3 className="text-left flex text-lg font-bold"> {t("Goal")} {getNumber(project.goal)} </h3>
                                                </div>
                                                <div className="progress-item mt-0">
                                                    <div className="progress">
                                                        <div
                                                            data-percent={Precision(project.donationProgress)}
                                                            className="progress-bar"
                                                        >
                                                            <span className="percent">
                                                                {Precision(project.donationProgress)}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className={`text-left text-lg font-bold pt-1 ${i18n.language === "en" ? "text-left" : "text-right"}`}>{t("Project Progress")}</h2>
                                                <div className="progress-item mt-0">

                                                    <div className="progress">
                                                        <div
                                                            data-percent={Precision(project.projectProgress)}
                                                            className="progress-bar"
                                                        >
                                                            <span className="percent">
                                                                {Precision(project.projectProgress)}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project-discription">

                                                    <h2 className={`text-left text-xl font-bold pt-1 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                        {project.name}
                                                    </h2>
                                                    <h2 className={`text-left text-md font-normal ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                                        {project.description}
                                                    </h2>
                                                </div>
                                                <div className="items-center px-4 pt-1">
                                                    <button className="bg-white border-2 border-gray-900 rounded-0">Donate
                                                    </button>
                                                </div>
                                            </Card>
                                        </Link>
                                    ))
                                ) : (
                                    <h3 className="text-center">
                                        {t("No Available Results for Your Search")}
                                    </h3>
                                )}
                            </Slider>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProjectsSlider
