import './ProfileUser.scss';
import React, { Component } from 'react';

export class ProfileUser extends Component {
    render () {
        return (
            <div className="profile-user-settings">
                <h1 className="profile-user-name">{ this.props.name }</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings">
                    <i className="fas fa-cog" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}