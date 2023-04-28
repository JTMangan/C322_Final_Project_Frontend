import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <header>
                <Link className={styles.logo} href="/">C323 Restaurant</Link>

                <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
                <label for="menu-bar">menu</label>

                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/">home</Link>
                        </li>
                        <li>
                            <Link href="/">customers +</Link>
                           <ul>
                               <li>
                                   <Link href="/customers">all customers</Link>
                               </li>
                               <li>
                                   <Link href="/customers/add">add customers</Link>
                               </li>
                           </ul>
                        </li>
                        <li>
                            <Link href="/orders">orders</Link>
                        </li>
                        <li>
                            <Link href="/invoices">invoices</Link>
                        </li>
                        <li>
                            <Link href="/about">about</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;