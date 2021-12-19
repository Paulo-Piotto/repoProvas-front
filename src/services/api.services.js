import axios from "axios";

const URL = "http://localhost:4000";

// "https://back-repo-provas-paulo.herokuapp.com"


function getSubjects() {
    return axios.get(`${URL}/subjects`);
}

function getSubjectTeachers(subject) {
    const encodedSubject = encodeURI(subject);
    return axios.get(`${URL}/teachers/${encodedSubject}`);
}

function sendTest(test) {
    return axios.post(`${URL}/send-test`, test);
}

export{
    getSubjects,
    getSubjectTeachers,
    sendTest,
}