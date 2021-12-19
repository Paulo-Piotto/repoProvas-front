import styled from "styled-components";

export default function Test({test, type}){
    return (
        <Anchor href={test.url}>
            <Container>
                <p><span>Nome: </span>{test.name}</p>
                {type === 'teacher' ? <p><span>Disciplina: </span>{test.subject}</p> :
                <p><span>Professor(a): </span>{test.teacher}</p> }
                <p><span>Categoria: </span>{test.category}</p>
            </Container>
        </Anchor>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    margin-bottom: 12px;
    border: 1px solid lightgrey;
    border-radius: 6px;
    height: 40px;
    cursor: pointer;

    &:hover{
        color: orange;
    }


    span{
        font-weight: bold;
        font-size: 16px;
    }
`

const Anchor = styled.a`
    color: black;
    text-decoration: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`