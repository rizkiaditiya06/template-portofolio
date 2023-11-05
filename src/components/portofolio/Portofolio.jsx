import React, { useState } from 'react';
import "./portofolio.css"; // Make sure the CSS file path is correct
import Menu from './Menu';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id="work">
            <h2 className="section__title">Program (Terbaru - Lama)</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Semua</span>
                <span className="work__item" onClick={() => filterItem("Creative")}>Laravel</span>
                <span className="work__item" onClick={() => filterItem("Art")}>Codeigniter</span>
                <span className="work__item" onClick={() => filterItem("Design")}>ReactJs</span>
                <span className="work__item" onClick={() => filterItem("Branding")}>NodeJs</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt={title} className="work__img" /> {/* Provide alt text */}
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="#" className="work__button">
                                <i className="icon-link work__button-icon"></i> {/* Correct the class name */}
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio; // Correct the component name to match the file name
