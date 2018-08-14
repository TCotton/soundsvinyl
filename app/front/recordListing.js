import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './recordListing.scss';
import avatar from '../assets/graphics/Avatar_default_pic.png';
import PropTypes from 'prop-types'
import { homeURI } from '../helper_constants'

class RecordListing extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			loaded: false,
			title: String,
			subTitle: String,
			videoLink: String,
			descriptionOne: String,
			descriptionTwo: String,
			descriptionThree: String,
			categories: Array,
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidUpdate () {
		// fires after all setState has been run
	}

	componentDidMount () {
		const id = this.props.match.params.id;

		axios.get(`${homeURI}/apiV1/page/get/${id}`)
			.then(res => {

				console.dir(res.data);

				this.setState({loaded: true});
				this.setState({title: res.data.title});
				this.setState({subTitle: res.data.subTitle});
				this.setState({videoLink: res.data.videoLink});
				this.setState({descriptionOne: res.data.descriptionOne});
				this.setState({descriptionTwo: res.data.descriptionTwo});
				this.setState({descriptionThree: res.data.descriptionThree});
				// this.setState({categories: res.data.categories});
			});
	}

	handleSubmit (e) {
		e.preventDefault();

		return false;
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

		console.dir(videoLink);

		/*	const categoryArray = this.state.categories.reduce((accumulator, currentValue) => {
				return accumulator.concat(currentValue.name);
			}, []);

			console.dir(categoryArray);
	*/

		if (!this.state.loaded) {
			return null;
		} else {

			return (
				<main styleName='recordListing'>
					<header styleName='record'>

						<h2 className={(title ? 'display' : 'hide')}>{title}</h2>
						<p className={(subTitle ? 'display' : 'hide')}>{subTitle}</p>

					</header>

					<section styleName='videoSineWave'>

						<div className='videoContainer'>
							<video controls width='700'>
								<source src={videoLink} type='video/mp4'/>
								<p>Your browser doesn't support HTML5 video. Here is
									a <a href={videoLink}>link to the video</a> instead.</p>
							</video>
						</div>

						<div>
							<img/>
						</div>
					</section>

					<section styleName='description'>

						<p className={(descriptionOne ? 'display' : 'hide')}>{descriptionOne}</p>
						<p className={(descriptionTwo ? 'display' : 'hide')}>{descriptionTwo}</p>
						<p className={(descriptionThree ? 'display' : 'hide')}>{descriptionThree}</p>

					</section>

					<section styleName='commentsForm'>
						<h3>Comments</h3>

						<form onSubmit={this.handleSubmit}>

							<textarea cols='10' rows='10' id='commentsMessage' name='commentsMessage' value=''/>
							<input type='submit' name='submit' value='Comment'/>

						</form>
					</section>

					<section styleName='commentsBlock'>

						<div styleName='comment'>
							<div styleName='commentLeftColumn'>
								<img src={avatar}/>
							</div>
							<div styleName='commentRightColumn'>
							<span styleName='commentName'>
								<p>Peter Smith</p>
							</span>
								<span styleName='commentText'>
								<p>Nam vel ornare lorem. Sed eleifend egestas Nam vel ornare lorem. Sed eleifend egestasNam vel ornare lorem. Sed eleifend egestas</p>
							</span>
							</div>
						</div>

						<div styleName='comment'>
							<div styleName='commentLeftColumn'>
								<img src={avatar}/>
							</div>
							<div styleName='commentRightColumn'>
							<span styleName='commentName'>
								<p>Peter Smith</p>
							</span>
								<span styleName='commentText'>
								<p>Nam vel ornare lorem. Sed eleifend egestas Nam vel ornare lorem. Sed eleifend egestasNam vel ornare lorem. Sed eleifend egestas</p>
							</span>
							</div>
						</div>

						<div styleName='comment'>
							<div styleName='commentLeftColumn'>
								<img src={avatar}/>
							</div>
							<div styleName='commentRightColumn'>
							<span styleName='commentName'>
								<p>Peter Smith</p>
							</span>
								<span styleName='commentText'>
								<p>Nam vel ornare lorem. Sed eleifend egestas Nam vel ornare lorem. Sed eleifend egestasNam vel ornare lorem. Sed eleifend egestas</p>
							</span>
							</div>
						</div>
					</section>

					<section styleName='recommendedVideos'>

						<h4>You also might like</h4>

						<div styleName='videoUnits'>

							<div styleName='pageUnit'>
								<img/>
								<span styleName='videoCaption'>Video hot mix one</span>
							</div>

							<div styleName='pageUnit'>
								<img/>
								<span styleName='videoCaption'>Video hot mix two</span>
							</div>

							<div styleName='pageUnit'>
								<img/>
								<span styleName='videoCaption'>Video hot mix three</span>
							</div>

							<div styleName='pageUnit'>
								<img/>
								<span styleName='videoCaption'>Video hot mix four</span>
							</div>

						</div>
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

export default withRouter(RecordListing);
