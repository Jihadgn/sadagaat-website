import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import Project from './View'
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Planned() {

  const { t, i18n } = useTranslation();

    const [data, setData] = useState({
        cover: {},
    });
    const cover = data.cover;

    async function fetchData() {
        const fetch = await window.fetch(`${address()}cover-image/PROJECT3`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        setData({ cover: fetch });

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
                {
                    (cover !== undefined) ?
                        <section className="hub-section py-10 "
                            style={{
                                backgroundImage: 'url(' + `${address()}cover-image/PROJECT3` + ')'
                            }} >
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white">{t("Planned Projects")} </h3>
                            </div>
                        </section>
                        :
                            <section className="py-10 bg-gray-500 ">
                                <div className="py-10 text-center">
                                    <h3 className="text-3xl font-bold text-white">{t("Planned Projects")} </h3>
                                </div>
                            </section>
                }
                {/* tabs section */}
                <section className="bg-white p-10 ">
                    <Project type={"planned"} />
                </section>
                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Planned
