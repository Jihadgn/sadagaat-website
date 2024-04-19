import React from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
import part_11 from "../../assets//11.png"
import part_22 from "../../assets//22.png"
import part_33 from "../../assets//33.png"
import part_44 from "../../assets//44.png"

function Hubs() {

    return (
        <>
            <main >
                {/* Hubs cards */}
                <section className=" pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    <div className="col-span-10 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-0">

                        <Link to="/wash" className="curser-pointer">
                            <img className="h-full w-full" src={part_11} alt="" />
                        </Link>
        

                        <Link to="/health" className="curser-pointer">
                            <img className="h-full w-full" src={part_22} alt="" />
                        </Link>


                        <Link to="/feeding" className="curser-pointer">
                            <img className="h-full w-full" src={part_33} alt="" />
                        </Link>


                        <Link to="/education" className="curser-pointer">
                            <img className="h-full w-full" src={part_44} alt="" />
                        </Link>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Hubs
