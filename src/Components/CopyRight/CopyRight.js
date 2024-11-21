/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './CopyRight.css'
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const CopyRight = () => {
    const year = new Date().getFullYear();
  return (
    <div className='copyRight text-light'>
        <p>Copyright &copy; {year}</p>
        <div className='dev'>
        <p>Developed By : <span>Nour Mostafa</span></p>
        <a href="https://github.com/NourMostafaa" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/zizo.mostafa.9047" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/itz.n0ur/" target="_blank"><FaInstagram /></a>
        </div>
    </div>
  )
}

export default CopyRight