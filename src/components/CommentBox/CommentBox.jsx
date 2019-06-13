import './CommentBox.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CommentBox extends Component {
    render() {
        const comments = this.props.comments;
        return (
            <li className="gallery-item-comments">
                <span className="visually-hidden">Comments:</span>
                <i className="fas fa-comment"aria-hidden="true"></i>&nbsp;{ comments }
            </li>
        );
    }
}

CommentBox.propTypes = {
    comments: PropTypes.number.isRequired
}