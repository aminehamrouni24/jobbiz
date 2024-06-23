import axios from "axios";

export const externalApiServices = {
  searchSkills,
  searchJobs,
  searchCompanies,
  searchUniversities,
};

// Search skills using DataUSA.io API
async function searchSkills(query) {
  try {
    const response = await axios.get(
      `https://datausa.io/api/data?drilldowns=Occupation&measures=Employment&year=latest`
    );

    // Filter the skills data based on the query
    const filteredSkills = response.data.data
      .filter((skill) =>
        skill.Occupation.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);

    return filteredSkills;
  } catch (error) {
    console.error("Failed to fetch skills data", error);
    return [];
  }
}

// Search job postings using GitHub Jobs API
async function searchJobs(query) {
  try {
    const response = await axios.get(
      `https://jobs.github.com/positions.json?description=${query}&location=`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch job data", error);
    return [];
  }
}

// Search companies using Clearbit API
async function searchCompanies(query) {
  try {
    const response = await axios.get(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch company data", error);
    return [];
  }
}

// Search universities using Hipolabs API
async function searchUniversities(query) {
  try {
    const response = await axios.get(
      `http://universities.hipolabs.com/search?name=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch university data", error);
    return [];
  }
}
