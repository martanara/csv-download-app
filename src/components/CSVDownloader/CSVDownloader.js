import React, { useState, useEffect } from "react";

import Axios from "axios";

import { mapCandidatesData } from "../../utils/mapCandidatesData";
import Button from "../Button/Button";

import styles from "./CSVDownloader.module.scss";

const teamtailorToken = process.env.REACT_APP_TEAMTAILOR_AUTHORIZATION_TOKEN;

const CSVDownloader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            var config = {
                method: "get",
                maxBodyLength: Infinity,
                url: "https://api.teamtailor.com/v1/candidates",
                headers: {
                    Authorization: `Token token=${teamtailorToken}`,
                    "X-Api-Version": "20210218",
                },
                params: { include: "job-applications"}
            };

            try {
                const response = await Axios(config);
                console.log(response.data);
                const mappedData = mapCandidatesData(response.data);
                setData(mappedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    const handleDownload = () => {
        console.log("click");
    };

    return (
        <div className={styles.CSVDownloader}>
            <Button type="button" onClick={handleDownload}>
                Download CSV
            </Button>
        </div>
    );
};

export default CSVDownloader;


