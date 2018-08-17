import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
			videoLink: String,
			descriptionOne: String,
			descriptionTwo: String,
			descriptionThree: String,
			categories: Array,
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
		const disabled = true;

		const warningMessage = 'Your browser doesn\'t support HTML5 video. Here is a <a href={videoLink}>link to the video</a> instead.';

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

						<h2 className={(title ? 'display' : 'hide')}>{title}</h2>
						<p className={(subTitle ? 'display' : 'hide')}>{subTitle}</p>

					</header>

					<section styleName='videoSineWave'>

						<div className='videoContainer'>
							<video controls width='100%'>
								<source src={videoLink} type='video/mp4'/>
								<p dangerouslySetInnerHTML={warningMessage}></p>
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

							<textarea cols='10' rows='10' id='commentsMessage' name='commentsMessage' maxLength='500' value=''/>
							<input type='submit' name='submit' value='Comment' disabled={disabled}/>

						</form>
					</section>

					<section styleName='commentsBlock'>

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
