import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { getCookieValue } from '../helper_functions';
import Video from './components/video';

import './recordListing.scss';
import PropTypes from 'prop-types';
import { homeURI } from '../helper_constants';

class RecordListing extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			loaded: false,
			title: String,
			subTitle: String,
			videoLink: 'String',
			descriptionOne: String,
			descriptionTwo: String,
			descriptionThree: String,
			categories: Array,
			disabled: true,
			commentsMessage: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount () {
		const id = this.props.match.params.id;

		axios.get(`${homeURI}/apiV1/page/get/${id}`)
			.then(res => {

				/*	if(res.data.categories) {
						console.dir(Array.isArray(res.data.categories));
						console.dir(res.data.categories);
					}*/

				this.setState({loaded: true});
				this.setState({title: res.data.title});
				this.setState({subTitle: res.data.subTitle});
				this.setState({videoLink: res.data.videoLink});
				this.setState({descriptionOne: res.data.descriptionOne});
				this.setState({descriptionTwo: res.data.descriptionTwo});
				this.setState({descriptionThree: res.data.descriptionThree});
				this.setState({categories: res.data.categories});
			});

		if (this.checkTokenCookie('token')) {
			this.setState({disabled: false});
		}
	}

	checkTokenCookie () {
		return getCookieValue('token');
	}

	handleSubmit (e) {
		e.preventDefault();

		const content = this.state.content;
		const articleId = this.props.match.params.id;

		console.log('submit yes');

		if (content.length > 0) {
			axios.post(`${homeURI}/apiV1/comment/add`, {content, articleId})
				.then(res => {
					console.dir(res);
				});
		}

	}

	handleInputChange (event) {

		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

	}

	render () {

		const title = this.state.title;
		const subTitle = this.state.subTitle;
		const descriptionOne = this.state.descriptionOne;
		const descriptionTwo = this.state.descriptionTwo;
		const descriptionThree = this.state.descriptionThree;
		const videoLink = this.state.videoLink;
		const disabled = this.state.disabled;
		let videoComponent;

		if(videoLink !== '') {
			videoComponent = <Video videoLink={videoLink} />
		}

		/*const categoryArray = this.state.categories.reduce((accumulator, currentValue) => {
			return accumulator.concat(currentValue.name);
		}, []);

		console.dir(categoryArray);*/

		if (!this.state.loaded) {
			return null;
		} else {

			return (
				<main styleName='recordListing'>
					<header styleName='record'>

						<h2 className={(title ? 'display' : 'hide')} dangerouslySetInnerHTML={{__html: title}} />
						<p className={(subTitle ? 'display' : 'hide')} dangerouslySetInnerHTML={{__html: subTitle}} />

					</header>

					<section styleName='videoSineWave'>

						<div styleName='videoContainer'>
							{videoComponent}
						</div>

					</section>

					<section styleName='description'>

						<p className={(descriptionOne ? 'display' : 'hide')} dangerouslySetInnerHTML={{__html: descriptionOne}} />
						<p className={(descriptionTwo ? 'display' : 'hide')} dangerouslySetInnerHTML={{__html: descriptionTwo}} />
						<p className={(descriptionThree ? 'display' : 'hide')} dangerouslySetInnerHTML={{__html: descriptionThree}} />

					</section>

					<section styleName='commentsForm'>
						<h3>Comments</h3>

						<p className={(disabled ? 'display' : 'hide')}>You must be <Link to='/my-account'>registered and logged
							in</Link> to contribute a comment</p>

						<form onSubmit={this.handleSubmit}>

							<textarea cols='10' rows='10' id='commentsMessage' name='commentsMessage' maxLength='500'
												value={this.state.commentsMessage} onChange={this.handleInputChange}/>
							<input type='submit' name='submit' value='Comment' disabled={disabled}/>

						</form>
					</section>

					<section styleName='commentsBlock'>&nbsp;</section>

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

export default withRouter(RecordListing);
