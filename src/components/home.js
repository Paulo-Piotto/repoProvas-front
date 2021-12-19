import { Container, Button } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    return (
        <Container>
            <h1>RepoProvas</h1>
            <Button onClick={() => navigate('/new-test')}>Enviar Prova</Button>
            <Button onClick={() => navigate('/search')}>Ver Prova</Button>
        </Container>
    );
}