import React from 'react';
import ReactDOMServer from 'react-dom/server';
import templateFn from './template';
import Main from '../../app/front/main';

export default (req, res) => {
	const html = ReactDOMServer.renderToString(
		<Main />
	);
	const template = templateFn(html);
	res.send(template);
};
