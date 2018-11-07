import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowCompare from 'react-addons-shallow-compare';
import './comment.scss';
import Profile1 from '../assets/graphics/profiles/profile-1.svg';
import Profile2 from '../assets/graphics/profiles/profile-2.svg';
import Profile3 from '../assets/graphics/profiles/profile-3.svg';
import Profile4 from '../assets/graphics/profiles/profile-4.svg';
import Profile5 from '../assets/graphics/profiles/profile-4.svg';
import moment from 'moment';

class Comment extends Component {

	constructor (props) {
		super(props);
	}

	shouldComponentUpdate (nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	render () {

		let values;
		const ProfileArray = [Profile1, Profile2, Profile3, Profile4, Profile5];
		const { content } = this.props;

		if (Array.isArray(content)) {
			values = content.map((value, i) => {

				const content = content[i].content;
				const username = content[i].userName;
				const date = moment(content[i].data).format('MMMM Do YYYY');
				const RandomProfile = ProfileArray[Math.floor(Math.random() * ProfileArray.length)];

				return (
					<div
						key={value}
						styleName='comment'
					>
						<div styleName='commentLeftColumn'>
							<RandomProfile />
						</div>
						<div styleName='commentRightColumn'>
							<p styleName='commentName'>
								{username}
								{'/'}
								{date}
							</p>
							<p styleName='commentText'>
								{content}
							</p>
						</div>
					</div>
				);
			});
		}

		return (
			<div>
				{values}
			</div>
		)
	}
}

Comment.propTypes = {
	content: PropTypes.arrayOf( PropTypes.shape({
		content: PropTypes.string,
		data: PropTypes.string,
		userName: PropTypes.string
	})).isRequired
};

export default Comment;

