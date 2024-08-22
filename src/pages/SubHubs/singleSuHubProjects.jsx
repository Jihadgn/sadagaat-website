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

import { useTranslation } from "react-i18next";

const SingleSubHubProject = (props) => {
  const { t, i18n } = useTranslation();

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
  //@example projectType = 'onging'
  const projectId = props.projectId;

  function GetSelectedDates(x) {
    Dates.startDate = x.startDate;
    Dates.endDate = x.endDate;
    console.log(Dates);
    setFilterOn(true);
  }

  function getOrder(x) {
    setOrderOn(x);
  }

  function getType(x) {
    console.log(x);
    projectsType = x;
    setProjectsType(x);
  }

  function clearFilter() {
    setFilterOn(false);
    fetchData();
  }
  function filterData(x) {
    if (x === true) {
      setFilterOn(true);
      fetchDataFiltered();
    }
  }

  /**
   * Get all projects from API
   */
  async function fetchData() {
    let prefix = address();
    let FilterUrl =
      prefix +
      "projects/search-order?" +
      "inASEOrder=" +
      false +
      "&page=" +
      currentPage +
      "&size=" +
      postsPerPage +
      "&subhubId=" +
      projectId;
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
    let sorting;
    if (document.getElementsByClassName("flip-v") === undefined) {
      sorting = false;
    } else sorting = true;
    let prefix = address();
    let FilterUrl;
    if (Dates.startDate === "01/01/2001" && Dates.endDate === "01/01/2025") {
      FilterUrl =
        prefix +
        "projects/search-order?" +
        "status=" +
        projectsType +
        "&inASEOrder=" +
        false +
        "&page=" +
        currentPage +
        "&size=" +
        postsPerPage +
        "&subhubId=" +
        projectId;
    } else {
      FilterUrl =
        prefix +
        "projects/search-order?" +
        "startDate=" +
        Dates.startDate +
        "&endDate=" +
        Dates.endDate +
        "&status=" +
        projectsType +
        "&inASEOrder=" +
        false +
        "&page=" +
        currentPage +
        "&size=" +
        postsPerPage +
        "&subhubId=" +
        projectId;
    }
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
  /**
   * This function check the filter of Projects matching with type
   * @param {string} type  type of project 'completed' ,'ongoing' , 'planned'
   * @param {Array} allProjects  array of all projects
   */

  function filterProjectsType(type) {
    if (type === "ongoing") projectsType = 2;
    if (type === "completed") projectsType = 1;
    if (type === "planned") projectsType = 3;
  }
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
        <section className="pt-10 pb-10 grid grid-cols-12 text-center bg-white ">
          <div></div>
          <div className="col-span-10">
            <div className={`pt-10 pb-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 text-center gap-4  border-b-2 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
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
                        <h3 className={` text-lg font-bold ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                          {t("Raised")} {getNumber(project.raised)}{" "}
                        </h3>
                        <h3 className={`text-lg font-bold ${i18n.language === "en" ? "text-left" : "text-right"}`}>
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
                      <h2 className={`text-left text-lg font-bold pt-1 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
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
                      <h2 className={`text-left text-xl font-bold pt-1 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                        {project.name}
                      </h2>
                      <h2 className={`project-discription text-left text-md font-normal ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                        {parse(`${project.description} `)}
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
