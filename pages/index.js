import Head from 'next/head'
import axios from 'axios';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

const  Home = () => {
  const [srcImage, setSrcImage] = useState();

  const onClick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response) => setSrcImage(response.data.message))
    .catch(alert);
  }

  return (
   <div>
     <button onClick={onClick}>Click</button>
     { srcImage && <img src={srcImage} /> }
   </div>
  )
}

export default Home;
