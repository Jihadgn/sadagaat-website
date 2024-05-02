import TopBar from "../Home/TopBar";
import NavBar from "../Home/NavBar";
import FixedButton from "../Home/FixedButton";
import Volunteering from "../Home/Volunteering";
import Footer from "../Home/Footer";
import address from "../../services";
import { React, useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import parse from "html-react-parser";
import FilteredProjects from "./FilteredProjects";

function SearchResult() {

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                <section className="py-10 bg-gray-500 ">
                    <div className="py-10 text-center">
                        <h3 className="text-3xl font-bold text-white">Filtered Projects </h3>
                    </div>
                </section>
                {/* tabs section */}
                <section className="bg-white p-10 ">
                <FilteredProjects search={true}  />
                </section>
                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default SearchResult;
