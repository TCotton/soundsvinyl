import moment from 'moment';

export const findRootElement = () => {
	if (!document.getElementById('root')) {
		document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>');
	}
}

// find first part of email address up until @ character, remove all special characters and add specially formatted creation date
export const createUsername = (emailAddress, date = moment(Date.now()).format('DoMMMYY')) => {
	return emailAddress.substring(0, emailAddress.indexOf('@')).replace(/[^a-zA-Z]/g, '') + '_' + date;
}

export const getCookieValue = function (a) {
	const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}
