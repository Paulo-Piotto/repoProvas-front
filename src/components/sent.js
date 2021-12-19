import { Container, Title, TextButton } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";

export default function Sent(){
    const navigate = useNavigate();
    return (
        <Container>
            <Title>Prova enviada com sucesso!!</Title>
            <TextButton onClick={() => navigate('/')}>Voltar para a home</TextButton>
        </Container>
    );
}