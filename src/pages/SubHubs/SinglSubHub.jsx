import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import SingleSubHubProject from './singleSuHubProjects';
import { React, useEffect, useState } from "react";
import {
  Link,
  Outlet,
  Navigate,
  useParams,
} from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function SinglSubHub() {

  const { t, i18n } = useTranslation();

  const [data, setData] = useState({
    subhub: [],
    description: "",
    name: "",
    projects: [],
    offset: 0,
    currentPage: 1,
    postsPerPage: 6,
    subhubId: 0,
  });

  const params = useParams();
  const id = params.subhub_id
  async function fetchData() {
    //  Get id of subhub from url
    const fetcher = await window.fetch(`${address()}subHubs/${id}`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const res1 = await fetcher.json();
    setData({ subhub: res1, description: res1.description, name: res1.name});
    console.log(res1)
    //  Get id of projects from url
    const project = await window.fetch(`${address()}subHubs/${id}/projects`, {
      headers: { "accept-language": `${i18n.language}` },
    });
    const res2 = await project.json();
      console.log(res2)

  }
  // get hub on page load
  useEffect(() => {
    fetchData()

  }, [i18n.language])


  return (
    <>
      <main >
        <FixedButton />
        <TopBar />
        <NavBar />
        {/* title section */}
        <section className="bg-white p-10 grid grid-cols-12">
          <div></div>
          <div className="col-span-10 border border-2">
            <div className="overflow-x-auto pt-7">
              <div className=" grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-4 pb-9 ">
                <div
                  className="post-thumb thumb"
                  style={{ mxaHeight: "200px" }}
                >
                  <img
                    className="img-responsive"
                    src={`${address()}subHubs/${id}/image`}
                    alt="Wash Sector"
                    style={{ height: "400px", width: "500px" }}
                  />
                </div>
                <div className="py-4 px-3">
                <h2 className="pb-3 px-3 text-xl font-bold text-gray-900">{data.name}</h2>
                <hr className="sectors  "/>
                  <p className="text-gray-900 text-sm pt-5">{data.description}</p>
                </div>
              </div>  
            </div>
          </div>
        </section>
        <SingleSubHubProject projectId={params.subhub_id} />
        <Volunteering />
        <Footer />
      </main>
    </>
  )
}

export default SinglSubHub
