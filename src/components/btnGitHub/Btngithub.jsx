import React from 'react';
import './style.css';
import gitImg from '../../img/icons/gitHub-black.svg';

export default function Btngithub({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={gitImg} alt="" />
      GitHub repo
    </a>
  );
}
