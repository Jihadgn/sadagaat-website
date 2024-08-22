import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { useTranslation } from 'react-i18next';

function Volunteers() {

  const {t, i18n} = useTranslation()

    const [volunteers, setVolunteers] = useState([])
    const [volunteerMedia, setVolunteerMedia] = useState([])
    const [length, setLength] = useState(false)
    const [loading, setLoading] = useState(true)
    const [cover, setCover] = useState({});

    // get volunteer page data from API
    async function fetchData() {
        const fetcher = await window.fetch(`${address()}voulenter-page`,{
            headers: { 'accept-language': `${i18n.language}` }
        })
        const response = await fetcher.json()
        setVolunteers(response)
        setLoading(false)
        //check if voluntees have images or videos 
        let length = response.images.length > 0 || response.video.length > 0 ? true : false
        setLength(length)
    }
    async function fetchCover() {
        const fetcher = await window.fetch(`${address()}cover-image/VOLUNTEER1`,
            {
                headers: { 'accept-language': `${i18n.language}` }
            }).then((fetcher) => {
                if (fetcher.status == 500) {
                    setCover(undefined)
                } else {
                    setCover(fetcher);

                }
            });
    }

    useEffect(() => {
        fetchData()
        fetchCover()
    }, [i18n.language])


    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                {(cover !== undefined) ?
                    <section className="py-10 hub-section "
                        style={{
                            backgroundImage: 'url(' + `${address()}cover-image/VOLUNTEER1` + ')'
                        }}>
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> {t("Volunteers")}  </h3>
                        </div>
                    </section>
                    :
                    <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> {t("Volunteers")}  </h3>
                        </div>
                    </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className={`text-gray-800 col-span-10 m-6 p-6 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                        {/* check language  */}
                        {i18n.language === 'ar'?(
                          <FroalaEditorView
                            model={volunteers.htmlPageAr}
                            />
                          ):
                          (<FroalaEditorView

                            model={volunteers.htmlPageEn}
                            />)
                          }
                    </div>
                </section>

                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Volunteers
