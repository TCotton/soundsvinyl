import React, { Component } from 'react'
import './comment.scss'

export default class CommentsPolicy extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		const $comment = 'Comment policy'
		const $inTheSpringof1976 =
			'In the spring of 1976, Eric Clapton, Britain’s leading Blues guitarist, gave a speech from the platform at a gig in Birmingham that was so inflammatory it directly led to the creation of the anti-racist organisations the Anti-Nazi League (ANL) and Rock Against Racism (RAR) '
		const $hisSpeechWasAViolent =
			'His speech was a violent verbal assault on black people: "Vote for Enoch Powell... I think Enoch’s right, I think we should send them all back. Stop Britain from becoming a black colony. Get the foreigners out. Get the wogs out. Get the coons out. Keep Britain white."'
		const $heLaterExlained =
			'He later expressed regret, but, to this day, he has never (in my opinion) given a satisfactory explanation for his actions on that night.'
		const $forHim =
			'For him, it was acceptable to financially exploit black music, but he stopped at inviting black musicians to be neighbours on the same street.'
		const $TheLanguageofXeonphobia =
			'The language of xenophobia, as revolting then as it is now, is still not welcome on the scene, and it is not welcome on this site, SoundsVinyl.'
		const $noRacism =
			'No racism, sexism, homophobia, transphobia or any form of bigotry will be tolerated in the comments section.'

		return (
			<section styleName='commentsPolicy'>
				<h2>
					{$comment}
				</h2>
				<p>
					{$inTheSpringof1976}
				</p>
				<p>
					{$hisSpeechWasAViolent}
				</p>
				<p>
					{$heLaterExlained}
				</p>
				<p>
					{$forHim}
				</p>
				<p>
					{$TheLanguageofXeonphobia}
				</p>
				<p>
					{$noRacism}
				</p>
			</section>
		)
	}
}
