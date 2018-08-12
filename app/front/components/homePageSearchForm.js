import React from 'react';

/*
import PropTypes from 'prop-types';
import ExtendedPropTypes from 'extended-proptypes';
*/

function HomePageSearchForm () {
	return (
		<div>
			<form className='search-form'>
				<input type="text" ref={(c) => { this.location = c; }} placeholder="Search by category"/>
			</form>
			<div className='search-results'>
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
