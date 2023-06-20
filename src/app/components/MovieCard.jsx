import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '@/app/styles/common.module.css'

const MovieCard = (elem) => {
    const {id, type, title, synopsis} = elem.jawSummary;

    return (
        <div className={styles.card}>
            <div className={styles.card_data}>
                <Image src={elem.jawSummary.backgroundImage.url} alt={title} width={235} height={200} />
            </div>
            <div className={styles.card_data}>
                <h2>{title.substring(0,18)}</h2>
                <p>{`${synopsis.substring(0,66)} ...`}</p>
                <Link href={`/movie/${id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard