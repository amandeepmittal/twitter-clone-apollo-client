import React, { Component } from "react"
import Mutation from "./Mutation"
import { MUTATION_DELETE_TWEET } from "../graphql/mutations"
import { QUERY_GET_TWEETS } from "../graphql/queries"
import TwitterLogo from "../assets/twitter.svg"

const Avatar = "https://api.adorable.io/avatars/190/abott@adorable.png"

class Tweet extends Component {
	handleDeleteTweet = (mutation, _id) => {
		mutation({
			variables: {
				_id
			}
		})
	}

	render() {
		const {
			data: { getTweets: tweets }
		} = this.props

		return tweets.map(({ _id, tweet, author }) => (
			<div className='tweet' key={`tweet-${_id}`}>
				<div className='author'>
					<img src={Avatar} alt='avatar' />
					<strong>{author}</strong>
				</div>

				<div className='content'>
					<div className='twitter-logo'>
						<img src={TwitterLogo} alt='Twitter' />
					</div>
					{tweet}
				</div>
				<Mutation mutation={MUTATION_DELETE_TWEET} query={QUERY_GET_TWEETS}>
					{deleteTweet => (
						<div
							className='delete'
							onClick={() => {
								this.handleDeleteTweet(deleteTweet, _id)
							}}
						>
							<span>Delete Tweet</span>
						</div>
					)}
				</Mutation>
			</div>
		))
	}
}

export default Tweet
