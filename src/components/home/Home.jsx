import React from 'react'
// import ke file css nya
import "./home.css";
import "./shapes.css";
import Me from "../../assets/profile-user2.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Rizki Aditiya Putra</h1>
                <span className="home__education">Mekanik & Partsman | Staff Warehouse | Admin Warehouse</span>

                <HeaderSocials />

                <a href="#contact" className='btn'>Hubungi</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home
