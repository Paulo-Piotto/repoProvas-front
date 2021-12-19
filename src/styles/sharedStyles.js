import styled from "styled-components";

const Container = styled.div`
    padding: 30px 15px 30px 15px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    h1{
        margin-bottom: 40px;
    }
`

const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    width: 40%;
    height: 40px;
    background-color: orange;
    color: white;
    margin-bottom: 20px;
`

export {
    Container,
    Button,
}