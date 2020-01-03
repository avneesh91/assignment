import {NeuvooJobResultDTO} from "./NeuvooJobResultDTO";
class JobGetDTO{
	title: string;
	company: string;
	logo: string;
	city: string;
	url: string;
	posted_time_friendly: string;
	source: string;
}



const createJobGetDTOFromNeuvooDTO = (neuvooJobResult: NeuvooJobResultDTO) =>{
	const jobGetDTO = new JobGetDTO()

	jobGetDTO.title = neuvooJobResult.jobTitle;
	jobGetDTO.company = neuvooJobResult.company;
	jobGetDTO.logo = neuvooJobResult.logo;
	jobGetDTO.city = neuvooJobResult.city;
	jobGetDTO.url = neuvooJobResult.url;
	jobGetDTO.posted_time_friendly = neuvooJobResult.date;
	jobGetDTO.source = "Neuvoo";

	return jobGetDTO;

}

export {JobGetDTO, createJobGetDTOFromNeuvooDTO}
