import React from "react";

import Footer from "../Footer/Footer";
import PageSubtitle from "../PageSubtitle/PageSubtitle";
import PageTitle from "../PageTitle/PageTitle";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <PageTitle>Candidates information csv download tool</PageTitle>
            <PageSubtitle>Click on the button to download CSV</PageSubtitle>
            <Footer />
        </div>
    );
};

export default Home;
