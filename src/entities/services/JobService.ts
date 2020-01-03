import {JobSearchDTO, getNeuvooQueryStringFromDTO} from "../../dto/JobSearchDTO";
import {injectable} from "inversify";
import {JobServiceInterface} from "../../interfaces";
import fetch from 'node-fetch';


const neuvooApiEndPoint = 'https://neuvoo.com/services/api-new/search?';

@injectable()
class JobService implements JobServiceInterface{

	public async getJobs(searchCriteria: JobSearchDTO): Promise<string>{
		let derps =  await this.getJobsFromNeuvooAPI(searchCriteria);
		console.log("derping");
		console.log(derps);
		return derps;
	}

	private async getJobsFromNeuvooAPI(searchCriteria: JobSearchDTO): Promise<string>{

	        const queryParams = getNeuvooQueryStringFromDTO(searchCriteria);
		const queryString = `${neuvooApiEndPoint}${queryParams}`;

		let fetchPromise =  fetch(queryString)
			.then(response => {return response.json()})

		console.log(fetchPromise);
		return fetchPromise;
	}
}

export default JobService;
