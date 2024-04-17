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
import parse from 'html-react-parser';

const ProjectsSlider = (props) => {

    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [location, setLocation] = useState("");
    const [hubId, setHubId] = useState(-1);
    const [alertOn, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    let [filterOn, setFilterOn] = useState(false);
    const [loading, setLoading] = useState(true);
    let [sorting, toggleSorting] = useState(false);
    let [sortBtnFlip, toggleSortBtns] = useState("");
    let [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(6);
    const [totalPages, setTotalPages] = useState(0);

    function filterProjectsType(type) {
        return (type === "completed" ? 1 : (type === "ongoing" ? 2 : 3 ));
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
                headers: { "accept-language": `en` },
            },
            {
                items: (page) => page.results,
                params: true,
            }
        );
        const response = await fetcher.json();
        console.log(response);
        setData(response.data);
        setTotalPages(response.totalPages);
        setLoading(false);
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
                        <span className="text-3xl font-bold tracking-tight text-gray-900 px-2">OUR </span>
                        <span className="text-3xl font-bold tracking-tight text-blue-800 "> PROJECTS </span>
                        <div className="pt-9">
                            <Slider {...settings}>
                                {data !== undefined && data.length > 0 ? (
                                    data.map((project, index) => (
                                        <Card className="max-w-md text-gray-900 causes px-3  " key={index}>
                                            <div className="thumb" >
                                                <img
                                                    src={`${address()}projects/${project.id}/image`}
                                                    width="400"
                                                    height="360"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 pt-1">
                                                <h3 className="text-left text-lg font-bold">Raised :  {getNumber(project.raised)}   </h3>
                                                <h3 className="text-right text-lg font-bold">Target :  {getNumber(project.goal)} </h3>
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
                                            <h2 className="text-left text-lg font-bold pt-1">Project Progress</h2>
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
                                            <h2 className="text-left text-xl font-bold pt-1">
                                                {project.name}
                                            </h2>
                                            <h2 className="project-discription text-left text-md font-normal">
                                                {parse(project.description)}
                                            </h2>
                                            <div className="items-center px-4 pt-1">
                                                <button className="bg-white border-2 border-gray-900 rounded-0">Donate
                                                </button>
                                            </div>
                                        </Card>
                                    ))
                                ) : (
                                    <h3 className="text-center">
                                        "No Available Results for Your Search"
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
