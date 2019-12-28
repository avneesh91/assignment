import * as express from 'express';
import {BaseRestViewInterface} from "../";

interface HttpApplicationInterface{
	restViews: BaseRestViewInterface[];
	application: express.Application
	configure(): void;
}

export default HttpApplicationInterface;
