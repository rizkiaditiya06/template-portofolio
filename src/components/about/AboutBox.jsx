import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">Sertifikat</h3>
                    <span className="about__subtitle">Praktek Kerja Lapangan - 2020</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">Sertifikat</h3>
                    <span className="about__subtitle">LSP BNSP - 2021</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">Sertifikat</h3>
                    <span className="about__subtitle">Toefl - 2023</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">Saya</h3>
                    <span className="about__subtitle">Clients Selesai</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox