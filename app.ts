import {Request, Response} from "express";
import * as express from 'express';
import * as bodyParser from 'body-parser';


class App{


	public app: express.Application;


	constructor(){
		this.app = express();
		this.config();
	}

	private config(): void{
		this.app.use(bodyParser.json());

		this.app.route("/derp")
		.get((req: Request, res: Response) => {
			res.status(200).send({"Message": "This is using typescript"})
		});
	}
}

export default new App().app;
