/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookieValue } from '../helper_functions';
import Video from './Page/Video';
import MetaHeader from './MetaHeadComponents/metaHeader';
import VideoErrorBoundary from './errorBoundaries/videoErrorBoundary';
import Disqus from './Disqus/Disqus';

import './recordListing.scss';
import PropTypes from 'prop-types';
import { homeURI } from '../helper_constants';

class RecordListing extends Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string
			})
		})
	};

	static defaultProps = {
		match: {
			params: {
				id: ''
			}
		}
	}

	constructor ( props ) {
		super( props );

		this.state = {
			loaded: false,
			title: String,
			subTitle: String,
			videoLink: String,
			descriptionOne: String,
			descriptionTwo: String,
			descriptionThree: String,
			descriptionFour: String,
			descriptionFive: String,
			categories: Array,
		}

		this.handleInputChange = this.handleInputChange.bind( this );
	}

	componentDidMount () {
		const { match: { params: { id } } } = this.props;

		axios.get( `${homeURI}/apiV1/page/get/${id}` )
			.then( res => {

				this.setState( {
					loaded: true,
					title: res.data.title,
					subTitle: res.data.subTitle,
					videoLink: res.data.videoLink,
					descriptionOne: res.data.descriptionOne,
					descriptionTwo: res.data.descriptionTwo,
					descriptionThree: res.data.descriptionThree,
					descriptionFour: res.data.descriptionFour,
					descriptionFive: res.data.descriptionFive,
					categories: res.data.categories
				});
			});

		if( this.checkTokenCookie( 'token' ) ) {
			this.setState( { disabled: false } ); // eslint-disable-line
		}
	}

	checkTokenCookie () {
		return getCookieValue( 'token' );
	}

	handleInputChange ( event ) {

		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState( {
			[ name ]: value
		} );

	}

	render () {

		const {
			title,
			subTitle,
			descriptionOne,
			descriptionTwo,
			descriptionThree,
			descriptionFour,
			descriptionFive,
			videoLink,
			categories,
			loaded,
		} = this.state;

		let videoComponent;

		if( videoLink !== '' ) {
			videoComponent = () => {
				return (
					<VideoErrorBoundary>
						<Video videoLink={videoLink} />
					</VideoErrorBoundary>
				)
			}
		}

		let metaHeaderComponent;

		if( title !== '' && title.length > 1 ) {
			metaHeaderComponent = <MetaHeader title={title} />
		}

		let categoryList;

		if( categories && categories.length > 1 ) {
			const categoryArray = categories.reduce( ( accumulator, currentValue ) => {
				return accumulator.concat( currentValue.name );
			}, [] );

			categoryList = categoryArray.map( ( element ) => {
				return (
					<li key={element}>
						{element}
					</li>
				)
			} );

		}

		if( !loaded ) {
			return null;
		} else {

			return (
				<main styleName='recordListing'>
					<header styleName='record'>

						<h2
							className={( title ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
						<p
							className={( subTitle ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: subTitle }}
						/>

						{metaHeaderComponent}

					</header>

					<section styleName='videoSineWave'>

						<div styleName='videoContainer'>
							{videoComponent()}
						</div>

					</section>

					<section styleName='description'>

						<p
							className={( descriptionOne ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: descriptionOne }}
						/>
						<p
							className={( descriptionTwo ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: descriptionTwo }}
						/>
						<p
							className={( descriptionThree ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: descriptionThree }}
						/>
						<p
							className={( descriptionFour ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: descriptionFour }}
						/>
						<p
							className={( descriptionFive ? 'display' : 'hide' )}
							dangerouslySetInnerHTML={{ __html: descriptionFive }}
						/>

					</section>

					<section
						className={( categories ? 'display' : 'hide' )}
						styleName='categories'
					>
						<ul>
							{categoryList}
						</ul>
					</section>

					<section>
						<Disqus
							id={window.location.pathname.split('/').filter(function(el){ return !!el; }).pop()}
							path={window.location.pathname}
							title={title.toString()}
						/>
					</section>

				</main>
			)
		}
	}
}

export default withRouter(RecordListing);
