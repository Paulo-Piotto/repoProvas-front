import { Container, TextButton, Title, Select, InfoField } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSubjects, getSubjectTests} from "../services/api.services";
import Test from "./test";

export default function BySubject(){
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [tests, setTests] = useState([]);

    useEffect(() => {
        getSubjects()
            .then((resp) => setSubjects([...resp.data]))
            .catch((err) => console.log(err));

        if(subject){
            getSubjectTests(subject)
                .then((resp) => setTests([...resp.data]))
                .catch((err) => console.log(err));
        }else{
            setTests([]);
        }
    }, [subject]);

    return (
        <Container>
            <Title>Selecione a prova:</Title>
            <Select onChange={(e) => {setSubject(e.target.value)}}>
                <option value=''>Disciplina</option>
                {subjects.map((subject) => <option key={subject.id} value={subject.name}>{subject.name}</option>)}
            </Select>
            <InfoField>
                {tests[0] ?
                tests.map((test) => <Test test={test} type={'subject'} key={test.id} />) :
                <p>Nenhuma prova encontrada</p>}
            </InfoField>

            <TextButton onClick={() => navigate('/')}>Voltar para a Home</TextButton>
        </Container>
    );
}