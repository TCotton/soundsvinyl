import React from 'react';

/*
import PropTypes from 'prop-types';
import ExtendedPropTypes from 'extended-proptypes';
*/

function HomePageSearchForm () {
	// ref={(c) => { this.location = c; }}
	return (
		<div>
			<form className='search-form'>
				<input type="text" placeholder="Search by category" disabled/>
			</form>
			<div className='search-results'>
				<span>Search facility coming soon...</span>
			</div>
		</div>
	);
}

/*HomePageSearchForm.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	shortSlug: PropTypes.string.isRequired,
	_id: ExtendedPropTypes.mongoId.isRequired,
};*/

export default HomePageSearchForm;
