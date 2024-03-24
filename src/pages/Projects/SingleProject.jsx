import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Tabs } from 'flowbite-react';
import parse from 'html-react-parser';
import Project from './View'

function SingleProject() {

    const [data, setData] = useState({
        cover: {},
    });
    const cover = data.cover;

    async function fetchData() {
        const fetch = await window.fetch(`${address()}cover-image/PROJECT2`, {
            headers: { "accept-language": `en` },
        });
        setData({ cover: fetch });

    }
    // get hub on page load
    useEffect(() => {
        fetchData()

    }, [])

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                <div className="bg-white py-10 text-black text-center text-2xl">
                    Single project show
                </div>
               
                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default SingleProject
