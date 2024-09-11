import React, { useState, useEffect } from "react";
import address from "../../services";
import axios from "axios";
import { Dropdown, Navbar } from "flowbite-react";
import logo from "../../assets/logosadagaat.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "../../i18next/i18n.js";

function NavBar() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [featuredOnGoingProjects, setFeaturedOnGoingProjects] = useState([]);
  async function fetchFeaturedOnGoingProjects() {
    const url = `${address()}projects/featured-ongoing`;
    const response = await axios.get(url, {
      headers: { "accept-language": `${i18n.language}` },
    });
    setFeaturedOnGoingProjects(response.data);
  }

  const [magazineLinks, setMagazineLinks] = useState({
    allMagazineLink: "",
    currentMagazineLink: "",
  });
  // const magazineLink = magazineLinks.allMagazineLink ;

  async function fetchMagazine() {
    try {
      const url = `${address()}magazine`;
      const res = await axios.get(url);
      setMagazineLinks(res.data);
    } catch (ex) {}
  }

  useEffect(() => {
    fetchMagazine();
    fetchFeaturedOnGoingProjects();
  }, [i18n.language]);

  return (
    <>
      <main className="bg-gray-100 nav-bar">
        {/* navbar */}
        {i18n.language === "en" ? (
          <Navbar fluid rounded>
            <div className="xl:flex items-center">
              <Navbar.Brand href="/">
                <img src={logo} className="h-16 w-auto" />
              </Navbar.Brand>

              <Navbar.Collapse className="text-gray-800 gap-1 xl:flex-nowrap items-center flex-wrap overflow-hidden">
                <Navbar.Link
                  className="text-gray-700 flex font-bold text-md lg:p-4"
                  href="/"
                >
                  {t("Home")}
                </Navbar.Link>
                <Dropdown
                  label={t("About Us")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/about"
                  >
                    {t("About Us")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/contact-us"
                  >
                    {t("Contact")}
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown
                  label={t("Sectors")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/wash"
                  >
                    {t("Water Sector")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/education"
                  >
                    {t("Education Sector")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/health"
                  >
                    {t("Health Sector")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/feeding"
                  >
                    {t("Feeding Sector")}
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown
                  label={t("Projects")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/ongoin-projects"
                  >
                    {t("Ongoing")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/planned-projects"
                  >
                    {t("Planned")}
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown
                  label={t("ongoing projects")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md"
                >
                  {featuredOnGoingProjects.map((project, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        className="text-gray-700 flex font-bold text-md "
                        href={`/single-project/${project.id}`}
                      >
                        {" "}
                        {project.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown>

                <Dropdown
                  label={t("Media")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/gallery"
                  >
                    {t("Photo")} {t("Gallery")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/news"
                  >
                    {t("News")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href={magazineLinks.allMagazineLink}
                  >
                    {t("checkout_monthly_magazine")}
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown
                  label={t("join_us")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md  "
                    href="/ongoin-projects"
                  >
                    {t("donate_to_project")}
                  </Dropdown.Item>
                  <Dropdown
                    label={t("Become a Volunteer")}
                    inline
                    trigger="hover"
                    className="text-gray-800 ml-16 w-full text-md font-bold"
                  >
                    <Dropdown.Item
                      className="text-gray-700 flex font-bold text-md "
                      href="/Volunteers"
                    >
                      {t("About") + " " + t("Volunteers")}
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-gray-700 flex font-bold text-md "
                      href="/volunteerForm"
                    >
                      {t("Volunteers Form")}
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="text-gray-700 font-bold text-md "
                      href="/volunteers-programs"
                    >
                      {t("Volunteers Programs")}{" "}
                    </Dropdown.Item>
                  </Dropdown>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/events"
                  >
                    {t("attend_an_event")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/careers"
                  >
                    {t("Careers")}
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown
                  label={t("sudanese_learning_hub")}
                  inline
                  trigger="hover"
                  className="text-gray-800 text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md  "
                    href="/sudanese-learning-hub"
                  >
                    Cisco Network Academy
                  </Dropdown.Item>
                </Dropdown>
              </Navbar.Collapse>

              <div className="flex gap-4">
                <button
                  className="flex primary font-medium rounded-lg text-md pt-3  px-4 text-center text-white hove:text-white"
                  onClick={() => {
                    window.location.href = "/donate";
                  }}
                >
                  <svg
                    className="w-6 h-6 text-red-600 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="red"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  <span className="px-4"> {t("Donate")}</span>
                </button>

                {i18n.language === "en" ? (
                  <button
                    className={`bg-gray-100 text-gray-700 border border-gray-100 hover:bg-white`}
                    onClick={(event) => changeLanguage("ar")}
                  >
                    العربية
                  </button>
                ) : (
                  <button
                    className={`bg-gray-100 text-gray-700 border border-gray-100 hover:bg-white`}
                    onClick={(event) => changeLanguage("en")}
                  >
                    English
                  </button>
                )}
                <Navbar.Toggle className="bg-white mx-3" />
              </div>
            </div>
          </Navbar>
        ) : (
          <Navbar fluid rounded>
            <div className="flex gap-4">
              <button
                className="flex primary font-medium rounded-lg text-md pt-3  px-4 text-center text-white hove:text-white"
                onClick={() => {
                  window.location.href = "/donate";
                }}
              >
                <svg
                  className="w-6 h-6 text-red-600 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="red"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                <span className="px-4"> {t("Donate")}</span>
              </button>
              {i18n.language === "en" ? (
                <button
                  className={`bg-gray-100 text-gray-700 border border-gray-100 hover:bg-white`}
                  onClick={(event) => changeLanguage("ar")}
                >
                  العربية
                </button>
              ) : (
                <button
                  className={`bg-gray-100 text-gray-700 border border-gray-100 hover:bg-white`}
                  onClick={(event) => changeLanguage("en")}
                >
                  English
                </button>
              )}
              <Navbar.Toggle className="bg-white mx-3" />
            </div>
            <Navbar.Collapse className="text-gray-800 gap-1 xl:flex-nowrap flex-wrap overflow-hidden">
              <Dropdown
                label={t("sudanese_learning_hub")}
                inline
                trigger="hover"
                className="text-gray-800 text-md font-bold"
              >
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md  "
                  href="/sudanese-learning-hub"
                >
                  Cisco Network Academy
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                label={t("join_us")}
                inline
                trigger="hover"
                className="text-gray-800 text-md font-bold"
              >
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md  "
                  href="/ongoin-projects"
                >
                  {t("donate_to_project")}
                </Dropdown.Item>
                <Dropdown
                  label={t("Become a Volunteer")}
                  inline
                  trigger="hover"
                  className="text-gray-800 ml-16 w-full text-md font-bold"
                >
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/Volunteers"
                  >
                    {t("About") + " " + t("Volunteers")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 flex font-bold text-md "
                    href="/volunteerForm"
                  >
                    {t("Volunteers Form")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-gray-700 font-bold text-md "
                    href="/volunteers-programs"
                  >
                    {t("Volunteers Programs")}{" "}
                  </Dropdown.Item>
                </Dropdown>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/events"
                >
                  {t("attend_an_event")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/careers"
                >
                  {t("Careers")}
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                label={t("Media")}
                inline
                trigger="hover"
                className="text-gray-800 text-md font-bold"
              >
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/gallery"
                >
                  {t("Photo")} {t("Gallery")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/news"
                >
                  {t("News")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href={magazineLinks.allMagazineLink}
                >
                  {t("checkout_monthly_magazine")}
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                label={t("featured ongoing projects")}
                inline
                trigger="hover"
                className="text-gray-800 text-md"
              >
                {featuredOnGoingProjects.map((project, index) => {
                  return (
                    <Dropdown.Item
                      key={index}
                      className="text-gray-700 flex font-bold text-md "
                      href={`/single-project/${project.id}`}
                    >
                      {" "}
                      {project.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown>

              <Dropdown
                label={t("Projects")}
                inline
                trigger="hover"
                className="text-gray-800 text-md font-bold"
              >
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/ongoin-projects"
                >
                  {t("Ongoing")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/planned-projects"
                >
                  {t("Planned")}
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                label={t("Sectors")}
                inline
                trigger="hover"
                className="text-gray-800 text-md font-bold"
              >
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/wash"
                >
                  {t("Water Sector")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/education"
                >
                  {t("Education Sector")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/health"
                >
                  {t("Health Sector")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/feeding"
                >
                  {t("Feeding Sector")}
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                label={t("About Us")}
                inline
                trigger="hover"
                className="text-gray-800 text-md font-bold"
              >
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/about"
                >
                  {t("About Us")}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-gray-700 flex font-bold text-md "
                  href="/contact-us"
                >
                  {t("Contact")}
                </Dropdown.Item>
              </Dropdown>

              <Navbar.Link
                className="text-gray-700 flex font-bold text-md  lg:px-4 lg:py-3"
                href="/"
              >
                {t("Home")}
              </Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Brand href="/">
              <img src={logo} className="h-16 w-auto" />
            </Navbar.Brand>
          </Navbar>
        )}
      </main>
    </>
  );
}

export default NavBar;
