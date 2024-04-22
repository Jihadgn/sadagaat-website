import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Table } from 'flowbite-react';
function Ongoing() {

    const [cover, setCover] = useState();

    async function fetchCover() {
        const fetch = await window.fetch(`${address()}cover-image/DONATION`, {
            headers: { "accept-language": `en` },
        });
        setCover(fetch);
    }


    // get sliders on page load
    useEffect(() => {
        fetchCover();
    }, []);

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
                                backgroundImage: 'url(' + `${address()}cover-image/DONATION` + ')'                            }} >
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">Donate </h3>
                            </div>
                        </section>
                        :
                        <section className="py-10 bg-gray-500 ">
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">Donate </h3>
                            </div>
                        </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10">
                        <h2 className="pb-3 px-3 text-2xl font-bold text-gray-900">Donate Through Banks</h2>
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
                        <p className="text-gray-700 text-md">If you are looking for the IBAN and swift , please use
                            <a className="px-1 text-primary" href="www.ibancalculator.com">www.ibancalculator.com </a>
                            Otherwise , you can us e PayPal account to pay
                            <a className="px-1 text-primary" href="motaztango@gmail.com">motaztango@gmail.com</a>
                            <p>Using Pay me back using my PayPal.Me link
                                <a className="px-1 text-primary" href="https://paypal.me/motaztango">https://paypal.me/motaztango </a>
                            </p>
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
