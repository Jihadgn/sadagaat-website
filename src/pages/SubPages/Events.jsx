import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { React, useEffect, useState } from "react";

function Events() {

    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [cover, setCover] = useState({})
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const fetcher = await window.fetch(`${address()}events`,
            { headers: { 'accept-language': `en` } })
        const response = await fetcher.json()
        setData(response)
        setLoading(false)

    }

    async function fetchCover() {
        const fetcher = await window.fetch(`${address()}cover-image/CARRIER1`,
            { headers: { 'accept-language': `en` } })
            .then((fetcher) => {
                if (fetcher.status == 500) {
                    setCover(undefined)
                } else {
                    setCover(fetcher);
                }
            });
    }

    useEffect(() => {
        fetchData()
        fetchCover()
    }, [])

    const currentPosts = data.slice(offset, offset + postsPerPage);

    const paginate = (e) => {
        setCurrentPage(e.selected)
        setOffset(e.selected * postsPerPage)
    }
    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
                {/* title section */}
                {(cover !== undefined) ?
                    <section className="py-10 hub-section "
                        style={{
                            backgroundImage: 'url(' + `${address()}cover-image/CARRIER1` + ')'
                        }}
                    >
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> Events  </h3>
                        </div>
                    </section>
                    :
                    <section className="py-10 bg-gray-500 ">
                        <div className="py-10 text-center">
                            <h3 className="text-3xl font-bold text-white"> Events  </h3>
                        </div>
                    </section>
                }
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10 py-10   ">

                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default Events
