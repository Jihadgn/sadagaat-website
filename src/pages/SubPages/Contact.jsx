import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import axios from 'axios';
import feedback from "../../feedback"


function Contact() {

    const [data, setData] = useState({
        email: "",
        fullName: "",
        phone: "",
        message: "",
        subject: "",
    });

    function clearData() {
        setData({
            email: "",
            fullName: "",
            phone: "",
            message: "",
            subject: "",
        })
    };
    const [cover, setCover] = useState({})

    const [state, setState] = useState(
        // contact form
        {
            lat: 15.474857402687254,
            lng: 32.53852443117698,
            // response message that return after post form of check validation of text Area
            Contact: {},
            location: {},
            cover: {},
            response: {
                EmptyMessageError: "",
                responseMessage: "",
                alertClass: "",
                iconClass: "",
            },
        })
    async function componentDidMount() {
        try {
            const { data: Contact } = await axios.get(`${address()}contact-info/UK`, {
                headers: { "accept-language": `en` },
            });
            setState({ Contact });
            setState({ location: Contact.location })
            setState({ lat: Contact.location.lat })
            setState({ lng: Contact.location.lng })
            console.log("the contact info render ", state.Contact);
            console.log("the location render from api", state.location.name)
        } catch (error) {
            console.log("can not load Contact for the contact page slider");
        }

    }

    async function fetchCover() {
        const fetcher = await window.fetch(`${address()}cover-image/ABOUT2`,
            { headers: { 'accept-language': `en` } })
            .then((fetcher) => {
                if (fetcher.status == 500) {
                    setCover(undefined)
                } else {
                    setCover(fetcher);
                }
            });
    }

    function Submit() {
        try {
            feedback(data);
            clearData();
            console.log("done")
        }
        catch {
            console.log("Error in Form");
        };
    };


    useEffect(() => {
        componentDidMount()
        fetchCover()
    }, [])

    const contacts = state.Contact;
    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                {(cover !== undefined) ?
                    <section style={{
                        backgroundImage: 'url(' + `${address()}cover-image/ABOUT2` + ')'

                    }}
                        className="py-10  hub-section">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> Contact Us </h3>
                        </div>
                    </section>
                    :
                    <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> Contact Us </h3>
                        </div>
                    </section>
                }

                <section className="py-10 bg-white grid grid-cols-12 px-6">
                    <div></div>
                    <div className="md:col-span-10 col-span-12 grid grid-cols-5 text-gray-800 md:px-10 px-0 gap-6 pb-10">
                        {/* contact */}
                        <div className="grid grid-cols-2 gap-3 lg:col-span-3 md:col-span-5 col-span-5 mx-5 pb-16">
                            <div className="col-span-2  pb-9">
                                <h2 className="font-bold text-xl pb-3">
                                    Contact Us
                                </h2>
                                <hr className="contact-hr-2" />
                            </div>
                            <div className="bg-gray-100 grid grid-cols-4 md:col-span-1 col-span-2 p-5">
                                <div><svg className="w-12 h-12 text-blue-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                                </svg>
                                </div>
                                <div className="col-span-3 pt-3 ">
                                    <h2 className="flex font-bold text-sm pb-3 text-gray-800">Our Office Location</h2>
                                    {
                                        (contacts != undefined && location != undefined) ?
                                            <p>{location.name}</p> :
                                            <p>Address 33-39, Bowling Green Lane,London</p>

                                    }
                                </div>
                            </div>
                            <div className="bg-gray-100 grid grid-cols-4 md:col-span-1 col-span-2 p-5">
                                <div><svg className="w-12 h-12 text-blue-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                                </svg>
                                </div>
                                <div className="col-span-3 pt-3">
                                    <div className="flex font-bold text-sm pb-3 text-gray-800">Contact Number</div>
                                    {(contacts != undefined && contacts.length != 0) ?
                                        <p> {contacts.phone}</p> :
                                        <p>447884060063+ </p>
                                    }
                                </div>
                            </div>
                            <div className="bg-gray-100 grid grid-cols-4 md:col-span-1 col-span-2 p-5">
                                <div><svg className="w-12 h-12 text-blue-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                                </svg>
                                </div>
                                <div className="col-span-3 pt-3">
                                    <div className="flex font-bold text-sm pb-3 text-gray-800">Email Address</div>
                                    {
                                        contacts != undefined && contacts.length != 0 ?
                                            <p>
                                                {contacts.email}
                                            </p>
                                            : <p>info@sadagaat-uk.org</p>
                                    }
                                </div>
                            </div>
                            <div className="bg-gray-100 grid grid-cols-4 md:col-span-1 col-span-2 p-5">
                                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-600">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className="col-span-3 pt-3">
                                    <div className="flex font-bold text-sm pb-3 text-gray-800">Website</div>
                                    {
                                        contacts != undefined && contacts.length != 0 ?
                                            <p>
                                                {contacts.website}
                                            </p>
                                            :
                                            <p>www.sadagaat-uk.org </p>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* form */}
                        <div className="grid grid-cols-2 gap-3 lg:col-span-2 md:col-span-5 col-span-5">
                            <div className="col-span-2 pb-9 text-gray-700">
                                <h2 className="font-bold text-xl pb-3">
                                    Get in Touch
                                </h2>
                                <hr className="contact-hr-1" />
                            </div>
                            <form className="grid grid-cols-2  gap-3 col-span-2">
                                <div className="pt-2 col-span-2 md:col-span-1">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Name</label>
                                    </div>
                                    <input placeholder="Full Name" value={data.fullName} onChange={(e) => { setData({ ...data, fullName: e.target.value }) }}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-2 col-span-2 md:col-span-1">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Email</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <input placeholder="Enter Email" required value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                                        type="email" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-2 col-span-2 md:col-span-1">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Subject</label>
                                    </div>
                                    <input placeholder="Enter Subject" value={data.subject} onChange={(e) => { setData({ ...data, subject: e.target.value }) }}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-2 col-span-2 md:col-span-1">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Phone number:</label>
                                    </div>
                                    <input placeholder="Enter phone" value={data.phone} onChange={(e) => { setData({ ...data, phone: e.target.value }) }}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-2 col-span-2 ">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Message</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <textarea placeholder="Enter your message" rows={4} required value={data.message} onChange={(e) => { setData({ ...data, message: e.target.value }) }}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                <button onClick={Submit} type="submit" className="btn text-xs">Send your message</button>

                            </form>
                        </div>
                        {/* map */}
                        <div className="col-span-5 ">

                        </div>
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Contact
