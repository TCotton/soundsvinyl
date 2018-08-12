import React from 'react';
import axios from 'axios';
import './categoriesHomepage.scss';
import { homeURI } from '../helper_constants';
import Cookies from 'universal-cookie';
import moment from 'moment';
import pageUnit from './components/pageUnit';

class CategoriesHomepage extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			pages: [],
			error: null,
			requestCompleted: false,
		};
	}

	componentDidMount () {

		axios.get(`${homeURI}/apiV1/page/get`)
			.then(res => {

				if (res.data.error) {
					this.setState({error: res.data.error});
				}

				this.setState({
					requestCompleted: true,
					pages: res.data,
				});
			});
	}

	render () {

		const webForm = `<form class='search-form'>
			<input type="text" ref="location" placeholder="Search by category"/>
		</form>
		<div class='search-results'>
</div>`;

		const requestCompleted = this.state.requestCompleted;
		let arrayMap;

		if (requestCompleted) {
			const pageList = this.state.pages;
			arrayMap = pageList.map((element, index) => {

				return (
					<div key={index}>
						{
							index !== 2 ? pageUnit(element) :
								<div key={index.toString()} dangerouslySetInnerHTML={{__html: webForm}}/>
						}
					</div>
				)
			});
		}

		return (
			<main styleName='categories'>
				<h3>All categories</h3>
				<section>
					{arrayMap}
				</section>
			</main>
		)
	}
}

export default CategoriesHomepage;
