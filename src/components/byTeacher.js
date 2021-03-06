import { Container, TextButton, Title, Select, InfoField } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllTeachers, getTeacherTests } from "../services/api.services";
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
        }else{
            setTests([]);
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
                tests.map((test) => <Test test={test} type={'teacher'} key={test.id} />) :
                <p>Nenhuma prova encontrada</p>}
            </InfoField>

            <TextButton onClick={() => navigate('/')}>Voltar para a Home</TextButton>
        </Container>
    );
}