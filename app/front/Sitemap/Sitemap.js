import React, { Component } from 'react'
import './sitemap.scss'
import axios from 'axios'
import { homeURI } from '../../helper_constants'
import SitemapUnorderedList from './SitemapUnorderedList'
import ErrorBoundary from '../errorBoundaries/ErrorBoundary'
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'

export default class Sitemap extends Component {
	constructor (props) {
		super(props)

		this.state = {
			customPages: [],
			error: null,
			pages: []
		}
	}

	componentDidMount () {
		axios
			.get(`${homeURI}/apiV1/page/getall`)
			.then(res => {
				this.setState({
					pages: res.data
				})
			})
			.catch(error => {
				this.setState({
					error: error.toString()
				})
				new Error(error.toString())
			})

		axios
			.get(`${homeURI}/apiV1/page/getTags`)
			.then(res => {
				let anArray = []

				// sorting of categories takes place at the API level with the use of aggregate
				// and then here to place the categories in a readable, clickable order

				res.data.forEach(element => {
					anArray.push(element._id.name)
				})

				const group = groupBy(anArray)
				const pairs = sortBy(group)

				this.setState({
					customPages: pairs
				})
			})
			.catch(error => {
				this.setState({
					error: error.toString()
				})
				new Error(error.toString())
			})
	}

	render () {
		const { error, pages, customPages } = this.state
		const $sitemap = 'Sitemap'
		const $Categories = 'Categories'
		const $Tracks = 'Tracks'

		return (
			<main styleName='sitemap'>
				<h3>{$sitemap}</h3>
				<section>
					{error && <p>{error}</p>}
					{!error && <h4>{$Categories}</h4>}
					{!error && (
						<ErrorBoundary>
							<SitemapUnorderedList categories data={customPages} />
						</ErrorBoundary>
					)}
					{!error && <h4>{$Tracks}</h4>}
					{!error && (
						<ErrorBoundary>
							<SitemapUnorderedList data={pages} />
						</ErrorBoundary>
					)}
				</section>
			</main>
		)
	}
}
