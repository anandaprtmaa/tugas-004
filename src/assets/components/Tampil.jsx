import React from 'react'
import {useState} from 'react';
import "./Tampil.css";

const Tampil = (x) => {
    const {nama,deskripsi,img} = x;
    const [suka,setSuka] = useState (false)
    const [lihat,setLihat] = useState (false)
  
    const sukaClick = () => {
        setSuka (!suka);
    };

    const lebihClick = () => {
        setLihat (!lihat);
    }

    return (
    <div className='mukena'>
        <h2>{nama}</h2>
        <img className='img' src={img} alt={nama} />
        {lihat && <p> {deskripsi} </p> }
        <button onClick={sukaClick}>
            {suka ? "Batal Suka" : "Suka"}
        </button>
        <button onClick={lebihClick}>
            {lihat? "Sembunyikan" : "Selengkapnya"}
        </button>
    </div>
  )
}

export default Tampil