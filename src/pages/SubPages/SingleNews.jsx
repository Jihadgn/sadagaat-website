import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import {
  Link,
  Outlet,
  Navigate,
  useParams,
} from "react-router-dom";

function SingleSNews() {

  const [news, setNews] = useState([]);
  const [images, setImages] = useState([]);

  const params = useParams();
  const id = params.news_id
  async function fetchData() {
    //  Get id of news from url
    const fetcher = await window.fetch(`${address()}news/${id}`);
    const res1 = await fetcher.json();
    const data = res1.newsTranslations.find((sub) => sub.locale === "en")
    const data2 = res1.images;
    setNews(data);
    setImages(data2)
    console.log(data)
    console.log(data2)

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
        {/* {(cover !== undefined) ? */}
        <section className="py-10 bg-gray-500 "
          style={{
            //backgroundImage: 'url(' + "https://images.wallpaperscraft.com/image/couple_mountains_travel_125490_1280x720.jpg"+ ')',
            backgroundImage: 'url(' + `${address()}cover-image/EVENT1` + ')'

          }}>
          <div className="py-10 text-center">
            <h3 className="text-3xl font-bold text-white">  News and Impact Stories   </h3>
          </div>
        </section>
        {/* : */}
        {/* <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white">  News and Impact Stories   </h3>
                        </div>
                    </section> */}
        {/* } */}
        <section className="py-16 bg-white grid grid-cols-12">
          <div></div>
            <div className="px-16 grid lg:grid-cols-3 sm:grid-col-1 py-10 col-span-10 gap-4">
              <div className="mx-1">
              <img
                src={`${address()}news/${id}/image`}
                alt="News"
                height="250px"
                width="450px"
                className="m-0"
                />  
                </div>
              <div className="text-gray-800">
                <div class="event-content pb-6">
                  <h2 className="font-bold text-xl pb-3">
                    {news.name}
                  </h2>
                  <hr className="eventsHr w-10" />
                  <p className="project-discription text-lg pt-7">
                    {news.description}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
        </section>

        <Volunteering />
        <Footer />
      </main>
    </>
  )
}

export default SingleSNews
