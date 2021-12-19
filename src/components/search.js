import { Container, Button, TextButton, Title } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const navigate = useNavigate();
    return (
        <Container>
            <Title>Buscar prova por:</Title>
            <Button onClick={() => navigate('/search/teacher')}>Professor</Button>
            <Button onClick={() => navigate('/search/subject')}>Disciplina</Button>
            <TextButton onClick={() => navigate('/')}>Voltar para a Home</TextButton>
        </Container>
    );
}