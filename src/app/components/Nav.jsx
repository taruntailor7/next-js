// import React from "react";
// import styles from "@/app/styles/navbar.module.css";
// import Link from 'next/link';

// const Nav = () => {
//     const navbar = [
//         {
//             name: "Home",
//             link: "/"
//         },
//         {
//             name: "About",
//             link: "/about"
//         },
//         {
//             name: "Movie",
//             link: "/movie"
//         },
//         {
//             name: "Contact",
//             link: "/contact"
//         }
//     ];
//     return (
//         <nav className={styles.navbar}>
//             <div className="">
//                 <ul className={styles.navbarList}> 
//                     {navbar.map((nav)=>(
//                         <li key={nav.name} className={styles.navbarItem}>
//                             <Link className={styles.navbarLink} href={nav.link}>{nav.name}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav> 
//     )
// }

// export default Nav
'use client'

import styles from "@/app/styles/navbar.module.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
import {useState} from "react";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log("value " + openMenu)
    return (
        <>
            <nav className={styles.navbar}>
                <div className={openMenu ? `${styles.active}` : "" }>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="#"
                                  onClick={() => setOpenMenu(false)}
                            >Home</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/about"
                                  onClick={() => setOpenMenu(false)}
                            >About</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/movie">Movie</Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink}
                                  onClick={() => setOpenMenu(false)}
                                  href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* //nav icon */}
                    <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Nav;