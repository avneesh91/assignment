const requiredKeys: Array<string> = ['country', 'ip', 'user_agent', 'searchTerm', 'city', 'state', 'country'];
const integerKeys: Array<string> = ['page', 'jobs_per_page', 'radius'];

class JobSearchDTO{
	public searchTerm: string;
	public radius: number;
	public city: string;
	public state: string;
	public country: string;
	public page: number;
	public jobsPerPage: number;
	public ip: string;
	public userAgent: string;
}

const getNeuvooQueryStringFromDTO = (searchCriteria: JobSearchDTO) => {
	let neuvooQueryString = 'contentType=sponsored&format=json&publisher=dc134fad&cpcfloor=1';
	
	// location string
	let locationString =`l=${searchCriteria.city},${searchCriteria.state}&radius=${searchCriteria.radius}`;

	// adding pagination information
	let paginationString = `start=${searchCriteria.page}&limit=${searchCriteria.jobsPerPage}`;

	// Adding compulsory fields
	neuvooQueryString = neuvooQueryString.concat(`&ip=${searchCriteria.ip}&useragent=${searchCriteria.userAgent}&k=${searchCriteria.searchTerm}&country=${searchCriteria.country}`);

	// Adding location information
	neuvooQueryString = neuvooQueryString.concat(`&${locationString}`);
	neuvooQueryString = neuvooQueryString.concat(`&${paginationString}`);

	return neuvooQueryString;
}


const createJobSearchDTO = (queryParams) => {

	let searchObject = new JobSearchDTO();

	// check the required keys
	requiredKeys.forEach((key) => {
		if (!queryParams.hasOwnProperty(key)){
			throw new Error(`${key} required key missing`);
		}
	});

	integerKeys.forEach((key) =>{
		if (!queryParams.hasOwnProperty(key)){
			if (key == 'page'){queryParams[key]=0;}
			if (key == 'jobs_per_page'){queryParams[key]=10;}
			if (key == 'radius'){queryParams[key]=15}
		}else{
			queryParams[key] = +queryParams[key];
		}
	});

	searchObject.searchTerm = queryParams['searchTerm'];
	searchObject.country = queryParams['country'];
	searchObject.city = queryParams['city'];
	searchObject.state = queryParams['state'];
	searchObject.userAgent = queryParams['user_agent'];
	searchObject.ip = queryParams['ip'];

	// optinal feilds that are injected by the validator(incase they are missing)
	searchObject.page = queryParams['page'];
	searchObject.jobsPerPage = queryParams['jobs_per_page'];


	if (queryParams['radius'] != undefined){
		searchObject.radius = queryParams['radius'];
	}

	return searchObject;

}

export {JobSearchDTO, createJobSearchDTO, getNeuvooQueryStringFromDTO};
