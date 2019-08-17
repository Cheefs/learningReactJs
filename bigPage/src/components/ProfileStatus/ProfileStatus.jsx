import './ProfileStatus.scss';
import React, { Component } from 'react';

export class ProfileStatus extends Component {
    render() {
        return (
            <div className="profile-stats">
                <ul>
                    <li><span className="profile-stat-count">{ this.props.posts }</span> posts</li>
                    <li><span className="profile-stat-count">{ this.props.followers }</span> followers</li>
                    <li><span className="profile-stat-count">{ this.props.following }</span> following</li>
                </ul>
            </div>
        );
    }
}