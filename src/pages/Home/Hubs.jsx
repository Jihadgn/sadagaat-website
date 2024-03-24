import React from "react";
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";

function Hubs() {

    return (
        <>
            <main >
                {/* Hubs cards */}
                <section className=" pb-10 grid grid-cols-12 bg-white">
                    <div></div>
                    <div className="pt-9 col-span-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-0">
                        <LazyLoad once={true}>
                            <Link to="/wash" className="curser-pointer">
                                <img className="h-full w-full" src="src/assets/11.png" alt="" />
                            </Link>
                        </LazyLoad>
                        <LazyLoad once={true}>
                            <Link to="/health" className="curser-pointer">
                                <img className="h-full w-full" src="src/assets/22.png" alt="" />
                            </Link>
                        </LazyLoad>
                        <LazyLoad once={true}>
                            <Link to="/feeding" className="curser-pointer">
                                <img className="h-full w-full" src="src/assets/33.png" alt="" />
                            </Link>
                        </LazyLoad>
                        <LazyLoad once={true}>
                            <Link to="/education" className="curser-pointer">
                                <img className="h-full w-full" src="src/assets/44.png" alt="" />
                            </Link>
                        </LazyLoad>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hubs
