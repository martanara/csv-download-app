export const mapCandidatesData = (candidatesData) => {
    return candidatesData.data.map((candidate) => ({
        candidate_id: candidate.id,
        first_name: candidate.attributes["first-name"],
        last_name: candidate.attributes["last-name"],
        email: candidate.attributes.email,
        job_application_id: candidate.relationships["job-applications"].data[0].id,
        job_application_created_at: candidatesData.included.find(
            (jobApplication) => jobApplication.id === candidate.relationships["job-applications"].data[0].id
        ).attributes["created-at"],
    }));
};
