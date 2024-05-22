import React from "react";
import { useTranslation } from "react-i18next";

function FixedButton() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <main >
                <button 
                onClick={() => { window.location.href = '/donate' }}
                type="button" className="flex primary fixed z-50 fixed-btn py-3 font-bold rounded-lg text-md px-4 py-2 text-center">
                    <svg className="w-6 h-6 text-red-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    <span className="px-2">{t("Donate")}</span>
                </button>
            </main>
        </>
    )
}

export default FixedButton
