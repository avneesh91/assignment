import {Container} from "inversify";
// Identifier and TAG imports
import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";


// Interface imports
import {BaseRestViewInterface, Application, JobServiceInterface} from "../interfaces";

// Entities or implementation imports
import {JobView, JobGetHttpApplication, JobService} from "../entities";


const JobGetContainer = new Container();

JobGetContainer.bind<BaseRestViewInterface>(SERVICE_IDENTIFIER.RestView).to(JobView);
JobGetContainer.bind<Application>(SERVICE_IDENTIFIER.JobGetHttpApplication).to(JobGetHttpApplication)
JobGetContainer.bind<JobServiceInterface>(SERVICE_IDENTIFIER.JobService).to(JobService)



export default JobGetContainer;
