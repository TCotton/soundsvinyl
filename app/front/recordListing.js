/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getCookieValue } from '../helper_functions';
import Video from './components/video';
import MetaHeader from './components/metaHeader';
import VideoErrorBoundary from './errorBoundaries/videoErrorBoundary';
import CommentsForm from 'Comments/CommentsForm';

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
			categories: Array,
			disabled: true,
			commentsMessage: '',
			success: false,
			comments: Array,
		}

		this.handleSubmit = this.handleSubmit.bind( this );
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
				this.setState( { categories: res.data.categories } );
			} );

		axios.get( `${homeURI}/apiV1/page/comment/${id}` ).then( res => {

			if( Array.isArray( res.data ) && res.data.length > 0 ) {
				this.setState( { comments: res.data } );
			}

		} );

		if( this.checkTokenCookie( 'token' ) ) {
			this.setState( { disabled: false } ); // eslint-disable-line
		}
	}

	checkTokenCookie () {
		return getCookieValue( 'token' );
	}

	handleSubmit () {
		const { content } = this.state;
		const articleId = this.props.match.params.id; // eslint-disable-line

		if( content && content.length > 0 ) {

			axios.post( `${homeURI}/apiV1/comment/add`, { content, articleId } )
				.then( res => {
					if( res.status === 200 && res.data ) {
						this.setState( { success: true } );
						this.setState( { commentsMessage: '' } );
					}
				} );
		}

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
			videoLink,
			disabled,
			success,
			comments,
			categories,
			loaded,
			commentsMessage
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

					</section>

					<section
						className={( categories ? 'display' : 'hide' )}
						styleName='categories'
					>
						<ul>
							{categoryList}
						</ul>
					</section>

					<CommentsForm
						comments={comments}
						commentsMessage={commentsMessage}
						disabled={disabled}
						onFormSubmit={this.handleSubmit}
						onInputChange={this.handleInputChange}
						success={success}
					/>

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
