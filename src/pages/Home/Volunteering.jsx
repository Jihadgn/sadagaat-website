import React from "react";
import { useTranslation } from "react-i18next";

function Volunteering() {

    const { t, i18n } = useTranslation();
    return (
        <>
            <main>
                <section className="pt-10 pb-10 grid grid-cols-12 fixedBackGround2">
                    <div></div>
                    {i18n.language === "en" ? (
                        <div className="col-span-10 grid xl:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 pt-5">
                            <h2 className={`col-span-3  text-2xl font-bold text-blue-900 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                {t("join us now as a volunteer")}</h2>
                            <button
                                onClick={() => { window.location.href = '/volunteerForm' }}
                                className="fixedBackGround2 border-black border-2 rounded-full text-blue-900 py-3 hover:bg-blue-700 hover:text-white text-lg font-bold">{t("Become a Volunteer")}</button>
                        </div>
                    )
                        :
                        (
                            <div className="col-span-10 grid xl:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 pt-5">
                                <button
                                    onClick={() => { window.location.href = '/volunteerForm' }}
                                    className="fixedBackGround2 border-black border-2 rounded-full text-blue-900 py-3 hover:bg-blue-700 hover:text-white text-lg font-bold">{t("Become a Volunteer")}</button>
                                <h2 className={`col-span-3  text-2xl font-bold text-blue-900 ${i18n.language === "en" ? "text-left" : "text-right"}`}>
                                    {t("join us now as a volunteer")}</h2>
                            </div>
                        )}

                </section>
            </main>
        </>
    )
}

export default Volunteering
