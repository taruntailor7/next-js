import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';


const page = async ({params}) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7c644ca646msh68db2c7f3beb0f1p1a1ba8jsnc3a637055040',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const res2 = await res.json();
  const movie = res2[0].details;
  console.log(movie.backgroundImage, 'movie'); 
  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}> Netflix \ <span>{movie.type}</span></h2>
      <div className={styles.card_section}>
        <div>
          <Image src={movie.backgroundImage.url} alt={movie.title} width={600} height={300} />
        </div>
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default page