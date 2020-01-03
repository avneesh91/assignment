import {JobSearchDTO} from "../../dto/JobSearchDTO";
interface JobServiceInterface {
	getJobs(searchCriteria: JobSearchDTO): Promise<string>;
}

export default JobServiceInterface;
