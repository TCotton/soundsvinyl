import React, { Component } from 'react';
import './comment.scss';

export default class CommentsPolicy extends Component {

	constructor ( props ) {
		super( props );
	}

	render () {

		return (
			<section styleName='commentsPolicy'>
				<h2>
					{'Comment policy'}
				</h2>
				<p>
					{'In the spring of 1976, Eric Clapton, Britain’s leading Blues proponent, gav a speech on a gig platform so racist it ignited mass-scale anti-racist movements, the Anti-Nazi League (ANL) and Rock and Racism (RAR).'}
				</p>
				<p>
					{'His speech was violence without punches: "Vote for Enoch Powell... I think Enoch\'s right, I think we should send them all back. Stop Britain from becoming a black colony. Get the foreigners out. Get the wogs out. Get the coons out. Keep Britain white.".'}
				</p>
				<p>
					{'To this day, he has never satisfactorily his actions at that gig in Birmingham'}
				</p>
				<p>
					{' Black music, for him, was acceptable to financially exploit, but stopped at inviting Black musicians to be neighbours on the same street.'}
				</p>
				<p>
					{' The language of xenophobia, revolting now as then, is not welcome on the scene, and that includes this site, SoundsVinyl.'}
				</p>
				<p>
					{' No racism, sexism, homophobia or any form of xenophobia will be tolerated in the comments section of this site. No ifs, no buts, kick out it out.'}
				</p>
			</section>
		);
	}
}
