import {injectable, inject} from "inversify";
import * as express from "express";
import {BaseRestViewInterface} from "../../interfaces";
import {Request, Response} from "express";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import {JobServiceInterface} from "../../interfaces";
import {JobSearchDTO, createJobSearchDTO} from "../../dto/JobSearchDTO";

@injectable()
class JobView implements BaseRestViewInterface{

	public jobService: JobServiceInterface;

	constructor(
		@inject(SERVICE_IDENTIFIER.JobService) jobService: JobServiceInterface
	){
		this.jobService = jobService;
	}

	public registerRoutes(app: express.Application): void{
		app.route("/jobs").get(async (req:Request, res:Response) => {await this.handleJobs(req, res)});
	}

	public handleJobs = async (req:Request, res:Response): Promise<void> => {

		// validate query params input
		let searchObject: JobSearchDTO;

		try{
			searchObject =  createJobSearchDTO(req.query);
		} catch(e){
			res.status(400).send({"data": {}, "err": e.toString()});
			return;
		}

		const jobResult = this.jobService.getJobs(searchObject);
		jobResult.then((jobs) =>{res.status(200).send({"data": jobs, "err": {}});});
	}
}


export default JobView;
