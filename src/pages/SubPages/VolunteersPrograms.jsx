import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Precision, getNumber } from "../../services/getMonthName";
import "react-circular-progressbar/dist/styles.css";
import ReactPaginate from "react-paginate";
import {
    Card,
} from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import parse from "html-react-parser";

const VolunteerPrograms = (props) => {

    const { t, i18n } = useTranslation();

    const [data, setData] = useState([]);
    let currentPage = 0;
    let [projectsType, setProjectsType] = useState(0);
    const [postsPerPage] = useState(6);
    const [totalPages, setTotalPages] = useState(0);
    let [Dates, GetDates] = useState({
        startDate: "01/01/2001",
        endDate: "01/01/2025",
    });
    let [filterOn, setFilterOn] = useState(false);
    const [loading, setLoading] = useState(true);

    function GetSelectedDates(x) {
        Dates.startDate = x.startDate;
        Dates.endDate = x.endDate;
        console.log(Dates);
        filterOn = true;
        fetchDataFiltered();
    }

    function clearFilter() {
        filterOn = false;
        fetchData();
    }
    //   Get all projects from API

    async function fetchData() {
        filterProjectsType(props.type);
        let prefix = address();
        let FilterUrl =
            prefix + "programs?" + "page=" + currentPage + "&size=" + postsPerPage;
        console.log(FilterUrl);
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
        setTotalPages(response.totalPages);
        setLoading(false);
        console.log(Dates.endDate);
    }

    async function fetchDataFiltered() {
        filterProjectsType(props.type);
        let prefix = address();
        let FilterUrl =
            prefix +
            "programs?" +
            "startDate=" +
            Dates.startDate +
            "&endDate=" +
            Dates.endDate +
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
        setTotalPages(response.totalPages);
        setLoading(false);
        console.log(Dates.endDate);
    }

    function filterProjectsType(type) {
        if (type === "ongoing") projectsType = 2;
        if (type === "completed") projectsType = 1;
        if (type === "planned") projectsType = 3;
    }
    const [cover, setCover] = useState();

    async function fetchCover() {
        const fetch = await window.fetch(`${address()}cover-image/VOLUNTEER3`, {
            headers: { "accept-language": `en` },
        });
        setCover(fetch);
    }


    useEffect(() => {
        fetchData();
        fetchCover();
    }, [props]);

    // Change page
    function paginate(pageNumber) {
        console.log(pageNumber);
        currPage = pageNumber.selected;
        console.log(currPage);
        if (filterOn === false) fetchData();
        else fetchDataFiltered();
    }
    function progress(x, y) {
        console.log(x / y);
        return (x / y) * 100;
    }

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                {
                    (cover !== undefined) ?
                        <section className="hub-section py-10 "
                            style={{
                                backgroundImage: 'url(' + `${address()}cover-image/VOLUNTEER3` + ')'
                            }} >
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">{t("Volunteers Programs")}  </h3>
                            </div>
                        </section>
                        :
                        <section className="py-10 bg-gray-500 ">
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">{t("Volunteers Programs")}  </h3>
                            </div>
                        </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10">


                        <div className="pt-10 pb-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 text-center gap-4  border-b-2">
                            {data !== undefined && data.length > 0 ? (
                                data.map((program, index) => (
                                    <Link to={"/single-project/" + program.id}>
                                        <Card className="max-w-md text-gray-900 causes px-3  " key={index}>
                                            <div className="thumb" >
                                                <img
                                                    src={`${address()}programs/${program.id}/image`}
                                                    width="100%"
                                                    height="260"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 pt-1">
                                                <h3 className="text-left text-lg font-bold"> {t("Target") + ": "} {program.target}</h3>
                                                <h3 className="text-right text-lg font-bold">  {t("Subscribed Volunteers") + ": "}{program.subscribed} </h3>
                                            </div>
                                            <div className="progress-item mt-0">
                                                <div className="progress">
                                                    <div
                                                        data-percent={Precision(
                                                            progress(program.subscribed, program.target)
                                                        )}
                                                        className="progress-bar"
                                                    >
                                                        <span className="percent">
                                                            {Precision(
                                                                progress(program.subscribed, program.target)
                                                            )}
                                                            %
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="text-left text-xl font-bold pt-1">
                                                {program.name}
                                            </h2>
                                            <h2 className="project-discription text-left text-md font-normal">
                                                {parse(`${program.description} `)}
                                            </h2>
                                        </Card>
                                    </Link>
                                ))
                            ) : (
                                <h3 className="text-center">
                                    {t("No Volunteers Programs Available Now")}
                                </h3>
                            )}

                        </div>
                        {totalPages > 1 && (
                            <div >
                                <ReactPaginate className="pagination flex pt-10"
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={totalPages}
                                    marginPagesDisplayed={0}
                                    pageRangeDisplayed={4}
                                    onPageChange={paginate}
                                    activeClassName={"active"}
                                />
                            </div>
                        )}
                    </div>

                </section>



                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default VolunteerPrograms
