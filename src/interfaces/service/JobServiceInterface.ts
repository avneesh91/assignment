import JobSearchDTO from "../../dto/JobSearchDTO";
interface JobServiceInterface {
	getJobs(searchCriteria: JobSearchDTO): void;
}

export default JobServiceInterface;
