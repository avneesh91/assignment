class NeuvooJobResultDTO{
	public jobKey: string;
	public jobTitle: string;
	public company: string
	public city: string;
	public state: string;
	public formattedLocation: string;
	public source: string;
	public date: string;
	public description: string;
	public category: string;
	public url: string;
	public logo: string;
	public bid: number;
	public currency: string;
}

const createNeuvooJobResultDTO = (neuvooJobResult: {string: string}) => {
	let neuvooJobResultDTO = new NeuvooJobResultDTO()

	neuvooJobResultDTO.jobKey = neuvooJobResult['jobkey'];
	neuvooJobResultDTO.jobTitle =  neuvooJobResult['jobtitle'];
	neuvooJobResultDTO.company =  neuvooJobResult['company'];
	neuvooJobResultDTO.city = neuvooJobResult['city'];
	neuvooJobResultDTO.state = neuvooJobResult['state'];
	neuvooJobResultDTO.formattedLocation = neuvooJobResult['formattedLocation'];
	neuvooJobResultDTO.source = neuvooJobResult['source'];
	neuvooJobResultDTO.date = neuvooJobResult['date'];
	neuvooJobResultDTO.description = neuvooJobResult['description'];
	neuvooJobResultDTO.category = neuvooJobResult['category'];
	neuvooJobResultDTO.url = neuvooJobResult['url'];
	neuvooJobResultDTO.logo = neuvooJobResult['logo'];
	neuvooJobResultDTO.bid = neuvooJobResult['bid'];
	neuvooJobResultDTO.currency = neuvooJobResult['currency'];

	return neuvooJobResultDTO;

}

export {NeuvooJobResultDTO,createNeuvooJobResultDTO};
