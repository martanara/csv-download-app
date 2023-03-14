import React from "react";

import PageSubtitle from "../PageSubtitle/PageSubtitle";

import styles from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <PageSubtitle>Nothing to see here... move along</PageSubtitle>
        </div>
    );
};

export default NotFound;
