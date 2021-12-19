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
    height: 50px;
    background-color: orange;
    color: white;
    margin: 20px 0;
    font-weight: bold;
    cursor: pointer;
    
    @media(min-width: 800px){
        width: 18%;
    }
`

const Input = styled.input`
    width: 80%;
    height: 50px;
    outline: none;
    border-radius: 8px;
    border: 1px solid grey;
    margin: 10px 0;
    padding: 10px;
    font-size: 20px;

    @media(min-width: 800px){
        width: 40%;
    }
`

const Select = styled.select`
    width: 80%;
    height: 50px;
    outline: none;
    border-radius: 8px;
    border: 1px solid grey;
    margin: 10px 0;
    padding: 10px;
    font-size: 20px;
    background-color: white;

    @media(min-width: 800px){
        width: 40%;
    }
`

const Title = styled.h2`
    margin-bottom: 60px;
    font-size: 25px;
`
const TextButton = styled.p`
    font-size: 18px;
    color: #05cdff;
    text-decoration: underline;
    cursor: pointer;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const InfoField = styled.div`
    margin: 30px 0;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export {
    Container,
    Button,
    Input,
    Select,
    Title,
    TextButton,
    Form,
    InfoField,
}