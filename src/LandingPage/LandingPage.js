import React from 'react'
import TopNav from "./TopNav/TopNav"
import logo from "../assets/logo.png"
import styles from "./LandingPage.module.css"
import SearchBar from "../SearchBar/SearchBar"
import SearchSuggestions from "./SearchSuggestions/SearchSuggestion"

const LandingPage = () => {
    return (
        <div className={styles.landing}>
            <div className={styles["search-area"]}>
                <TopNav />
                <img src={logo} alt="logo" className={styles.logo} />
                <SearchBar />
                <SearchSuggestions />
            </div>
        </div>
    )
}

export default LandingPage
