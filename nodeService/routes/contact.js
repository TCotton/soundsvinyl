const fs = require('fs')

if (!fs.existsSync('log')) {
	fs.mkdirSync('log')
}
const postmarkapp = process.env.postmark
const postmark = require('postmark')
const client = new postmark.Client(postmarkapp)
const winston = require('winston')

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'contact.log' })
	],
	exitOnError: false // do not exit on handled exceptions
})

module.exports = app => {
	app.post('/apiV1/sendmail', (req, res) => {
		const ipAddress =
			req.headers['x-forwarded-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress

		const message =
			req.body.message +
			'<br>' +
			'IP Address: ' +
			ipAddress +
			'<br>' +
			'Sender email address: ' +
			req.body.email

		client.sendEmail(
			{
				From: 'me@andywalpole.me',
				To: 'me@andywalpole.me',
				Subject: 'Contact from SoundsVinyl',
				HtmlBody: message
			},
			function (error) {
				if (error) {
					logger.log(
						'info',
						'Unable to send (content form notification) via postmark: ' +
							error.message
					)

					res.json({
						success: true,
						message:
							'There has been a problem sending this email. The administrators have been informed'
					})
					return
				}

				res.json({
					success: true,
					message:
						'Thank you for taking the time to fill out the form. We will contact you as soon as we can can!'
				})
			}
		)
	})
}
