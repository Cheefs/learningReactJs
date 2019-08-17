import React, { Component } from 'react';
import { Button } from '../_uiKit/button';
import styled from 'styled-components';

const StyledContainer = styled.div`
    border-bottom: 1px solid #dddd;
    box-shadow: 10px 10px 10px 0;
`;

export class FeedComponent extends Component {
    state = {
        isVisible: false
    }

    toogleText(visible) {
        this.setState({
            isVisible: visible
        });
    }

    render() {
        const { isVisible } = this.state;
        const { header } = this.props;
        return (
            <StyledContainer>
                <h3>{ header }</h3>
                { isVisible && <span>{ this.props.children }</span> }
                <Button type="button" button={'link'} onClick={ () => this.toogleText(!isVisible) }> { !isVisible ? 'Текс новости' : 'Скрыть' } </Button>
            </StyledContainer>
        );
    }
}