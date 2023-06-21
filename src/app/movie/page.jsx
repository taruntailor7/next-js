import styles from '@/app/styles/common.module.css'
import React from 'react';
import MovieCard from '../components/MovieCard';

const Movie = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7c644ca646msh68db2c7f3beb0f1p1a1ba8jsnc3a637055040',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
   
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.titles;
  console.log(data, 'data');

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {data.map((elem)=>{
            return <MovieCard key={elem.id} {...elem}/>;
          })}
        </div>
      </div>
    </section>
  )
}

export default Movie