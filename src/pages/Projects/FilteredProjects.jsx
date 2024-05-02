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
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";
// import Filters from './ProjectFilter';


const FilteredProjects = (props) => {

    let [data, setData] = useState([]);
    let [currentPage, setCurrentPage] = useState(0);
    let [projectsType, setProjectsType] = useState("");
    const [postsPerPage] = useState(6);
    const [totalPages, setTotalPages] = useState(0);
    let [Dates, GetDates] = useState({
        startDate: "1/1/2001",
        endDate: "1/1/2025",
    });
    let [filterOn, setFilterOn] = useState(false);
    let [orderOn, setOrderOn] = useState(false);
    const [loading, setLoading] = useState(true);
    let searchQuery = "";
    if (props.search === true) {
        searchQuery = localStorage.getItem("searchQuery");
        console.log(searchQuery);
    }
    useEffect(() => {
        fetchData();
    }, [props]);


    async function fetchData() {
        console.log(searchQuery);

        let prefix = address();
        let FilterUrl =
            prefix +
            "projects/search-order?" +
            "name=" +
            searchQuery +
            "&inASEOrder=" +
            false +
            "&page=" +
            currentPage +
            "&size=" +
            postsPerPage;
        console.log(FilterUrl);
        const fetcher = await window.fetch(
            FilterUrl,
            {
                headers: { "accept-language": `en` },
            },
        );
        const response = await fetcher.json();
        setData(response.data);
        // data = response.data;
        setTotalPages(response.totalPages);
        setLoading(false);
    }

    function pageProjects() {
        let x = document.getElementsByClassName("flip-v");
        if (x === undefined && filterOn === false) {
            return data;
        } else return data.reverse();
    }

    // Change page
    function paginate(pageNumber) { 
        console.log(pageNumber);
        currentPage = pageNumber.selected;
        console.log(currentPage);
        fetchData();
    }
    return (
        <>
            <main >
                {/* our projects */}
                <section className="pt-10 pb-10 grid grid-cols-12 text-center">
                    <div></div>
                    <div className="col-span-10">
                        {/* filter projects */}
                        {/* {(data !== undefined && data.length > 0) || filterOn === true ? (
                            <div className="flex">
                                <div className="grid grid-cols-4">
                                    <Filters
                                        clicked={GetSelectedDates}
                                        cleared={clearFilter}
                                        ordered={getOrder}
                                        type={getType}
                                        filter={filterData}
                                    ></Filters>
                                </div>
                            </div>
                        ) : null} */}
                        <div className="pt-10 pb-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 text-center gap-4  border-b-2">
                            {data !== undefined && data.length > 0 ? (
                                pageProjects().map((project, index) => (
                                    <Link to={"/single-project/" + project.id}>
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
                                        </Card>
                                    </Link>
                                ))
                            ) : (
                                <h3 className="text-center">
                                    No Available Results for Your Search"
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
            </main>
        </>
    )
}

export default FilteredProjects
