import React, { Component } from 'react'
import './vinylCharts.scss'

class VinylCharts extends Component {
	render () {
		const $current = 'Current top 30 vinyl singles charts'
		const $comingSoon = 'Coming soon'
		return (
			<main styleName='vinylCharts'>
				<h3>
					{$current}
				</h3>
				<section>
					<p>
						{$comingSoon}
					</p>
				</section>
			</main>
		)
	}
}

export default VinylCharts
