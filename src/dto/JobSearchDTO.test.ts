import  {assert, expect} from 'chai';
import {JobSearchDTO, getNeuvooQueryStringFromDTO, createJobSearchDTO} from './JobSearchDTO';


describe('Search param processing', function(){

	it('Create Query String for  Neuvoo API from the JobSearchDTO', function(){

		// setup data
		let jobSearchDTO = new JobSearchDTO();

		jobSearchDTO.searchTerm = 'searchTerm';
		jobSearchDTO.radius = 10;
		jobSearchDTO.city = 'city';
		jobSearchDTO.state = 'state';
		jobSearchDTO.country = 'country';
		jobSearchDTO.page = 10;
		jobSearchDTO.jobsPerPage = 10;
		jobSearchDTO.ip = 'ip';
		jobSearchDTO.userAgent = 'test';

		// run code
		const actualOutput = getNeuvooQueryStringFromDTO(jobSearchDTO);
		const expectedOutput = "contentType=sponsored&format=json&publisher=dc134fad&cpcfloor=1&ip=ip&useragent=test&k=searchTerm&country=country&l=city,state&radius=10&start=10&limit=10";

		// assertions
		expect(actualOutput).to.equal(expectedOutput);
	});

	it('Create JobSearchDTO from map of string', function(){
		var queryParams = {};

		queryParams["searchTerm"] = "searchTerm",
		queryParams["radius"] = "10";
		queryParams["city"] = "city";
		queryParams["state"] = "state";
		queryParams["country"] = "country";
		queryParams["page"] = "10";
		queryParams["jobs_per_page"] = "10";
		queryParams["ip"] = "ip";
		queryParams["user_agent"] = "userAgent";
		

		let actualOutput = createJobSearchDTO(queryParams);

		let expectedOutput = new JobSearchDTO();

		expectedOutput.searchTerm = 'searchTerm';
		expectedOutput.radius = 10;
		expectedOutput.city = 'city';
		expectedOutput.state = 'state';
		expectedOutput.country = 'country';
		expectedOutput.page = 10;
		expectedOutput.jobsPerPage = 10;
		expectedOutput.ip = 'ip';
		expectedOutput.userAgent = 'userAgent';

		expect(actualOutput).to.eql(expectedOutput);

	

	});
	it('Create JobSearchDTO from map of string, and add default values for non mandatory keys that have a default value setting', function(){
		var queryParams = {};

		queryParams["searchTerm"] = "searchTerm",
		queryParams["city"] = "city";
		queryParams["state"] = "state";
		queryParams["country"] = "country";
		queryParams["ip"] = "ip";
		queryParams["user_agent"] = "userAgent";
		

		let actualOutput = createJobSearchDTO(queryParams);
		let expectedOutput = new JobSearchDTO();

		expectedOutput.searchTerm = 'searchTerm';
		expectedOutput.radius = 15;
		expectedOutput.city = 'city';
		expectedOutput.state = 'state';
		expectedOutput.country = 'country';
		expectedOutput.page = 0;
		expectedOutput.jobsPerPage = 10;
		expectedOutput.ip = 'ip';
		expectedOutput.userAgent = 'userAgent';

		expect(actualOutput).to.eql(expectedOutput);
	});

	it('Throw error if any manadatory fields missing while creation th JobSearchDTO', function(){
		var queryParams = {};

		queryParams["city"] = "city";
		queryParams["state"] = "state";
		queryParams["country"] = "country";
		queryParams["ip"] = "ip";
		queryParams["user_agent"] = "userAgent";
		

		expect(function(){
			createJobSearchDTO(queryParams)
			})
		.to.throw('searchTerm required key missing');
	});


});



