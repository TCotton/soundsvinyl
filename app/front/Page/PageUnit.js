import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExtendedPropTypes from 'extended-proptypes'
import {
	thumbnailOne,
	thumbnailTwo,
	thumbnailThree,
	thumbnailFour,
	thumbnailFive
} from '../../alternative_default_thumbnails'
import { Link } from 'react-router-dom'
import './pageUnit.scss';
import Observer from '@researchgate/react-intersection-observer';

export default class PageUnit extends Component {

	static propTypes = {
		id: ExtendedPropTypes.mongoId,
		subtitle: PropTypes.string,
		thumbnailUrl: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func,
		]),
		title: PropTypes.string
	}

	static defaultProps = {
		id: '5c131a627ee0194979fa1b21',
		slug: 'slug',
		subtitle: 'subtitle',
		thumbnailUrl: '',
		title: ''
	}

	constructor (props) {
		super(props)
		this.handleOnError = this.handleOnError.bind(this);
		this.handleIntersection = this.handleIntersection.bind(this);
	}

	handleIntersection ( event, unobserve ) {
		const { thumbnailUrl, title } = this.props;
		if( event.isIntersecting ) {
			this.element.alt = title;
			this.element.src = thumbnailUrl;
			this.element.addEventListener('error', this.handleOnError);
			unobserve(this.element);
		}
	}

	handleOnError (event) {
		const myArray = [
			thumbnailOne,
			thumbnailTwo,
			thumbnailThree,
			thumbnailFour,
			thumbnailFive
		]
		const thumbnailDefault = myArray[Math.floor(Math.random() * myArray.length)]
		const randomNumber = Math.floor(Math.random() * 8) + 1

		event.target.className = `random${randomNumber}`;
		event.target.src = thumbnailDefault;
		event.target.alt = '';
	}

	render () {
		const { slug, id, subtitle , title} = this.props;

		const options = {
			onChange: this.handleIntersection,
			rootMargin: '0px 0px 0px 0px',
			threshold: 1.0,
			root: document.querySelector('.pageUnit')
		};

		return (
			<Link
				aria-label={title}
				styleName='pageUnit'
				to={`/${slug}/${id}`}
			>
				<Observer {...options}>
					<img ref={loadingRef => (this.element = loadingRef)} />
				</Observer>
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
