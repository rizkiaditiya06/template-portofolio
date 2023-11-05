import React from 'react';
// import ke file css nya
import "./testimoni.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        image: Image1,
        title: "Rizki Aditiya Putra",
        subtitle: "Mekanik & Partsman | Staff Warehouse | Admin Warehouse",
        comment:
            "Saya Menyatakan Portofolio ini adalah milik saya pribadi mulai saat ini       guys make the process fun and interesting. Good luck! 👍",
    },
    {
        id: 2,
        image: Image3,
        title: "Al Firas Manar",
        subtitle: "Mahasiswa | Inventory Control Warehouse | Apps Development",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
];


const Testimoni = () => {
    return (
        <section className="testimoni container section">
            <h2 className="section__title">Client & Reviews</h2>

            <Swiper className="testimoni__container grid"

                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimoni__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className='testimoni__title'>{title}</h3>
                            <span className='subtitle'>{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimoni