import address from "../../services";
import { React, useEffect, useState } from "react";
import ModalVedioComponent from "./videoModel";

function Video() {

    const [link, setLink] = useState({})
    async function fetchTable() {
        const fetcher = await window.fetch(`${address()}video-config`,
            {
                headers: { 'accept-language': `en` }
            });
        const response = await fetcher.json();
        setLink(response);
    }


    useEffect(() => {
        fetchTable();
    }, [])

    return (
        <>
            <main >
                {/* Video */}
                <section className="pt-10 pb-10 text-center fixedBackGround">
                    {
                        <h2 className="text-xl font-bold pb-4 text-white  ">
                            <ModalVedioComponent />
                            {link.text ?? <span>
                                We always provide our best solutions for our community and achieve our society's trust and satisfaction.
                            </span>}
                        </h2>}
                </section>
            </main>
        </>
    )
}

export default Video
