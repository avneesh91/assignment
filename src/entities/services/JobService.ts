import JobSearchDTO from "../../dto/JobSearchDTO";
import {JobServiceInterface} from "../../interfaces";

class JobService implements JobServiceInterface{

	public getJobs(searchCriteria: JobSearchDTO): void{
		console.log("Derp!!");
	}
}

export default JobService;
