import './Card.css'
import React from "react";

const Card = ({course}) => {
    const {
        image,
        level,
        title,
        user,
        rating,
        students,
        modules,
        duration,
    } = course;
    const duration_res = Math.floor(duration / 60 / 60);
    const duration_minutes = Math.floor(duration / 60) - duration_res * 60;

    return (
        <div className="card">
            <div className="image__container">
                <img
                    src={image}
                    alt=""
                />
                <div className="level">{level}</div>
            </div>
            <h3 className="card__title">{title}</h3>
            <div className="card__info">
                <div className="user">
                    <img
                        src={user.avatar}
                        alt={user.name}
                    />
                    <p>{user.name}</p>
                </div>
                <div className="rating">
                    <p>{rating}</p>
                </div>
            </div>
            <div className="card__info">
                <div>{students} Student</div>
                <div>{modules} Modules</div>
                <div>{duration_res}h {duration_minutes}m</div>
            </div>
        </div>

    )
}

export default Card