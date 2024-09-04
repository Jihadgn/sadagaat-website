import TopBar from "../Home/TopBar";
import NavBar from "../Home/NavBar";
import FixedButton from "../Home/FixedButton";
import Volunteering from "../Home/Volunteering";
import Footer from "../Home/Footer";
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Tabs, Button, Timeline } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Precision, getNumber } from "../../services/getMonthName";
import axios from "axios";
import Slider from "react-slick";
import Map from "../LocationPicker";
function SingleProject() {
  const { t, i18n } = useTranslation();
  const [pageLoading, setPageLoading] = useState(true);

  const [project, setProject] = useState([]);
  const [data, setData] = useState([]);
  const [steps, setSteps] = useState([]);

  const [images, setImages] = useState([]);
  let sliderSetting = {
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const params = useParams();
  const id = params.project_id;
  async function fetchData() {
    // debugger;
    //  Get id of project from url
    const fetcher = await window.fetch(`${address()}projects/${id}`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const res1 = await fetcher.json();
    const data = res1.projectTranslations.find(
      (sub) => sub.locale === i18n.language
    );
    const data2 = res1.images;
    setProject(data);
    setData(res1);

    try {
      const stepsData = await axios.get(`${address()}projects/step/${id}`, {
        headers: { "accept-language": `${i18n.language}` },
      });
      setSteps(stepsData?.data);
    } catch (error) {
      console.log("can not load project for the home page slider");
    }

    setImages(data2);
  }

  // get project on page load
  useEffect(() => {
    fetchData();
    setPageLoading(false);
  }, [i18n.language]);

  return (
    <>
      <main>
        <FixedButton />
        <TopBar />
        <NavBar />

        <section className="py-10 bg-white grid grid-cols-12">
          <div></div>
          <div className="px-10  py-10 col-span-10 gap-4">
            <div className="text-gray-800">
              <div className="event-content pb-6">
                <h2
                  className={`font-bold text-3xl pb-3 ${i18n.language === "en" ? "text-left" : "text-right"
                    }`}
                >
                  {project.name}
                </h2>
                <div className="overflow-x-auto pt-7">
                  <Tabs aria-label="Full width tabs">
                    <Tabs.Item active title={t("Project Details")}>
                      <div className=" causes grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-4 pb-9 ">
                        <div
                          className="post-thumb   "
                          style={{ mxaHeight: "200px" }}
                        >
                          <img
                            className="img-responsive"
                            src={`${address()}projects/${id}/image`}
                            alt="project image"
                            style={{ height: "500px", width: "500px" }}
                          />
                        </div>
                        <div
                          className={`py-4 ${i18n.language === "en" ? "text-left" : "text-right"
                            }`}
                        >
                          <span className="text-gray-600 text-lg font-bold px-4">
                            {project.locationName}
                          </span>
                          <span className="text-gray-600 text-lg font-bold px-4">
                            {project.startAt}
                          </span>
                          <h2
                            className={`project-discription text-left text-md font-normal pt-6 ${i18n.language === "en"
                                ? "text-left"
                                : "text-right"
                              }`}
                          >
                            {parse(`${project.description} `)}
                          </h2>
                          <h2
                            className={`text-left text-lg font-bold pt-1 ${i18n.language === "en"
                                ? "text-left"
                                : "text-right"
                              }`}
                          >
                            {t("Project Progress")}
                          </h2>
                          <div className="progress-item mt-0 pt-3">
                            <div className="progress">
                              <div
                                data-percent={data.projectProgress}
                                className="progress-bar"
                              >
                                <span className="percent">
                                  {data.projectProgress}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="progress-item mt-0 pt-10">
                            <div className="progress">
                              <div
                                data-percent={data.donationProgress}
                                className="progress-bar"
                              >
                                <span className="percent">
                                  {data.donationProgress}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 pt-1">
                            <h3
                              className={` text-lg font-bold ${i18n.language === "en"
                                  ? "text-left"
                                  : "text-right"
                                }`}
                            >
                              {t("Raised")} {getNumber(data.raised)}{" "}
                            </h3>
                            <h3
                              className={`text-lg font-bold ${i18n.language === "en"
                                  ? "text-left"
                                  : "text-right"
                                }`}
                            >
                              {t("Goal")} {getNumber(data.goal)}{" "}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <hr />

                      <h4 className="mt-6 mb-4 text-center">
                        {t("Project Map")}
                      </h4>
                      {!pageLoading &&
                      data?.locationLat &&
                      data?.locationLng ? (
                        <Map
                          initPosition={{
                            lat: data?.locationLat,
                            lng: data?.locationLng,
                          }}
                        />
                      ) : (
                        <h4>{t("Map not available")}</h4>
                      )}
                    </Tabs.Item>
                    <Tabs.Item title={t("Project Timeline")}>
                      {steps?.length > 0 ? (
                        <div>
                          <Timeline>
                            {steps.map((item) => (
                              <Timeline.Item key={item.id}>
                                <Timeline.Point />
                                <Timeline.Content>
                                  <Timeline.Title>
                                    {item.stepTranslation.find(
                                      (el) => el.locale == item.locale
                                    )?.text || t("No Project title")}
                                  </Timeline.Title>

                                  <div>
                                    <Slider {...sliderSetting}>
                                      {item.imageData?.map((image) => (
                                        <div key={image.id} className="p-2">
                                          <img
                                            src={`${address()}projects/step/${image.name
                                              }/image`}
                                          />
                                        </div>
                                      ))}
                                      {item.videoData?.map((video) => (
                                        <div key={video.id} className="p-2">
                                          <video
                                            muted
                                            controls
                                            src={`${address()}projects/step/${video.name
                                              }/video`}
                                          ></video>
                                        </div>
                                      ))}
                                    </Slider>
                                  </div>
                                </Timeline.Content>
                              </Timeline.Item>
                            ))}
                          </Timeline>
                        </div>
                      ) : (
                        <h4>{t("No Project Timeline")}</h4>
                      )}
                    </Tabs.Item>
                  </Tabs>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>

        <Volunteering />
        <Footer />
      </main>
    </>
  );
}

export default SingleProject;
