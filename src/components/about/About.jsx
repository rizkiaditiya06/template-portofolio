import React from 'react';
// import ke file css nya
import "./about.css";
import Image from "../../assets/profile-user.jpg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">Tentang Saya</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Saya merupakan individu yang memiliki antusias serta motivasi tinggi, saya berkeinginan menggali kemampuan diri, saya senang menyukai hal-hal baru, dan siap memberikan hasil yang terbaik juga bertanggung jawab penuh terhadap perusahaan.
                        </p>
                        <a href="#" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Microsoft Word</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Microsoft Excel</h3>
                                <span className="skills__number ">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage backend"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Microsoft Power Point</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        {/* <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">REST-API | Networking </h3>
                                <span className="skills__number ">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage backend"></span>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About