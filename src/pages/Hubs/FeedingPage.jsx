import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Tabs } from 'flowbite-react';
import SubHub from './SubHuds'
import parse from 'html-react-parser';


function Feeding() {

  const [data, setData] = useState({
    hub: [],
    offset: 0,
    files: [],
    file: "",
    activeTab1: "active",
    activeTab2: "",
    details: "",
    cover: {},
  });

  const { hub } = data;
  const cover = data.cover;

  async function fetchData() {
    //  Get id of subhub from url
    const fetcher = await window.fetch(`${address()}hubs/1744`, {
      headers: { "accept-language": `en` },
    });
    const response = await fetcher.json();
    const fetch = await window.fetch(`${address()}cover-image/FEEDING_SECT`, {
      headers: { "accept-language": `en` },
    });
    setData({ hub: response, files: response.files, details: response.formatedDescription, cover: fetch });
    console.log("the fetched data ...", hub);

  }
  // get hub on page load
  useEffect(() => {
    fetchData()

  }, [])

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
                backgroundImage: 'url(' + `${address()}cover-image/FEEDING_SECT` + ')'
              }} >
              <div className="py-10 text-center">
                <h3 className="text-3xl font-bold text-white uppercase">Feeding </h3>
              </div>
            </section>
            :
            <section className="py-10 bg-gray-500 ">
              <div className="py-10 text-center">
                <h3 className="text-3xl font-bold text-white uppercase">Feeding </h3>
              </div>
            </section>
        }
        {/* tabs section */}
        <section className="bg-white p-10 grid grid-cols-12">
          <div></div>
          <div className="col-span-10">
            <h2 className="text-left text-2xl font-extrabold pb-4 mt-0 text-gray-900">Feeding Sector</h2>
            <hr className="sectors " />
            <div className="overflow-x-auto pt-7">
              <Tabs aria-label="Full width tabs" >
                <Tabs.Item active title="Sector details">
                  <div className=" grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-4 pb-9 ">
                    <div
                      className="post-thumb thumb"
                      style={{ mxaHeight: "200px" }}
                    >
                      <img
                        className="img-responsive"
                        src={`${address()}hubs/${hub.id}/image`}
                        alt="Feeding Sector"
                        style={{ height: "400px", width: "500px" }}
                      />
                    </div>
                    <div className="py-4">
                      <p className="text-gray-900 text-sm">{hub.description}</p>
                    </div>
                  </div>
                  <hr />
                  <SubHub
                    hubId={hub.id}
                    name={"Feeding Programs"}
                  />
                </Tabs.Item>
                <Tabs.Item title="More information" >
                  {
                    (data.details === null || data.details === "") ? (
                      <div className={"list-formatting "}>
                        <h4>No More Information</h4>
                      </div>
                    ) : (
                      <div>
                        {parse(data.details)}
                      </div>)
                  }
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </section>
        <Volunteering />
        <Footer />
      </main>
    </>
  )
}

export default Feeding
