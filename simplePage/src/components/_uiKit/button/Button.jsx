import React from 'react';
import { setType } from './ButtonParams';
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: ${ (props) => setType(props.button, ' borderRadius') }; 
    padding: ${ (props) => setType(props.button, 'padding') }; 
    border: ${ (props) => setType(props.button, 'border') };
    background-color: ${ (props) => setType(props.button, 'backgroundColor') };
    color: ${ (props) => setType(props.button, 'color') };
    font-weight: ${ (props) => setType(props.button, 'fontWeight') };
    cursor: ${ (props) => setType(props.button, 'cursor') };
    &:hover {
        text-decoration: ${ (props) => setType(props.button, 'hover', ' textDecoration') };
        color: ${ (props) => setType(props.button, 'hover', 'color') };
        background-color: ${ (props) => setType(props.button, 'hover', 'backgroundColor') };
    }
    &:active, &:focus {
        outline: unset;
    }
`;
export const Button = (props) => <StyledButton { ...props }/>; 
