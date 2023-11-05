import React from 'react'

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=adit02888@gmail.com " className="home__social-link" target="_blank">
                <i class='fa-brands fa-google'></i>
            </a>

            <a href="#" className="home__social-link" target="_blank">
                <i class='fa-brands fa-twitter'></i>
            </a>

            <a href="#" className="home__social-link" target="_blank">
                <i class='fa-brands fa-facebook'></i>
            </a>

            <a href="https://api.whatsapp.com/send/?phone=%2B6288707794730&text&type=phone_number&app_absent=0" className="home__social-link" target="_blank">
                <i class='fa-brands fa-whatsapp '></i>
            </a>

            <a href="#" className="home__social-link" target="_blank">
                <i class='fa-brands fa-linkedin'></i>
            </a>
        </div>
    )
}

export default HeaderSocials