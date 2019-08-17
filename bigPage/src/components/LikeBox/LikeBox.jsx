import './LikeBox.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LikeBox extends Component {
    render() {
        const likes = this.props.likes;
        return (
            <li className="gallery-item-likes">
                <span className="visually-hidden">Likes:</span>
                <i className="fas fa-heart" aria-hidden="true"></i>&nbsp;{ likes }
            </li>
        );
    }
}

LikeBox.propTypes = {
    likes: PropTypes.number.isRequired
}