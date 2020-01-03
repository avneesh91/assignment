import {JobSearchDTO} from "../../dto/JobSearchDTO";
import {JobGetDTO} from "../../dto/JobGetDTO";

interface JobServiceInterface {
	getJobs(searchCriteria: JobSearchDTO): Promise<Array<JobGetDTO>>;
}

export default JobServiceInterface;
