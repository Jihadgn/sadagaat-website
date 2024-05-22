import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { submit_course_registration } from '../../services/courseReg';
import { routeToUrl } from '../../services';
const REST_COUNTRIES_URL = "https://restcountries.com/v3.1/all?fields=name";
const REST_NATIONALITY_URL = "https://restcountries.com/v3.1/demonym/{0}?";
// const REST_CITIES_URL = "https://countriesnow.space/api/v0.1/countries/cities";
import { useTranslation } from 'react-i18next';

const formatString = (template, ...args) => {
    return template.replace(/{([0-9]+)}/g, function (match, index) {
        return typeof args[index] === 'undefined' ? match : args[index];
    });
}
function Course() {

  const { t, i18n } = useTranslation();

    const interestAreas = [
        "Networking",
        "Cyber Security",
        "Data Science",
        "Programming",
        "Operating Systems & IT"
    ];

    const iTBackgrounds = [
        "Working as an IT professional",
        "Limited experience or no experience",
        "Fresh Graduate",
        "Currently a university student",
        "Other"
    ];
    const whyAreYouInterested = [
        "To get a new job",
        "To get promoted in my current job",
        "To enhance my technical skills in the IT field",
        "To expand my knowledge in a specific IT specialization",
        "To meet like-minded professionals and network in the IT field",
        "Other"
    ]

    const [news, setNews] = useState([]);


    async function fetchData() {
        const fetcher = await window.fetch(`${address()}cisco-category/`);
        const response = await fetcher.json();
        setNews(response);
    }
    const [countries, setCountries] = useState([]);
    const [nationalities, setNationalities] = useState([]);

    const [response, setResponse] = useState({ styleClass: "", message: "" });
    // form fields
    const [name, setName] = useState("");
    const [gender, setGender] = useState(false); // False = Male, True = Female
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nationality, setNationality] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [interestArea, setInterestArea] = useState(interestAreas[0]);
    const [iTBackground, setITBackground] = useState(iTBackgrounds[0]);
    const [iTBackgroundOthersText, setITBackgroundOthersText] = useState("");
    const [trainingType, setTrainingType] = useState("");
    const [haveLaptop, setHaveLaptop] = useState(true);
    const [haveGoodInternetAccess, setHaveGoodInternetAccess] = useState(true);
    const [courseInterestReason, setCourseInterestReason] = useState(whyAreYouInterested[0]);
    const [courseInterestReasonOthersText, setCourseInterestReasonOthersText] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        fetchData();
        fetch(REST_COUNTRIES_URL)
            .then(res => res.json())
            .then(data => {
                const list = data.map(d => d.name.common);
                list.sort();
                setCountries(list);
                handleCountryChanged(list[0]);

                // Fetch each country's nationalities
                const listOfPromises = list.map(c => {
                    return fetch(formatString(REST_NATIONALITY_URL + new URLSearchParams({
                        fields: "demonyms"
                    }), c.replace(/ /g, '%20')))
                        .then(res => res.json())
                        .catch(console.error)
                })

                Promise.all(listOfPromises)
                    .then(res => {
                        let nas = []
                        res.forEach(data => {
                            if (!Array.isArray(data))
                                return;

                            const n = data?.map(i => i.demonyms.eng.f);
                            nas = nas.concat(n);
                        })
                        nas.sort();
                        setNationalities(nas);
                        if (nas.length > 0)
                            setNationality(nas[0]);
                    })
            })
            .catch(console.error)
    }, []);

    async function handleCountryChanged(newCountry) {
        setCountry(newCountry);
        setCity("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name,
            phoneNumber,
            gender: gender ? "FEMALE" : "MALE",
            email,
            dateOfBirth,
            nationality,
            location: `${country}#@@#${city}`, // Combing country and city into a single variable
            interestArea,
            iTBackground: iTBackgroundOthersText.length > 0 ?
                iTBackgroundOthersText : iTBackground,
            hasDevice: haveLaptop,
            trainingType,
            hasInternet: haveGoodInternetAccess,
            reasoning: courseInterestReasonOthersText.length > 0 ?
                courseInterestReasonOthersText : courseInterestReason,
            comment
        }

        submit_course_registration(data)
            .then(response => {
                setResponse({
                    message: "Your Form Submitted Successfully",
                    styleClass: "success-msg",
                });
                routeToUrl(`/sudanese-learning-hub`);
            })
            .catch(err => {
                console.log(err);
                let message = err.message;
                if (err.message.includes("400"))
                    message = "It appears there may be a mistake or incorrect data entry; please review and resubmit."
                else if (err.message !== "Network Error")
                    message = "Something went wrong please try again";

                setResponse({
                    message: message,
                    styleClass: "error-msg",
                });
            });
    }

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                <section className="py-10 bg-gray-500 ">
                    <div className="py-10 text-center">
                        <h3 className="text-3xl font-bold text-white"> Course Form  </h3>
                    </div>
                </section>
                <section className="py-10 bg-white grid grid-cols-12 lg:px-16 md:px-2 px-2">
                    <div></div>
                    <div className="col-span-10 lg:px-16 px-1">
                        <form
                            className="register-form"
                            onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 sm:grid-cols-1 border border-gray-300 p-5 overflow-hidden">
                                <h2 className="text-red-600 text-xl text-center font-bold p-3 col-span-2">ONLY SUDANESE PEOPLE CAN APPLY</h2>
                                <h2 className="text-gray-600 text-lg font-bold p-3 col-span-2 flex">
                                {t("form_intro")}
                                </h2>
                                <h2 className="text-gray-600 text-lg font-bold p-3 col-span-2">{"- " + t("candidate_information")}</h2>
                                <div className="pt-4 px-5 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Name</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <input required value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        title={t("Please enter your fullName")}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-4 px-5 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Email</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <input required value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        pattern="^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,8})(\.[a-z]{2,8})?$"
                                        title={t("that email address is invalid")}
                                        type="email" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Date Of Birth</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <input required value={dateOfBirth}
                                        onChange={(e) => { setDateOfBirth(e.target.value) }}
                                        type="date" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d" />
                                </div>
                                <div className="pt-4 px-5 col-span-2 md:col-span-1">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Phone number</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <input required value={phoneNumber}
                                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                                        pattern="^\+?(\d{1,3})?\s?\d{4,13}$"
                                                        title={(
                                                            "Enter a valid phone number ranges from 4 to 13 digits"
                                                        )}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>

                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Gender</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select required value={gender}
                                        onChange={(e) => { setGender(e.target.value) }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="FEMALE">FEMALE</option>
                                        <option value="MALE">MALE</option>
                                    </select>
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Sudanese</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select required value={nationalities}
                                        onChange={(e) => { setNationalities(e.target.value) }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600"> {t("current_location")}   </label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select required value={country}
                                        onChange={(e) => { handleCountryChanged(e.target.value) }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {countries?.map((c, index) => {
                                            return <option
                                                key={index}
                                                name="country">{c}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">City</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <input required value={city}
                                        onChange={(e) => { setCity(e.target.value) }}
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                <div className="pt-4 px-5 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600"> {t("it_background")}   </label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select required value={iTBackground}
                                        onChange={(e) => {
                                            setITBackground(e.target.value)
                                            setITBackgroundOthersText("");
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {iTBackgrounds.map((b, index) => {
                                            return (
                                                <option key={index}
                                                    name="it_background"
                                                    value={b}>{b}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">{t("interest_area")}  </label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select onChange={(e) => { setInterestArea(e.target.value) }}
                                        value={interestArea}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {interestAreas.map((b, index) => {
                                            return (
                                                <option key={index}
                                                    name="it_background"
                                                    value={b}>{b}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">What type of courses do you want to register ?</label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select onChange={(e) => { setTrainingType(e.target.value) }}
                                        value={trainingType}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {news.map((cate, index) => {
                                            return (
                                                <option key={index}
                                                    name="what_type_of_courses_do_you_want_to_register"
                                                    value={cate.title}>{cate.title}</option>
                                            )
                                        })}
                                    </select>   
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Do you have laptop ?</label>
                                    </div>
                                    <div className="flex">
                                        <div className="flex px-1">
                                            <input
                                                onChange={(e) => { setHaveLaptop(true) }}
                                                checked={haveLaptop}
                                                id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                            <label for="checkbox-1" className="ms-2 text-md text-gray-900">Yes </label>
                                        </div>
                                        <div className="flex px-1">
                                            <input
                                                onChange={(e) => { setHaveLaptop(false) }}
                                                checked={!haveLaptop}
                                                id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                            <label for="checkbox-2" className="ms-2 text-md text-gray-900">No </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 px-5 md:col-span-1 col-span-2">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-gray-600">Do you have good internet access ?</label>
                                    </div>
                                    <div className="flex">
                                        <div className="flex px-1">
                                            <input
                                                onChange={(e) => { setHaveGoodInternetAccess(true) }}
                                                checked={haveGoodInternetAccess}
                                                id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                            <label for="checkbox-1" className="ms-2 text-md text-gray-900">Yes </label>
                                        </div>
                                        <div className="flex px-1">
                                            <input
                                                onChange={(e) => { setHaveGoodInternetAccess(false) }}
                                                checked={!haveGoodInternetAccess}
                                                id="country-option-1" type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                            <label for="checkbox-2" className="ms-2 text-md text-gray-900">No </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 px-5 col-span-2 ">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Why are you interested in attending this training course ? </label>
                                        <span className="text-red-500 px-2">*</span>
                                    </div>
                                    <select onChange={(e) => {
                                        setCourseInterestReason(e.target.value);
                                        setCourseInterestReasonOthersText("");
                                    }}
                                        value={courseInterestReason}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        {whyAreYouInterested.map((b, index) => {
                                            return (
                                                <option key={index}
                                                    name="it_background"
                                                    value={b}>{b}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="pt-4 px-5 col-span-2 pb-10">
                                    <div className="flex">
                                        <label className="mb-2 font-bold text-sm text-gray-600">Comment</label>
                                    </div>
                                    <input
                                        onChange={(e) => { setComment(e.target.value) }}
                                        value={comment}
                                        placeholder="Please let use know if you have something to tell us"
                                        type="text" className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>

                                <button type="submit" className="btn col-span-2 mx-5">Submit</button>

                            </div>
                        </form>
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Course
