import address from "../../services";
import { React, useEffect, useState } from "react";

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
                    <div className="pt-10 pb-10 grid grid-cols-9 justify-content-center " >
                        <div className="col-span-4"></div>
                        <a href="#" className="cursor-pointer ">
                            <svg className="w-24 h-24 p-3 col-span-1 rounded-full border-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 18V6l8 6-8 6Z" />
                            </svg>
                        </a>
                    </div>
                    {/* <ModalVedioComponent /> */}
                    {
                        <h2 className="text-xl font-bold pb-4 text-white  ">
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
