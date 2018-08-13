import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import './recordListing.scss';
/*import MAIN from '../assets/graphics/MAIN_DUMMY_VIDEO_IMAGE.png';
import sine from '../assets/graphics/Sine_wave_placeholder_pic.png';*/
import avatar from '../assets/graphics/Avatar_default_pic.png';
import PropTypes from 'prop-types'

class RecordListing extends React.Component {

	constructor (props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	UNSAFE_componentWillMount() {
		let params = queryString.parse(this.props.location);
		console.dir(typeof this.props.location);

	}

	componentDidMount() {

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
		return (
			<main styleName='recordListing'>
				<header styleName='record'>
					<h2>Al Campbell: Gone Down the Drain</h2>
					<p>(Reggae Road Production, 1978)</p>
				</header>

				<section styleName='videoSineWave'>
					{/* temp markup */}
					<div>
						<img />
						<img />
					</div>
				</section>

				<section styleName='description'>
					<p>Al Campbell is one of the few reggae vocalists from the long Jamaican Golden Era whose re-releases I would
						buy without hesitation. This track, delivered in his usual melodic style, is a curiosity because of
						its unusual lyrics.</p>

					<p>Campbell lists Jamaican Black nationalist figures - Marcus Garvey, Paul Bogle and George Gordon - asking
						‘Do you remember?’ to which he responds ‘They’ve just gone, gone down the drain. When we remember them, they
						are sometimes like teardrops in the rain”</p>

					<p>The message Campbell delivers on this track is a bleak inversion of the classic Rastafarian romanticism.</p>

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
						<img />
							<span styleName='videoCaption'>Video hot mix one</span>
						</div>

						<div styleName='pageUnit'>
							<img />
							<span styleName='videoCaption'>Video hot mix two</span>
						</div>

						<div styleName='pageUnit'>
							<img />
							<span styleName='videoCaption'>Video hot mix three</span>
						</div>

						<div styleName='pageUnit'>
							<img />
							<span styleName='videoCaption'>Video hot mix four</span>
						</div>

					</div>
				</section>
			</main>
		)
	}
}

RecordListing.propTypes = {
	location: PropTypes.object,
};


export default withRouter(RecordListing);
