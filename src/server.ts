import "reflect-metadata";
import {Application} from "interfaces";

import SERVICE_IDENTIFIER from "./constants/identifiers";
import TAG from "./constants/tags";

import JobGetContainer from "./config/jobget_assignment_container";

const JobGetHttpApp = JobGetContainer.get<Application>(SERVICE_IDENTIFIER.JobGetHttpApplication);

const PORT = process.env.PORT || 3000;

JobGetHttpApp.application.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
