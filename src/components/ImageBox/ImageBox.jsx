import './ImageBox.scss';
import { LikeBox } from '../LikeBox';
import { CommentBox } from '../CommentBox';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class ImageBox extends Component {
    render () {
        const { image, likes, comments } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={ image } className="gallery-image" alt=""/>
                <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>
                </div>
                <div className="gallery-item-info">
                <ul>
                    <LikeBox likes={ likes } />
                    <CommentBox comments={ comments } />
                </ul>
                </div>
          </div>
        );
    }   
}

ImageBox.propTypes = {
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired
}