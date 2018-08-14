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
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	UNSAFE_componentWillMount () {
		const id = this.props.match.params.id;

		axios.get(`${homeURI}/apiV1/page/get/${id}`)
			.then(res => {

				this.setState({loaded: true});
				this.setState({title: res.data.title});
				this.setState({title: res.data.subTitle});
				this.setState({title: res.data.videoLink});
				this.setState({title: res.data.descriptionOne});
				this.setState({title: res.data.descriptionTwo});
				this.setState({title: res.data.descriptionThree});
			});
	}

	componentDidUpdate () {
		// fires after all setState has been run
	}

	componentDidMount () {
		return true;
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

		/**
		 *    this.setState({title: res.data.title});
		 this.setState({title: res.data.subTitle});
		 this.setState({title: res.data.videoLink});
		 this.setState({title: res.data.descriptionOne});
		 this.setState({title: res.data.descriptionTwo});
		 this.setState({title: res.data.descriptionThree});
		 */

		const title = this.state.title;
		const subTitle = this.state.subTitle;
		const descriptionOne = this.state.descriptionOne;
		const descriptionTwo = this.state.descriptionTwo;
		const descriptionThree = this.state.descriptionThree;

		return (
			<main styleName='recordListing'>
				<header styleName='record'>
					<h2>{{title}}</h2>
					<p>{{subTitle}}</p>
				</header>

				<section styleName='videoSineWave'>

					<div>
						<video autoPlay loop muted>
									<source src='eye-of-the-tiger-video.mp4' type='video/mp4'>
									<img src='eye-of-the-tiger-fallback.gif'/>
						</video>
					</div>

					<div>
						<img/>
					</div>
				</section>

				<section styleName='description'>
					<p>{{descriptionOne}}</p>

					<p>{{descriptionTwo}}</p>

					<p>{{descriptionTwo}}</p>

					<div styleName='categories'>
						<ul>
							<li>Category One</li>
							<li>Category two</li>
							<li>Category three</li>
						</ul>
					</div>
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

	RecordListing.propTypes = {
		match: PropTypes.shape({
		params: PropTypes.shape({
		id: PropTypes.string
	})
	})
	};

	export default withRouter(RecordListing);
