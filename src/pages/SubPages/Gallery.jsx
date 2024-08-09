import { React, useEffect, useState } from "react";
import TopBar from '../Home/TopBar';
import NavBar from '../Home/NavBar';
import FixedButton from '../Home/FixedButton';
import Volunteering from '../Home/Volunteering';
import Footer from '../Home/Footer';
import address from "../../services";
import { Gallery } from "react-grid-gallery";
function More() {

    const data = []
    let images = []
    const [image, setImage] = useState([]);
    async function fetchData() {
        const fetcher = await window.fetch(`${address()}gallary`);
        const response = await fetcher.json();
        setImage(response);

    }
    function smallStyle() {
        return ({
            display: "grid",
            background: "white",
            gridGap: "10px 20px",
            border: '1px  ',
            padding: "10px 20px 0 0"
        });
    }

    useEffect(() => {
        fetchData();
    }, []);


    for (let i = 0; i < image.length; i++) {
        var obj = {}; // <---- Move declaration inside loop

        obj['src'] = `${address()}gallary/${image[i].imageName}/image`;
        obj['thumbnail'] = `${address()}gallary/${image[i].imageName}/image`;
        obj['thumbnailWidth'] = 320;
        obj['thumbnailHeight'] = 320;
        obj['index'] = i;

        data.push(obj);
    }

    return (
        <>
            <main >
                <FixedButton />
                <TopBar />
                <NavBar />
              
                <section className="py-10 bg-white grid grid-cols-12">
                    <div></div>
                    <div className="col-span-10">
                        {Object.keys(image).length !== 0
                            ?
                            <div className="container" style={{ marginTop: "50px", marginBottom: "90px" }} >
                                <Gallery
                                    images={data}
                                    thumbnailStyle={smallStyle}
                                    imageCountSeparator={"of"}
                                />
                            </div>

                            :
                            <div className="container">
                            </div>
                        }
                    </div>
                </section>


                <Volunteering />
                <Footer />
            </main>
        </>
    )
}

export default More
