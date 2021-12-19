import { Container, TextButton, Title, Select } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllTeachers, getTeacherTests } from "../services/api.services";
import styled from "styled-components";
import Test from "./test";

export default function ByTeacher(){
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState('');
    const [tests, setTests] = useState([]);

    useEffect(() => {
        getAllTeachers()
            .then((resp) => setTeachers([...resp.data]))
            .catch((err) => console.log(err));

        if(teacher){
            getTeacherTests(teacher)
                .then((resp) => setTests([...resp.data]))
                .catch((err) => console.log(err));
        }
    }, [teacher]);

    return (
        <Container>
            <Title>Selecione a prova:</Title>
            <Select onChange={(e) => {setTeacher(e.target.value)}}>
                <option value=''>Professor</option>
                {teachers.map((teacher) => <option key={teacher.id} value={teacher.name}>{teacher.name}</option>)}
            </Select>
            <InfoField>
                {tests[0] ?
                tests.map((test) => <Test test={test} key={test.id} />) :
                <p>Nenhuma prova encontrada</p>}
            </InfoField>

            <TextButton onClick={() => navigate('/')}>Voltar para a Home</TextButton>
        </Container>
    );
}

const InfoField = styled.div`
    margin: 30px 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`