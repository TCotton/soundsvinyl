import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './disqus.scss'

const Shortname = 'soundsvinyl'
const Website_URL = 'https://soundsvinyl.co'
const doc = document
const win = window

function renderDisqus () {
	if (win.DISQUS === undefined) {
		const script = doc.createElement('script')
		script.async = true
		script.id = 'disqus-script'
		script.src = `https://${Shortname}.disqus.com/embed.js`
		doc.getElementsByTagName('head')[0].appendChild(script)
	} else {
		win.DISQUS.reset({ reload: true })
	}
}

export default class Disqus extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}

	componentDidMount () {
		renderDisqus()
	}

	shouldComponentUpdate (nextProps) {
		const { id, title, path } = nextProps

		return id || title || path
	}

	componentWillUnmount () {
		if (doc.getElementById('disqus-script')) {
			const script = doc.getElementById('disqus-script')
			script.parentNode.removeChild(script)
		}
	}

	render () {
		let { id, title, path, ...other } = this.props

		if (process.env.BROWSER) {
			win.disqus_shortname = Shortname
			win.disqus_identifier = id
			win.disqus_title = title
			win.disqus_url = Website_URL + path
		}

		return <div {...other} id='disqus_thread' />
	}
}
