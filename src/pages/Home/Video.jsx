import address from "../../services";
import { React, useEffect, useState } from "react";
import ModalVedioComponent from "./videoModel";

import {useTranslation} from "react-i18next";

function Video() {

    const {t , i18n} = useTranslation();
    const [link, setLink] = useState({})
    async function fetchTable() {
        const fetcher = await window.fetch(`${address()}video-config`,
            {
                headers: { 'accept-language': `${i18n.language}` }
            });
        const response = await fetcher.json();
        setLink(response);
    }


    useEffect(() => {
        fetchTable();
    }, [i18n.language])

    return (
        <>
            <main >
                {/* Video */}
                <section className="pt-10 pb-10 text-center fixedBackGround">
                    {
                        <h2 className="text-xl font-bold pb-4 text-white  ">
                            <ModalVedioComponent />
                            {link.text ?? <span>{t("video text")}</span>}
                        </h2>}
                </section>
            </main>
        </>
    )
}

export default Video
