import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from 'flowbite-react';

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
          <div className="col-span-10 py-10  grid lg:grid-cols-4 sm:grid-cols-1 gap-5">
            {data.length > 0 ? (
              // Maping Vacancies
              
              data.map((career) => (
                <Card key={career.id} className={`${i18n.language === "en" ? "itemStart" : "itemEnd"}`}>
                  <div className="text-gray-800">
                    <h2 className={`font-bold text-xl pb-3 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                      {career.title}
                    </h2>
                    
                    <p className={`project-discription text-lg pt-5 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                      {t("Closing Date")} : {career.endDate}
                    </p>
                  </div>
                  <Link to={"/vacancy/" + career.id}  className="text-center bg-white border rounded border-black text-blue-900 py-3">
                  {t("Details")}
                  </Link>
                </Card>
              ))
            ) : (
              // No Vacancies Message
              <div className="col-span-4 text-center">
              <span className={`text-gray-800 text-xl font-bold `}>
                {t("No Vacancies Available Now")}
                </span>
              </div>
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
