import * as express from 'express';
import * as bodyParser from 'body-parser';

import SERVICE_IDENTIFIER from "../../constants/identifiers";
import {injectable, multiInject} from "inversify";
import {Application, BaseRestViewInterface} from "../../interfaces";

@injectable()
class JobGetHttpApplication implements Application{

	public restViews:BaseRestViewInterface[];
	public application: express.Application;

	public constructor(
		@multiInject(SERVICE_IDENTIFIER.RestView) restViews: BaseRestViewInterface[]
	){
		this.restViews = restViews;
		this.application = express()
		this.application.use(bodyParser.json());
	
	}

	public configure(): void{
		this.restViews.forEach(function (value){
			value.registerRoutes(this.app);
		})

	}

}

export default JobGetHttpApplication;
