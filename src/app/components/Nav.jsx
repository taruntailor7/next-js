import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';

const Nav = () => {
    const navbar = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Movie",
            link: "/movie"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];
    return (
        <nav className={styles.navbar}>
            <div className="">
                <ul className={styles.navbarList}> 
                    {navbar.map((nav)=>(
                        <li key={nav.name} className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href={nav.link}>{nav.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav> 
    )
}

export default Nav