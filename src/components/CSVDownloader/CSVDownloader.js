import React, { useState, useEffect } from "react";

import { CSVLink } from "react-csv";
import Axios from "axios";

import { mapCandidatesData } from "../../utils/mapCandidatesData";
import Button from "../Button/Button";

import styles from "./CSVDownloader.module.scss";

const teamtailorToken = process.env.REACT_APP_TEAMTAILOR_AUTHORIZATION_TOKEN;

const headers = [
    { label: "candidate_id", key: "candidate_id" },
    { label: "first_name", key: "first_name" },
    { label: "last_name", key: "last_name" },
    { label: "email", key: "email" },
    { label: "job_application_id", key: "job_application_id" },
    { label: "job_application_created_at", key: "job_application_created_at" },
];

const CSVDownloader = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://api.teamtailor.com/v1/candidates",
            headers: {
                Authorization: `Token token=${teamtailorToken}`,
                "X-Api-Version": "20210218",
                Accept: 'application/vnd.api+json'
            },
            params: { include: "job-applications" },
        };

        try {
            const response = await Axios(config);
            const mappedData = mapCandidatesData(response.data);
            setData(mappedData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.CSVDownloader}>
            <CSVLink data={data} headers={headers} filename={"candidates-list.csv"}>
                <Button type="button">{data?.length !== 0 ? "Download CSV" : "Pending..."}</Button>
            </CSVLink>
        </div>
    );
};

export default CSVDownloader;
