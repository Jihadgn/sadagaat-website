import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import { useTranslation } from 'react-i18next';

function Careers() {

  const { t, i18n } = useTranslation();

    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [cover, setCover] = useState({})
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const fetcher = await window.fetch(`${address()}vacancies/to-apply`,
            { headers: { 'accept-language': `${i18n.language}` } })
        const response = await fetcher.json()
        setData(response)
        setLoading(false)

    }

    async function fetchCover() {
        const fetcher = await window.fetch(`${address()}cover-image/CARRIER1`,
            { headers: { 'accept-language': `${i18n.language}` } })
            .then((fetcher) => {
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
                            backgroundImage: 'url(' + `${address()}cover-image/CARRIER1` + ')'
                        }}
                    >
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white">  {t("Careers")}  </h3>
                        </div>
                    </section>
                    :
                    <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white">  {t("Careers")}  </h3>
                        </div>
                    </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 py-10   ">
                    {data.length > 0 ? (
                    // Maping Vacancies
                    data.map((career) => (
                      <div
                        className="sm-maxwidth400 mt-5 mb-0 pt-10 pb-15 border-bottom"
                        key={career.id}
                      >
                        <div className="row pl-0 pr-0">
                          <div className="col-md-10 col-lg-10">
                            <div className="event-content mt-10 p-5 pb-0 pt-0">
                              <h4 className="uppercase">
                                <span className="text-md text-gray-800 mb-10">
                                  {/* Link to vacancy details */}
                                  <Link to={"/vacancy/" + career.id}>
                                    {career.title}
                                  </Link>
                                </span>
                              </h4>
                              <h6 className="text-md text-gray-800 mb-10">
                               {" "}
                               {t("Closing Date")}: {career.endDate}
                              </h6>
                              {/* FroalaEditorView Component: Used to render data entered by froala editor */}
                              <FroalaEditorView />
                            </div>
                          </div>
                            {/* Link to vacancy details */}
                            <Link
                              className="btn" 
                              to={"/vacancy/" + career.id}
                            >
                              {t("Details")}
                            </Link>
                          </div>
                      </div>
                    ))
                  ) : (
                    // No Vacancies Message
                    <h3 className="text-gray-800 text-xl font-bold text-center">{t("No Vacancies Available Now")}</h3>
                  )}
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Careers
