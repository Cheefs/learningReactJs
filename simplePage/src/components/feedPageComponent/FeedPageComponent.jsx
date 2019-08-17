import React, { Component, Fragment } from 'react';
import { FeedComponent } from '../feedComponent';
import styled from 'styled-components';
import { Form } from '../_uiKit/form';

const StyledContainer = styled.div`
    width: 1070px;
    margin: 0 auto;
    text-align: center;
`;

export class FeedPageComponent extends Component {
    state = {
        feeds: [ 
            {
                header: 'Feed 1',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim erat dolor, at cursus quam pharetra ut. Nunc at ipsum
                        a eros commodo lobortis quis quis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
                        quis viverra nunc. Donec sed arcu vehicula, ultricies lectus nec, ornare est. Praesent a consectetur justo, eu sodales nunc. Suspendisse
                        suscipit sollicitudin ante et eleifend. Donec auctor vehicula posuere. Vivamus iaculis leo quis ex tempus, nec posuere odio viverra. Integer ac convallis lectus.
                        Quisque accumsan, ex ac faucibus rhoncus, neque quam volutpat metus, at hendrerit sem lectus in felis. Sed nec dui mi.`
            }, 
            {
                header: 'Feed 2',
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim erat dolor, at cursus quam pharetra ut. Nunc at ipsum
                    a eros commodo lobortis quis quis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
                    quis viverra nunc. Donec sed arcu vehicula, ultricies lectus nec, ornare est. Praesent a consectetur justo, eu sodales nunc. Suspendisse
                    suscipit sollicitudin ante et eleifend. Donec auctor vehicula posuere. Vivamus iaculis leo quis ex tempus, nec posuere odio viverra. Integer ac convallis lectus.
                    Quisque accumsan, ex ac faucibus rhoncus, neque quam volutpat metus, at hendrerit sem lectus in felis. Sed nec dui mi.`
            }, 
        ]
    }

    formSubmit(props) {
        const { feeds } = this.state,
            { header, text } = props; 

        if ( header && text ) {
            feeds.push({
                header: header,
                text: text
            });
    
            return this.setState({
                feeds: feeds,
                isError: false
            });
        }
    }

    render() {
        const { feeds } = this.state;
        return (
            <Fragment>
               
                <Form onClick={ (props) => this.formSubmit(props) }/>
                <StyledContainer>
                    { feeds.map((el, idx) => {
                        return (
                            <FeedComponent key={ idx } { ...el }> { el.text } </FeedComponent>
                        );
                    }) }
                </StyledContainer>
            </Fragment>
        );
    }
}