import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Table } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

function Ongoing() {

    const [cover, setCover] = useState();
    const { t, i18n } = useTranslation();

    async function fetchCover() {
        const fetch = await window.fetch(`${address()}cover-image/DONATION`, {
            headers: { "accept-language": `${i18n.language}` },
        });
        setCover(fetch);
    }


    // get sliders on page load
    useEffect(() => {
        fetchCover();
    }, [i18n.language]);

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
                                backgroundImage: 'url(' + `${address()}cover-image/DONATION` + ')'
                            }} >
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">{t("Donate")}    </h3>
                            </div>
                        </section>
                        :
                        <section className="py-10 bg-gray-500 ">
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">{t("Donate")}    </h3>
                            </div>
                        </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10">
                        <h2 className="pb-3 px-3 text-2xl font-bold text-gray-900">{t('Donate Through Banks')}</h2>
                        <hr className="sectors  " />
                        <div className="py-10 text-center">
                            <div className="overflow-x-auto">
                                <Table>
                                    <Table.Body>
                                        <Table.Row className="table-row-1">
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                Sadagaat UK Santander
                                            </Table.Cell>
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                Sort code:09-01-28
                                            </Table.Cell>
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                Acc:83198884
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="table-row-2">
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                Sadagaat Republic of Ireland
                                            </Table.Cell>
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                AIB
                                            </Table.Cell>
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                IBAN
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="table-row-1">
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                IE90AIBK93440216111001 BIC :AIBIE2D
                                            </Table.Cell>
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                NSC:934402
                                            </Table.Cell>
                                            <Table.Cell className="table-cell text-gray-800 border border-gray-300">
                                                Acc:16111001
                                            </Table.Cell>
                                        </Table.Row>

                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <p className="text-gray-700 text-md">
                            {t('hint1')}  <a className='text-primary' href='www.ibancalculator.com'>www.ibancalculator.com </a>
                            {t('hint2')} <a className='text-primary' href='motaztango@gmail.com'>motaztango@gmail.com</a><br />
                            {t('hint3')}<a className='text-primary' href='https://paypal.me/motaztango'> https://paypal.me/motaztango</a>
                        </p>
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Ongoing
