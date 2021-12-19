import { Container, Button, Input, Select, Title, TextButton, Form } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSubjects, getSubjectTeachers, sendTest } from "../services/api.services";

export default function NewTest(){
    const navigate = useNavigate();
    const [allSubjects, setAllSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState({});
    const [category, setCategory] = useState('');
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        getSubjects()
            .then((resp) => {
                setAllSubjects([...resp.data])
            })
            .catch((err) => console.log(err));

        if(subject){
            getSubjectTeachers(subject)
                .then((resp) => {
                    setTeachers([...resp.data])
                })
                .catch((err) => console.log(err));
        }else{
            setTeachers([]);
        }
    }, [subject]);

    function sendNewTest(e){
        e.preventDefault();
        const validUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const isValidUrl = validUrl.test(url);

        if(isValidUrl){
            const test = {
                name,
                category,
                subject,
                teacher,
                url,
            };
            sendTest(test)
                .then((resp) => navigate('/sent'))
                .catch((err) => alert(err.response.data));
        }else{
            alert('URL inválida!');
        }

    }

    return (
        <Container>
            <Title>Enviar nova Prova</Title>
            <Form onSubmit={(e) => sendNewTest(e)}>
            <Input placeholder="Nome da Prova" onChange={(e) => {setName(e.target.value)}} required/>
            <Select onChange={(e) => {setCategory(e.target.value)}} required>
                <option value=''>Categoria</option>
                <option>P1</option>
                <option>P2</option>
                <option>P3</option>
                <option>2ch</option>
                <option>Outras</option>
            </Select>
            <Select onChange={(e) => {setSubject(e.target.value)}} required>
                <option value=''>Disciplina</option>
                {allSubjects.map((subject) => <option key={subject.id} value={subject.name}>{subject.name}</option>)}
            </Select>
            <Select onChange={(e) => {setTeacher(e.target.value)}} required>
                <option value=''>Professor</option>
                {teachers.map((teacher) => <option key={teacher.id} value={teacher.name}>{teacher.name}</option>)}
            </Select>
            <Input placeholder="URL da prova" onChange={(e) => {setUrl(e.target.value)}} required/>
            <Button type='submit'>Enviar</Button>
            </Form>
            <TextButton onClick={() => navigate('/')}>Voltar para a Home</TextButton>
        </Container>
    );
}