import React from 'react';
import PropTypes from 'prop-types';
import './videoErrorBoundary.scss';

class VideoErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch() {
		// Display fallback UI
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <p styleName='videoErrorBoundary'>Something went wrong.</p>;
		}
		return this.props.children;
	}
}

VideoErrorBoundary.propTypes = {
	children: PropTypes.element.isRequired
}

export default VideoErrorBoundary;
