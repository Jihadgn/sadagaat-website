import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import address from '../../services';
import { useTranslation } from "react-i18next";

function PhotoGalary() {

    const [image, setImage] = useState([]);
    async function fetchData() {
        const gallary = await window.fetch(`${address()}gallary`);
        const res8 = await gallary.json();
        setImage(res8);
    }

  const { t } = useTranslation();

    // get sliders on page load
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <main >

                {/* Photo Gallery */}
                <section className="pt-10 pb-10 grid grid-cols-12 text-center bg-white  ">
                    <div></div>
                    <div className="col-span-10">
                        <span className="text-3xl font-bold tracking-tight text-gray-900 px-2">{t("Photo")}{" "} </span>
                        <span className="text-3xl font-bold tracking-tight text-blue-800 "> {t("Gallery")} </span>
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 px-10 pt-9 ">
                            {image.slice(Math.max(image.length - 3, 1)).map((image, index) => (
                                <div className="gallery-item px-3" style={{ float: "left" }} key={index} >
                                    <div className="thumb ">
                                        <img
                                            className="overflow-hidden h-full w-full"
                                            src={`${address()}gallary/${image.imageName}/image`} />
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                        <div className="items-center px-4 pt-5  ">
                        <Link to="/gallery" className="btn p-3 rounded-lg " >{t("More Images")}
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default PhotoGalary
