/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExtendedPropTypes from 'extended-proptypes';
import {
	thumbnailOne,
	thumbnailTwo,
	thumbnailThree,
	thumbnailFour,
	thumbnailFive
} from '../../alternative_default_thumbnails';
import { Link } from 'react-router-dom';
import './pageUnit.scss';

export default class PageUnit extends Component {

	static propTypes = {
		id: ExtendedPropTypes.mongoId.isRequired,
		slug: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		thumbnailUrl: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	};

	render () {

		const { slug, id, thumbnailUrl, title, subtitle } = this.props;

		const myArray = [ thumbnailOne, thumbnailTwo, thumbnailThree, thumbnailFour, thumbnailFive ];
		const thumbnailDefault = myArray[ Math.floor( Math.random() * myArray.length ) ];
		const randomNumber = Math.floor( Math.random() * 8 ) + 1;

		return (
			<Link
				styleName='pageUnit'
				to={`/${slug}/${id}`}
			>
				<img
					alt={title}
					onError={( e ) => {
						e.target.className = `random${randomNumber}`
						e.target.src = thumbnailDefault
						e.target.alt = ''
					}}
					src={thumbnailUrl}
				/>
				<span className='video-title'>
					{title}
				</span>
				<span className='video-subtitle'>
					{subtitle}
				</span>
			</Link>
		)
	}
}

