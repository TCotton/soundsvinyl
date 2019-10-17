const sMap = require('sitemap')
const Page = require('../models/page')
const mcache = require('memory-cache')

module.exports = app => {
	const cache = duration => {
		if (app.get('env') === 'production') {
			return (req, res, next) => {
				let key = '__express__' + req.originalUrl || req.url
				let cachedBody = mcache.get(key)
				if (cachedBody) {
					res.send(cachedBody)
				} else {
					res.sendResponse = res.send
					res.send = body => {
						mcache.put(key, body, duration * 1000)
						res.sendResponse(body)
					}
					next()
				}
			}
		}

		if (app.get('env') === 'development') {
			return (req, res, next) => {
				next()
			}
		}
	}

	let tasks
	let url
	let sitemap

	function addProjects () {
		url = []
		url.push({ url: '/', changefreq: 'monthly', priority: 1.0 })
		url.push({ url: '/about-us', changefreq: 'monthly', priority: 0.5 })
		url.push({ url: '/contact', changefreq: 'monthly', priority: 0.5 })
		url.push({
			url: '/vinyl-singles-top-30-chart',
			changefreq: 'monthly',
			priority: 0.5
		})
		url.push({ url: '/sitemap', changefreq: 'weekly', priority: 0.5 })
		next(null, url)
	}

	function getDataBasePages (url) {
		let hostname

		if (app.get('env') === 'development') {
			hostname = 'https://localhost:3000'
		}

		if (app.get('env') === 'production') {
			hostname = 'https://soundsvinyl.co'
		}

		const query = Page.find({})
		query.exec(function (err, docs) {
			if (!err) {
				Object.keys(docs).forEach(key => {
					const pageURl = `/${docs[Number.parseInt(key)].slug}/${
						docs[Number.parseInt(key)]._id
					}`
					url.push({ url: pageURl, changefreq: 'weekly', priority: 0.7 })
				})

				sitemap = sMap.createSitemap({
					hostname,
					cacheTime: 600000,
					urls: url
				})
			}
		})
	}

	function createSiteLinks () {
		tasks = [addProjects, getDataBasePages]

		next()
	}

	function next (err, result) {
		if (err) throw err

		const currentTask = tasks.shift()

		if (currentTask) {
			currentTask(result)
		}
	}

	createSiteLinks()

	app.get('/sitemap.xml', cache(10), (req, res) => {
		sitemap.toXML((err, xml) => {
			if (err) {
				return res.status(500).end()
			}
			res.header('Content-Type', 'application/xml')
			res.send(xml)
		})
	})
}
