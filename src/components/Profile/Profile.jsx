import './Profile.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ProfilePhoto } from '../ProfilePhoto';
import { ProfileUser } from '../ProfileUser';
import { ProfileStatus } from '../ProfileStatus';
import { ProfileBio } from '../ProfileBio';

export class Profile extends Component {
    render() {
        const image = 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces';
        const name = 'janedoe_';
        const status = {
            posts: 164,
            followers: 188,
            following: 206
        };

        const bio = {
            name: 'Jane Doe',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷 ✈ 🏕',
        }

        return (
            <div className="profile">
                <ProfilePhoto image={ image } />
                <ProfileUser name={ bio.name } />
                <ProfileStatus { ...status } />
                <ProfileBio { ...bio }/>

          </div>
        ); 
    }
}

Profile.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.object,
}