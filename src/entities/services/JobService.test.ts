import "reflect-metadata";
import  {assert, expect} from 'chai';
import {JobSearchDTO, getNeuvooQueryStringFromDTO} from '../../dto/JobSearchDTO';
import JobService from './JobService';
import {neuvooApiEndPoint} from './JobService';
import {createJobGetDTOFromNeuvooDTO} from '../../dto/JobGetDTO';
import {createNeuvooJobResultDTO} from '../../dto/NeuvooJobResultDTO'
import * as NeuvooJobData from './NeuvooJobResultFixture.json'
import * as fetchMock from 'fetch-mock';




describe('JobService Domain Tests', function() {

	it('Get Job Information', async function() {
		const jobService = new JobService();

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

		var mockResponseObject = {'status': 200, body: JSON.stringify(NeuvooJobData)};
		fetchMock.get(`${neuvooApiEndPoint}${getNeuvooQueryStringFromDTO(jobSearchDTO)}`, mockResponseObject);
		var actualOutput = await jobService.getJobs(jobSearchDTO);

		expect(actualOutput).to.eql(NeuvooJobData["results"].map(createNeuvooJobResultDTO).map(createJobGetDTOFromNeuvooDTO));
 	});
});
