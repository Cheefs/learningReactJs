import React, { Component } from 'react';
import { Button } from '../button';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledInput = styled.input`
    border: 1px solid #dddd;
    border-radius: 2px;
    padding: 5px;
    margin-bottom: 15px;
`;

const FormFied = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`;

const RequiredFied = styled.span`
    color: red;
`;

const ErrorMeaage = styled.p`
    text-align: center;
    color: red;
    margin: 0;
`;

export class Form extends Component {

    state = {
        isError: false,
        header: '',
        text: ''
    };

    constructor(props) {
        super(props);
        this.headerInput = React.createRef();
        this.textInput = React.createRef();
    }

    clearInputs() {
        this.headerInput.current.value = '';
        this.textInput.current.value = '';
    }
    
    async submitEvent( callBack ) {
        const values = {
            header: this.headerInput.current.value,
            text: this.textInput.current.value
        }
        if ( values.header && values.text ) {
            await this.setState({
                header: values.header,
                text: values.text
            });
            await this.clearInputs();
            return callBack(this.state)
        }
        return this.setState({
            isError: true
        })
    }

    render() {
        const { onClick, ...formProps } = this.props,
              { isError } = this.state;
        return (
            <StyledForm { ...formProps }>
                <FormFied>
                    <label htmlFor="header">Заголовок<RequiredFied>*</RequiredFied></label> 
                    <StyledInput id='header' type="text" ref={ this.headerInput } />
                </FormFied>
                <FormFied>
                    <label htmlFor="header">Текст новости<RequiredFied>*</RequiredFied></label> 
                    <StyledInput type="text" ref={ this.textInput }/>
                </FormFied>
                <ErrorMeaage>{ isError && 'Вы должны заполнить все поля!' }</ErrorMeaage>
                <Button type="button" button="default" onClick={ () => this.submitEvent( onClick ) }> Добавить новость </Button>
            </StyledForm> 
        )
    }
}