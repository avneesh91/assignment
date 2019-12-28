import {injectable, inject} from "inversify";
import * as express from "express";
import {BaseRestViewInterface} from "../../interfaces";
import {Request, Response} from "express";

@injectable()
class JobView implements BaseRestViewInterface{
	
	constructor(){}

	public registerRoutes(app: express.Application): void{
		app.route("/jobs").get(this.handleJobs)
	}

	public handleJobs(req:Request, res:Response): void{
		res.status(200).send({"Message": "This is using type script"})
	}
}


export default JobView;
