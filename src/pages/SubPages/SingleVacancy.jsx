import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';
import parse from "html-react-parser";


function SingleVacancy() {

  const { t, i18n } = useTranslation();
  const [vacancy, setVacancy] = useState([]);
  const [career, setCareer] = useState([]);

  const params = useParams();
  const id = params.career_id
  async function fetchData() {
    //  Get id of news from url
    const fetcher = await window.fetch(`${address()}vacancies/${id}`);
    const res1 = await fetcher.json();
    setCareer(res1);
    const data = res1.vacancieTranslation.find((sub) => sub.locale === i18n.language)
    setVacancy(data);
    console.log(res1)

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
        <section className="py-10 bg-gray-500 "
          style={{
            backgroundImage: 'url(' + `${address()}cover-image/CARRIER1` + ')'
          }}>
          <div className="py-10 text-center">
            <h3 className="text-3xl font-bold text-white">{t("Careers")} </h3>
          </div>
        </section>

        <section className="py-16 bg-white grid grid-cols-12">
          <div></div>
          <div className="px-16 py-10 col-span-10 gap-4">
            <Card className="max-w-6xl text-gray-800">
            {i18n.language === "en" ? (
            <h2 className={`font-bold text-xl pb-3 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                {t("Career Title")}   {vacancy.title}
              </h2>)
              :(
                <h2 className={`font-bold text-xl pb-3 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                 {vacancy.title}  {t("Career Title")} 
              </h2>)
              }

                  <span className={`text-sm pb-3 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                     {parse(`${vacancy.description} `)}
                  </span>
                
              <p className={`project-discription text-lg pt-7 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                {t("Closing Date")}   {career.endDate}
              </p>
              {/* Link to vacancy application link */}
              {career.url != null ? (<Link
                to={career.url}
                target="_blank"
                className="text-center bg-white border rounded border-black text-blue-900 py-3 px-6"                      >
                {t("Apply")}
              </Link>)
                : (<></>)}

            </Card>
            <div></div>
          </div>
        </section>

        <Volunteering />
        <Footer />
      </main>
    </>
  )
}

export default SingleVacancy
