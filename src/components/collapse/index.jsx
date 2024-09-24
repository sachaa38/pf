import React, { useState } from 'react';
import "./style.css"
import arrow from "../../images/arrow_up.png"

const Collapse = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
    <h2
        className="col-title"
        onClick={toggleCollapse}
        style={{ cursor: 'pointer' }}
    >
        Compétences acquises 
        <img className={`arrow ${isOpen ? 'arrow-active' : ''}`} src={arrow} alt="Flèche" />
    </h2>
    <div className={`col-skill ${isOpen ? 'skill-active' : 'skill-inactive'} ${isOpen ? 'open' : ''}`}>
        {isOpen && content.map((skill, index) => (
            <p key={index}>{skill}</p>
        ))}
    </div>
</div>

    );
};

export default Collapse;
