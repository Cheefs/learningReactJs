import './ProfilePhoto.scss';
import React, { Component } from 'react';

export class ProfilePhoto extends Component {
    render() {
        const image = this.props.image;
        return (
            <div className="profile-image">
                <img src={image} alt="image"/>
            </div>
        );
    }
}