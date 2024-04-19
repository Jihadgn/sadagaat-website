import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from 'flowbite-react';
import {
    Link,
    Outlet,
    Navigate,
    useParams,
} from "react-router-dom";

function SingleNews() {

    var sliderSetting = {
        dots: false,
        speed: 2000,
        autoPlay: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: true,
        arrows: false,
    };

    const [state, setState] = useState({
        // all news 
        news: [],
        // videos and Images
        allMedia: [],
        // translation 
        translationNews: {},
        cover: {}
    })
   
      /**
   * get the news from ApIs
   */
  async function componentDidMount() {
    // get id of news from url
    const params = useParams();
    const id = params.news_id 

    try {
      const { data: news } = await axios.get(`${address()}news/${id}`);
      setState({
        news
      });
      // join videos and images in one array
      fillMediaArray();
      // call translation new 
      setTranslationData()

    }
    catch (error) {
      console.log("can not load news for the home page slider");
    }
    //  console.log(state.news)
    try {

      const fetcher = await window.fetch(`${address()}cover-image/EVENT1`, {
        headers: { "accept-language": `${en}` },
      });
      const response = await fetcher.json();

      setState({ cover: response })
      console.log("the fetched cover image  ...", cover);
      if (cover.status === undefined) {
        setState({ cover: undefined })

      }
    } catch (error) {
      console.log(error)
    }
  }


  /**
   * When component recive props Like Language props its re call setTranslation function 
   */
  async function componentWillReceiveProps() {
    try {

      const fetcher = await window.fetch(`${address()}cover-image/EVENT1`, {
        headers: { "accept-language": `${en}` },
      });
      const response = await fetcher.json();

      setState({ cover: response })
      console.log("the fetched cover image  ...", cover);
      if (cover.status === undefined) {
        setState({ cover: undefined })

      }
    } catch (error) {
      console.log(error)
    }

    setTranslationData()

  }

  /**
 * this function  join two video and image arrays in one array, and add new attribute type 'image'/'video'
 */
 const fillMediaArray = () => {
    const news_images = state.news.images
    const news_videos = state.news.video
    const allMedia = []

    /**fill array with default Image if its not null */
    if (state.news.imageUrl !== null) {
      allMedia.push({
        type: 'image',
        id: state.news.id,
        name: state.news.id
      })
    }

    if (news_images.length > 0) {
      news_images.map((image) => {

        allMedia.push({
          type: 'image',
          id: image.id,
          name: image.name
        })

      })
    }

    if (news_videos.length > 0) {
      news_videos.map((video) => {

        allMedia.push({
          type: 'video',
          id: video.id,
          name: video.name
        })

      })
    }
    setState({ allMedia })

  }
  /**
   * this function looping through translation array and return news when local attribute equals selected language en | ar
   * you can get user selected language call  en props
   * @return vois set translation news in the state
   */
  const setTranslationData = () => {
    // get newstranslation  array 
    const newsData = state.news.newsTranslations
    // loping through array
        for (let i = 0; i < newsData.length; i++) {
          // check user language with lacale
            // fill the state with one translation news , news name and descriptions
            setState({
              translationNews: {
                name: newsData[i].name,
                description: newsData[i].description
              }
            })
            // console.log('translationsDataname',state.translationNews)

          
        }
      }

    useEffect(() => {
        componentWillReceiveProps();
        componentDidMount()
    }, [`en`]);

    const { news } = state;
    const allMedia = state.allMedia
    const translationNews = state.translationNews
    const cover = state.cover;

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
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 grid grid-cols-2 gap-4">
                        <div>
                        <h2 className="text-gray-900 text-lg py-10 text-center">{translationNews.name}</h2>
                        </div>
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main >
        </>
    )
}

export default SingleNews
