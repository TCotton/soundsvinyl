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
					Comment policy
				</h2>
				<p>
					In the spring of 1976, Eric Clapton, Britain’s leading Blues guitarist, gave a speech from the platform at a gig in Birmingham that was so inflammatory it directly led to the creation of the anti-racist organisations the Anti-Nazi League (ANL) and Rock Against Racism (RAR).
				</p>
				<p>
					His speech was a violent verbal assault on black people: "Vote for Enoch Powell... I think Enoch’s right, I think we should send them all back. Stop Britain from becoming a black colony. Get the foreigners out. Get the wogs out. Get the coons out. Keep Britain white."
				</p>
				<p>
					He later expressed regret, but, to this day, he has never (in my opinion) given a satisfactory explanation for his actions on that night.
				</p>
				<p>
					For him, it was acceptable to financially exploit black music, but he stopped at inviting black musicians to be neighbours on the same street.
				</p>
				<p>
					The language of xenophobia, as revolting then as it is now, is still not welcome on the scene, and it is not welcome on this site, SoundsVinyl.
				</p>
				<p>
					No racism, sexism, homophobia, transphobia or any form of bigotry will be tolerated in the comments section.
				</p>
			</section>
		);
	}
}
