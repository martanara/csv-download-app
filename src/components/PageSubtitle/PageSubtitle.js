import React from "react";

import styles from "./PageSubtitle.module.scss";

import PropTypes from "prop-types";

const PageSubtitle = (props) => {
    return <p className={styles.subtitle}>{props.children}</p>;
};

PageSubtitle.propTypes = {
    children: PropTypes.string.isRequired,
    addMargin: PropTypes.bool,
};

export default PageSubtitle;
