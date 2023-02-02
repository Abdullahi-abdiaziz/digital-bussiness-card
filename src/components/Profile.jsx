import React from "react";
import {HiOutlineMail} from 'react-icons/hi'
import img from '../assets/profile-image.jpg'
export default function Profile() {
    return (
        <header className="profile">
            <img src={img} alt="" className="profile__image"/>
            <h3 className="profile__name">Abdallah Abdaziz</h3>
            <h5 className="profile__career">Frontend Developer</h5>
            <a href="#" className="profile__link">abdallah website</a>
            <button className="profile__btn">
                    <HiOutlineMail size={20} fontWeight={700}/>
                    <p className="profile__email">Email</p>
            </button>
        </header>
    )
}