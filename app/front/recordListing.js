/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookieValue } from '../helper_functions';
import Video from './components/video';
import MetaHeader from './components/metaHeader';
import VideoErrorBoundary from './errorBoundaries/videoErrorBoundary';
import Disqus from './Disqus/Disqus';

import './recordListing.scss';
import PropTypes from 'prop-types';
import { homeURI } from '../helper_constants';

class RecordListing extends Component {

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
		const id = this.props.match.params.id; // eslint-disable-line

		axios.get( `${homeURI}/apiV1/page/get/${id}` )
			.then( res => {

				this.setState( { loaded: true } );
				this.setState( { title: res.data.title } );
				this.setState( { subTitle: res.data.subTitle } );
				this.setState( { videoLink: res.data.videoLink } );
				this.setState( { descriptionOne: res.data.descriptionOne } );
				this.setState( { descriptionTwo: res.data.descriptionTwo } );
				this.setState( { descriptionThree: res.data.descriptionThree } );
				this.setState( { descriptionFour: res.data.descriptionFour } );
				this.setState( { descriptionFive: res.data.descriptionFive } );
				this.setState( { categories: res.data.categories } );
			} );

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

RecordListing.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	})
};

RecordListing.defaultProps = {
	match: {
		params: {
			id: ''
		}
	}
}

export default withRouter(RecordListing);
