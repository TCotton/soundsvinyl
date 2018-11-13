import React, { Component } from 'react';
import Disqus from 'disqus-react';
import './disqus.scss';

class Disqus extends Component {

	render() {
		const disqusShortname = 'example';
		const disqusConfig = {
			url: this.props.article.url,
			identifier: this.props.article.id,
			title: this.props.article.title,
		};

		return (
			<div className="article">
				<h1>{this.props.article.title}</h1>
				<Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
					Comments
				</Disqus.CommentCount>
				<p>{this.props.article.body}</p>
				<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
			</div>
		);
	}
}

export default Disqus;
