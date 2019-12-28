import * as express from "express";

interface BaseRestViewInterface{
	registerRoutes(app: express.Application): void;
}

export default BaseRestViewInterface;
