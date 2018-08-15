import moment from 'moment';

export const findRootElement = () => {
	if (!document.getElementById('root')) {
		document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>');
	}
}

// find first part of email address up until @ character and remove all special characters and add creation date
export const createUsername = (emailAddress, date = moment(Date.now()).format('YYDoMMM')) => {
	return emailAddress.substring(0, emailAddress.indexOf('@')).replace(/[^a-zA-Z]/g, '') + '_' + date;
}
