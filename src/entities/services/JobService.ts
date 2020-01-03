import {JobSearchDTO, getNeuvooQueryStringFromDTO} from "../../dto/JobSearchDTO";
import {NeuvooJobResultDTO, createNeuvooJobResultDTO} from "../../dto/NeuvooJobResultDTO";
import {JobGetDTO, createJobGetDTOFromNeuvooDTO} from "../../dto/JobGetDTO";
import {injectable} from "inversify";
import {JobServiceInterface} from "../../interfaces";
import fetch from 'node-fetch';


const neuvooApiEndPoint = 'https://neuvoo.com/services/api-new/search?';

@injectable()
class JobService implements JobServiceInterface{

	public async getJobs(searchCriteria: JobSearchDTO): Promise<Array<JobGetDTO>>{
		let derps =  await this.getJobsFromNeuvooAPI(searchCriteria);
		return derps;
	}

	private async getJobsFromNeuvooAPI(searchCriteria: JobSearchDTO): Promise<Array<JobGetDTO>>{

	        const queryParams = getNeuvooQueryStringFromDTO(searchCriteria);
		const queryString = `${neuvooApiEndPoint}${queryParams}`;

		let fetchPromise =  fetch(queryString)
			.then(response => {
				return response.json();
			}).then(parsedResponse => {
				let jobResults = parsedResponse["results"];
				return jobResults.map(createNeuvooJobResultDTO).map(createJobGetDTOFromNeuvooDTO);
			});

		return fetchPromise;
	}
}

export default JobService;
