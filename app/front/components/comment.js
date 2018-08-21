import React from 'react';
import PropTypes from 'prop-types';
import avatar from '../../assets/graphics/Avatar_default_pic.png';
import './comment.scss';

function Comment (props) {

	return (
		<div styleName='comment'>
			<div styleName='commentLeftColumn'>
				<img src={avatar}/>
			</div>
			<div styleName='commentRightColumn'>
				<span styleName='commentName'>
					<p>{props.username}</p>
				</span>
				<span styleName='commentText'>
					<p>{props.content}</p>
				</span>
			</div>
		</div>
	);
}

Comment.propTypes = {
	username: PropTypes.string,
	content: PropTypes.string,
};

export default Comment;

