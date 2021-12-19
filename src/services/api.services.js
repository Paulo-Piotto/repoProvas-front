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

function getAllTeachers() {
    return axios.get(`${URL}/teachers`);
}

function sendTest(test) {
    return axios.post(`${URL}/send-test`, test);
}

function getTeacherTests(teacher) {
    const encodedTeacher = encodeURI(teacher);
    return axios.get(`${URL}/get-tests/teacher/${encodedTeacher}`);
}

function getSubjectTests(subject) {
    const encodedSubject = encodeURI(subject);
    return axios.get(`${URL}/get-tests/subject/${encodedSubject}`);
}

export{
    getSubjects,
    getSubjectTeachers,
    sendTest,
    getAllTeachers,
    getTeacherTests,
    getSubjectTests,
}