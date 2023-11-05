import React from 'react';
// import ke file css nya
import "./resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Pengalaman</h2>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "pendidikan") {
                            return (
                                <Card
                                    key={id}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc} />
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val, index) => {
                        if (val.category === "pengalaman") {
                            return (
                                <Card
                                    key={index}
                                    icon={val.icon}
                                    title={val.title}
                                    year={val.year}
                                    desc={val.desc} />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default Resume