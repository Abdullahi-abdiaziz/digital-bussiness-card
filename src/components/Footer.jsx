import React from "react";
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

export default function Footer() {
    return (

        <footer className="footer">
            <AiFillTwitterSquare size={20} />
            <AiFillFacebook size={20} />
            <FaInstagramSquare size={18} />
            <AiFillLinkedin size={20} />
            <FaGithubSquare size={18} />
        </footer>
    )
}