import  {assert, expect} from 'chai';
import {NeuvooJobResultDTO} from "./NeuvooJobResultDTO";
import {createJobGetDTOFromNeuvooDTO, JobGetDTO} from "./JobGetDTO";

describe('NuevooIntegration - Make JobGetDTO from NeuvooJobResultDTO', function() {
	it('Get JobGet object from Neuvoo Data', function() {
		let neuvooJobResultDTO = new NeuvooJobResultDTO()

		neuvooJobResultDTO.jobKey = "jobKey"
		neuvooJobResultDTO.jobTitle =  "jobTitle"
		neuvooJobResultDTO.company =  "company";
		neuvooJobResultDTO.city = "city";
		neuvooJobResultDTO.state = "state";
		neuvooJobResultDTO.formattedLocation = "formattedLocation";
		neuvooJobResultDTO.source = "source";
		neuvooJobResultDTO.date = "date";
		neuvooJobResultDTO.description = "description";
		neuvooJobResultDTO.category = "category";
		neuvooJobResultDTO.url = "url";
		neuvooJobResultDTO.logo = "logo";
		neuvooJobResultDTO.bid = 1;
		neuvooJobResultDTO.currency = "currency";

		let actualOutput = createJobGetDTOFromNeuvooDTO(neuvooJobResultDTO);
		let expectedOutput = new JobGetDTO();

		expectedOutput.title = "jobTitle";
		expectedOutput.company = "company";
		expectedOutput.logo= "logo";
		expectedOutput.city = "city";
		expectedOutput.url = "url";
		expectedOutput.posted_time_friendly = "date";
		expectedOutput.source = "Neuvoo";

		// assert equality
		expect(actualOutput).to.be.eql(expectedOutput);
  });
});
