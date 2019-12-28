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

export default JobSearchDTO;
