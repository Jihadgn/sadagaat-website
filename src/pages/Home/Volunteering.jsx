import React from "react";

function Volunteering() {

    return (
        <>
            <main>
                <section className="pt-10 pb-10 grid grid-cols-12 fixedBackGround2">
                    <div></div>
                    <div className="col-span-10 grid xl:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 pt-5">
                        <h2 className="col-span-3  text-2xl font-bold text-blue-900">Join Us Now As Volunteer</h2>
                        <button
                            onClick={() => { window.location.href = '/volunteerForm' }}
                            className="fixedBackGround2 border-black border-2 rounded-full text-blue-900 py-3 hover:bg-blue-700 hover:text-white text-lg font-bold"> Become a Volunteer</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Volunteering
