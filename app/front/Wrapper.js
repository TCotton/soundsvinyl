/* eslint-disable react/jsx-no-bind */
import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Navigation/Nav'
import ErrorBoundary from './errorBoundaries/ErrorBoundary'

const RecordListing = lazy(() => import('./recordListing'))
const Contact = lazy(() => import('./Contact/Contact'))
const AboutUs = lazy(() => import('./about'))
const MyAccount = lazy(() => import('./Account/MyAccount'))
const VinylCharts = lazy(() => import('./vinylCharts'))
const CommentsPolicy = lazy(() => import('./Comments/CommentsPolicy'))
const Sitemap = lazy(() => import('./Sitemap/Sitemap'))
const Main = lazy(() => import('./main'))
const Error = lazy(() => import('./error'))
const Footer = lazy(() => import('./Footer/Footer'))

class Wrapper extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		const $loading = 'Loading...'

		return (
			<div className='wrapper'>
				<ErrorBoundary>
					<Nav />
				</ErrorBoundary>
				<Suspense
					fallback={
						<div>
							{$loading}
						</div>
					}
				>
					<Switch>
						<Route
							exact
							path='/'
							render={() => <Main />}
						/>
						<Route
							component={() => <Main />}
							exact
							path='/category/:tag'
						/>
						<Route
							component={() => <RecordListing />}
							exact
							path='/:slug/:id'
						/>
						<Route
							component={() => <Contact />}
							exact
							path='/contact'
						/>
						<Route
							component={() => <AboutUs />}
							exact
							path='/about-us'
						/>
						<Route
							component={() => <MyAccount />}
							exact
							path='/my-account'
						/>
						<Route
							component={() => <VinylCharts />}
							exact
							path='/vinyl-singles-top-30-chart'
						/>
						<Route
							component={() => <CommentsPolicy />}
							exact
							path='/comments-policy'
						/>
						<Route
							component={() => <Sitemap />}
							exact
							path='/sitemap'
						/>
						<Route
							component={() => <Error />}
							path=''
						/>
					</Switch>
				</Suspense>
				<ErrorBoundary>
					<Suspense
						fallback={
							<div>
								{$loading}
							</div>
						}
					>
						<Footer />
					</Suspense>
				</ErrorBoundary>
			</div>
		)
	}
}

export default Wrapper
