import './ProfileBio.scss';
import React, { Component } from 'react';

export class ProfileBio extends Component {
    render () {
        return (
            <div className="profile-bio">
                <p>
                    <span className="profile-real-name"> { this.props.name }</span> 
                    { this.props.desc } 
                </p>
            </div>
        );
    }
}