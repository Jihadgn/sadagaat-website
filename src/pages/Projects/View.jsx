import { Card } from "flowbite-react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import address from "../../services";
import { Precision, getNumber } from "../../services/getMonthName";
import parse from "html-react-parser";
import ReactPaginate from "react-paginate";
import '../../i18next/i18n';
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const SingleSubHubProject = (props) => {
  const [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(0);
  let [projectsType, setProjectsType] = useState(0);
  const [postsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  let [Dates, GetDates] = useState({
    startDate: "01/01/2001",
    endDate: "01/01/2025",
  });
  let [orderOn, setOrderOn] = useState(false);
  let [filterOn, setFilterOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState("");
  const [hubId, setHubId] = useState(-1);
  let [sortBtnFlip, toggleSortBtns] = useState("");

  //@example projectType = 'onging'

  //   Get all projects from API

  async function fetchData() {
    let isSorting;
    if (document.getElementsByClassName("flip-v") === undefined) {
      isSorting = false;
    } else isSorting = true;
    const projectType = props.type;
    let prefix = address();
    let FilterUrl =
      prefix +
      "projects/search-order?" +
      "startDate=" +
      Dates.startDate +
      "&endDate=" +
      Dates.endDate +
      "&location" +
      location +
      "&status=" +
      projectType +
      "&inASEOrder=" +
      isSorting +
      "&page=" +
      currentPage +
      "&size=" +
      postsPerPage;
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

  function filterProjectsType(type) {
    return type === "completed" ? 1 : type === "ongoing" ? 2 : 3;
  }

  async function fetchDataFiltered() {
    let isSorting;
    if (document.getElementsByClassName("flip-v") === undefined) {
      isSorting = false;
    } else isSorting = true;
    const projectType = filterProjectsType(props.type);
    let prefix = address();
    let FilterUrl = `${prefix}projects/search-order?startDate=${
      Dates.startDate
    }&endDate=${Dates.endDate}${
      location.length > 0 ? `&location=${location}` : ""
    }${
      hubId !== -1 ? `&hubId=${hubId}` : ""
    }&type=${projectType}&isASEOrder=${isSorting}&page=${currentPage}&size=${postsPerPage}`;
    console.log(FilterUrl);
    const fetcher = await window.fetch(FilterUrl, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const response = await fetcher.json();
    console.log(response);
    setData(response.data);
    setTotalPages(response.totalPages);
    setLoading(false);
    console.log(Dates.endDate);
  }

  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchData();
  }, [props]);

  // Change page
  function paginate(pageNumber) {
    console.log(pageNumber);
    currentPage = pageNumber.selected;
    console.log(currentPage);
    if (filterOn === false) fetchData();
    else fetchDataFiltered();
  }

  function toggleSortBtn() {
    if (sortBtnFlip === "") {
      toggleSortBtns(" flip-v");
      data.reverse();
    } else {
      toggleSortBtns("");
      data.reverse();
    }
  }

  function SetDates() {
    const today = new Date();
    let dates = "";
    console.log(hubId);
    if (
      (startDate !== null &&
        startDate <= today &&
        endDate <= today &&
        startDate <= endDate) ||
      location.length > 0 ||
      hubId !== -1
    ) {
      setFilterOn(true);
      fetchDataFiltered();
    }

    console.log(dates);
  }

  function clearFilter() {
    setStartDate(null);
    setEndDate(null);
    setLocation("");
    setHubId(-1);
    setFilterOn(false);
    fetchDataFiltered();
  }

  function pageProjects() {
    let x = document.getElementsByClassName("flip-v");
    if (x === undefined && filterOn === false) {
      return data;
    } else return data.reverse();
  }

  return (
    <>
      <main>
        {/* our projects */}
        <section className="pt-10 pb-10 grid grid-cols-12 ">
          <div></div>
          <div className="col-span-10">
            {/* filter projects */}
            <div className="grid flex lg:grid-cols-6 md:grid-cols-3 gap-6">
              <div className="pt-2">
                <div className="flex">
                  <label className="mb-2 font-bold text-gray-600">
                    {t("Select Start Date")}
                  </label>
                </div>
                <input
                  type="date"
                  className="text-gray-800 text-sm w-full"
                  placeholder={t("Select Start Date")}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="pt-2 ">
                <div className="flex">
                  <label className="mb-2 font-bold text-gray-600">
                    {t("Select End Date")}
                  </label>
                </div>
                <input
                  type="date"
                  className="text-gray-800 text-sm w-full"
                  placeholder={t("Select End Date")}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="pt-2 ">
                <div className="flex">
                  <label className="mb-2 font-bold text-gray-600">
                    {t("Location")}
                  </label>
                </div>
                <input
                  name="location"
                  className="text-gray-800 text-sm"
                  type="text"
                  placeholder={t("Location")}
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
              <div className="pt-2">
                <div className="flex">
                  <label className="mb-2 font-bold text-gray-600">
                    {t("Select Hub")}
                  </label>
                </div>
                <select
                  name="hub"
                  className="text-gray-800 text-sm w-full"
                  onChange={(e) => {
                    setHubId(parseInt(e.target.value));
                  }}
                >
                  <option value={-1}>{t("none")}</option>
                  <option value={1102}>{t("Water")}</option>
                  <option value={1695}>{t("Health")}</option>
                  <option value={1744}>{t("Feeding")}</option>
                  <option value={1738}>{t("Education")}</option>
                </select>
              </div>
              <div className="pt-2 flex">
                <button
                  className="bg-gray-300 text-sStart datem border-gray-900 text-gray-800 inline-flex"
                  onClick={SetDates}
                >
                  {t("Filter")}
                </button>
                <button
                  className="bg-gray-500 text-sm border-gray-900 text-white inline-flex"
                  onClick={clearFilter}
                >
                  {t("Clear Filter")}
                </button>
              </div>
              <div className="pt-2 flex text-right ">
                <button
                  className="bg-white block text-xs border-gray-900 text-gray-800 inline-flex "
                  onClick={toggleSortBtn}
                >
                  {t("Sort By Date") + " "}
                  <svg
                    class="w-5 h-5 mx-2 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pt-10 pb-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 text-center gap-4  border-b-2">
              {data !== undefined && data.length > 0 ? (
                pageProjects().map((project, index) => (
                  <Link to={"/single-project/" + project.id}>
                    <Card
                      className="max-w-md text-gray-900 causes px-3  "
                      key={index}
                    >
                      <div className="thumb">
                        <img
                          src={`${address()}projects/${project.id}/image`}
                          width="400"
                          height="360"
                        />
                      </div>
                      <div className="grid grid-cols-2 pt-1">
                        <h3 className="text-left text-lg font-bold">
                          {t("Raised")} {getNumber(project.raised)}{" "}
                        </h3>
                        <h3 className="text-right text-lg font-bold">
                          {t("Goal")} {getNumber(project.goal)}{" "}
                        </h3>
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
                      <h2 className="text-left text-lg font-bold pt-1">
                        {t("Project Progress")}
                      </h2>
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
                  {t("No Available Results for Your Search")}
                </h3>
              )}
            </div>
            {totalPages > 1 && (
              <div>
                <ReactPaginate
                  className="pagination flex pt-10"
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
  );
};

export default SingleSubHubProject;
