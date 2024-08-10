import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import submitvolunteer from "../../repository"

import {useTranslation} from "react-i18next";

function Registration() {

    const {t, i18n} = useTranslation();

    const [data, setData] = useState({
        email: "",
        name: "",
        gender: "FEMALE",
        dateOfBirth: "",
        phoneNumber: "",
        whatsPhone: "",
        liveInSudan: "",
        hasCommunityInCountry: "",
        state: "",
        city: "",
        locality: "",
        neighborhood: "",
        bloodGroup: "O+",
        educationLevel: "",
        studyField: "",
        university: "",
        job: "",
        jobTitle: "",
        volunteeredBefore: "",
        volunteeredPeriod: "",
        volunteeredProjects: "",
        lastContribution: "",
        heardAboutSadagaat: "",
        note: "",
        receiveEmails: "",
        volunteerTime: ""
    });


    const [cover, setCover] = useState();
    async function fetchCover() {
        const fetch = await window.fetch(`${address()}cover-image/VOLUNTEER2`, {
            headers: { "accept-language": `en` },
        });
        setCover(fetch);
    }


    // get sliders on page load
    useEffect(() => {
        fetchCover();
    }, []);


    const states = ["khartoum", "north_kordofan", "northern", "kassala",
        "blue_nile", "north_darfur", "south_darfur", "south_kordofan",
        "al_jazirah", "while_nile", "river_nile", "red_sea", "al_qadarif",
        "sennar", "west_darfur", "central_darfur", "east_darfur", "west_kordofan"];

    function Submit() {
        try {
            submitvolunteer(data);
           clearData();
            console.log("done")
        }
        catch {
            console.log("Error Volunteer Form");
        };
    };

  function  clearData () {
        setData({
            email: "",
            name: "",
            gender: "FEMALE",
            dateOfBirth: "",
            phoneNumber: "",
            whatsPhone: "",
            liveInSudan: "",
            hasCommunityInCountry: "",
            state: "",
            city: "",
            locality: "",
            neighborhood: "",
            bloodGroup: "O+",
            educationLevel: "",
            studyField: "",
            university: "",
            job: "",
            jobTitle: "",
            volunteeredBefore: "",
            volunteeredPeriod: "",
            volunteeredProjects: "",
            lastContribution: "",
            heardAboutSadagaat: "",
            note: "",
            receiveEmails: "",
            volunteerTime: ""
        });
    }



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
                                backgroundImage: 'url(' + `${address()}cover-image/VOLUNTEER2` + ')'                            }} >
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase">
                                {t("Registration Form")}</h3>
                            </div>
                        </section>
                        :
                        <section className="py-10 bg-gray-500 ">
                            <div className="py-10 text-center">
                                <h3 className="text-3xl font-bold text-white uppercase"> {t("Registration Form")} </h3>
                            </div>
                        </section>
                }
                <section className="py-10 bg-white grid grid-cols-12 lg:px-16 px-1 ">
                    <div></div> 
                    <div className="col-span-10 lg:px-16 px-1 overflow-hidden ">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 border border-gray-300 lg:p-5 p-1">
                            <h2 className="text-gray-600 text-lg font-bold p-3 col-span-2">{t("Fill Your Volunteering Form")}</h2>
                            <h2 className="text-gray-600 text-lg font-bold p-3 col-span-2">- {t("Personal Information")}</h2>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="">
                                    <label className="mb-2 font-bold text-gray-600">{t("full_name")}</label>
                                    <span className="text-red-500 px-2">*</span>
                                </div>
                                <input required value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 d" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Email")}</label>
                                    <span className="text-red-500 px-2">*</span>
                                </div>
                                <input required value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                                    type="email" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 d" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Date Of Birth")}</label>
                                    <span className="text-red-500 px-2">*</span>
                                </div>
                                <input required value={data.dateOfBirth} onChange={(e) => { setData({ ...data, dateOfBirth: e.target.value }) }}
                                    type="date" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 d" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Phone")}</label>
                                    <span className="text-red-500 px-2">*</span>
                                </div>
                                <input required value={data.phoneNumber} onChange={(e) => { setData({ ...data, phoneNumber: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Whatsapp Phone Number")}</label>
                                </div>
                                <input value={data.whatsPhone} onChange={(e) => { setData({ ...data, whatsPhone: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Gender")}</label>
                                    <span className="text-red-500 px-2">*</span>
                                </div>
                                <select required value={data.gender} onChange={(e) => { setData({ ...data, gender: e.target.value }) }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                                    <option value="FEMALE">{t("FEMALE")}</option>
                                    <option value="MALE">{t("MALE")}</option>
                                </select>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Blood Group")}</label>
                                    <span className="text-red-500 px-2">*</span>
                                </div>
                                <select required value={data.bloodGroup} onChange={(e) => { setData({ ...data, bloodGroup: e.target.value }) }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>

                            <h2 className="text-gray-600 text-lg font-bold px-3 pt-8 col-span-2">-{t("Residency Information")}</h2>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Do you live in Sudan?")}</label>
                                </div>
                                <div className="flex">
                                    <div className="flex px-1">
                                        <input value={data.liveInSudan} onChange={(e) => { setData({ ...data, liveInSudan: "true" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-1" className="ms-2 text-md text-gray-900">Yes </label>
                                    </div>
                                    <div className="flex px-1">
                                        <input value={data.liveInSudan} onChange={(e) => { setData({ ...data, liveInSudan: "false" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-2" className="ms-2 text-md text-gray-900">No </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("In which State do you live ?")}</label>
                                </div>
                                <select value={data.state} onChange={(e) => { setData({ ...data, state: e.target.value }) }}
                                    name="state" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                                    {states.map((state, index) => {
                                        return <option value={state} key={index}>{state}</option>
                                    })}
                                </select>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("In which city?")}</label>
                                </div>
                                <input value={data.city} onChange={(e) => { setData({ ...data, city: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("locality")}</label>
                                </div>
                                <input value={data.locality} onChange={(e) => { setData({ ...data, locality: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("neighborhood")}</label>
                                </div>
                                <input value={data.neighborhood} onChange={(e) => { setData({ ...data, neighborhood: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>

                            <h2 className="text-gray-600 text-lg font-bold px-3 pt-8 col-span-2">- {t("Work and Education")}   </h2>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Educational Level")}</label>
                                </div>
                                <select value={data.educationLevel} onChange={(e) => { setData({ ...data, educationLevel: e.target.value }) }}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                                    <option value="Literate">{t("literate")}</option>
                                    <option value="Primary">{t("primary")}</option>
                                    <option value="Secondary">{t("secondary")}</option>
                                    <option value="Graduate">{t("graduate")}</option>
                                    <option value="Post Graduate">{t("post_graduate")}</option>
                                </select>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("What did you Study(or are studding)?")}</label>
                                </div>
                                <input value={data.studyField} onChange={(e) => { setData({ ...data, studyField: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("What is the name of your university?")}</label>
                                </div>
                                <input value={data.university} onChange={(e) => { setData({ ...data, university: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Do you currently work")}</label>
                                </div>
                                <div className="flex">
                                    <div className="flex px-1">
                                        <input value={data.job} onChange={(e) => { setData({ ...data, job: "true" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-1" className="ms-2 text-md text-gray-900">{t("Yes")} </label>
                                    </div>
                                    <div className="flex px-1">
                                        <input value={data.job} onChange={(e) => { setData({ ...data, job: "false" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-2" className="ms-2 text-md text-gray-900">{t("No")} </label>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-gray-600 text-lg font-bold px-3 pt-8 col-span-2">- {t("About Sadagaat")}</h2>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Did you volunteer in Sadagaat before?")}</label>
                                </div>
                                <div className="flex">
                                    <div className="flex px-1">
                                        <input value={data.volunteeredBefore} onChange={(e) => { setData({ ...data, volunteeredBefore: "true" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-1" className="ms-2 text-md text-gray-900">{t("Yes")} </label>
                                    </div>
                                    <div className="flex px-1">
                                        <input value={data.volunteeredBefore} onChange={(e) => { setData({ ...data, volunteeredBefore: "false" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-2" className="ms-2 text-md text-gray-900">{t("No")} </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("from_where_did_you_hear_about_sadagaat")}</label>
                                </div>
                                <div className="flex">
                                    <div className="flex px-1">
                                        <input value={data.heardAboutSadagaat} onChange={(e) => { setData({ ...data, heardAboutSadagaat: "social_media" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-1" className="ms-2 text-md text-gray-900">{t("Social Media")} </label>
                                    </div>
                                    <div className="flex px-1"> 
                                        <input value={data.heardAboutSadagaat} onChange={(e) => { setData({ ...data, heardAboutSadagaat: "Friends_or_Family" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-2" className="ms-2 text-md text-gray-900">{t("Friends")} </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 md:col-span-1">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("which_time_suits_you_to_voluntary")}</label>
                                </div>
                                <div className="flex">
                                    <div className="flex px-1">
                                        <input value={data.volunteerTime} onChange={(e) => { setData({ ...data, volunteerTime: "morning" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-1" className="ms-2 text-md text-gray-900">{t("Morning time")}</label>
                                    </div>
                                    <div className="flex px-1">
                                        <input value={data.volunteerTime} onChange={(e) => { setData({ ...data, volunteerTime: "evening" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-2" className="ms-2 text-md text-gray-900">{t("Evening time")}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("Would you like us to send a newsletter about Sadagaat work in your email?")}</label>
                                </div>
                                <div className="flex">
                                    <div className="flex px-1">
                                        <input value={data.receiveEmails} onChange={(e) => { setData({ ...data, receiveEmails: "true" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-1" className="ms-2 text-md text-gray-900">{t("Yes")}</label>
                                    </div>
                                    <div className="flex px-1">
                                        <input value={data.receiveEmails} onChange={(e) => { setData({ ...data, receiveEmails: "false" }) }}
                                            id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                        <label for="checkbox-2" className="ms-2 text-md text-gray-900">{t("No")}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 lg:px-5 px-2 col-span-2 pb-5">
                                <div className="flex">
                                    <label className="mb-2 font-bold text-gray-600">{t("do_you_have_anything_to_tell_us")}</label>
                                </div>
                                <textarea value={data.note} onChange={(e) => { setData({ ...data, note: e.target.value }) }}
                                    type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" />
                            </div>

                            <button onClick={Submit} type="submit" className="btn col-span-2 mx-5">{t("Submit")}</button>

                        </div>
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Registration
