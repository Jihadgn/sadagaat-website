import axios from "axios";
// api 
export function address() {
  return "https://sadagaat.com:4959/api/v1/";
}

export default address;

export  function submit_volunteer_data(data) {
  const subHub = {
      email: data.email,
      name: data.name,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      phoneNumber: data.phoneNumber,
      whatsPhone: data.whatsPhone,
      liveInSudan: data.liveInSudan,
      hasCommunityInCountry: data.hasCommunityInCountry,
      state: data.state,
      city: data.city,
      locality: data.locality,
      neighborhood: data.neighborhood,
      bloodGroup: data.bloodGroup,
      educationLevel: data.educationLevel,
      studyField: data.studyField,
      university: data.university,
      job: data.job,
      jobTitle: data.jobTitle,
      volunteeredBefore: data.volunteeredBefore,
      volunteeredPeriod: data.volunteeredPeriod,
      volunteeredProjects: data.volunteeredProjects,
      lastContribution: data.lastContribution,
      heardAboutSadagaat: data.heardAboutSadagaat,
      note: data.note,
      receiveEmails: data.receiveEmails,
      volunteerTime: data.volunteerTime,
  };
  return axios
    .post(`${address()}cisco-subscriber/submit`, data)
    // .then(res => res.json())

}

export function routeToUrl(url) {
  setTimeout(function () {
    window.location.replace(url);
  }, 3000);
}
