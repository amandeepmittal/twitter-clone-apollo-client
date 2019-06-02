import React, { Component } from "react"
import Mutation from "./Mutation"
import { MUTATION_CREATE_TWEET } from "../graphql/mutations"
import { QUERY_GET_TWEETS } from "../graphql/queries"
const Avatar = "https://api.adorable.io/avatars/190/abott@adorable.png"

class CreateTweet extends Component {
	state = {
		tweet: ""
	}

	handleChange = e => {
		const {
			target: { value }
		} = e

		this.setState({
			tweet: value
		})
	}

	handleSubmit = mutation => {
		const tweet = this.state.tweet
		const author = "@amanhimself"

		mutation({
			variables: {
				tweet,
				author
			}
		})
	}

	render() {
		return (
			<Mutation
				mutation={MUTATION_CREATE_TWEET}
				query={QUERY_GET_TWEETS}
				onCompleted={() => {
					this.setState({
						tweet: ""
					})
				}}
			>
				{createTweet => (
					<div className='createTweet'>
						<header>Write a new Tweet</header>

						<section>
							<img src={Avatar} alt='avatar' />

							<textarea
								placeholder='Write your tweet here...'
								value={this.state.tweet}
								onChange={this.handleChange}
							/>
						</section>

						<div className='publish'>
							<button
								onClick={() => {
									this.handleSubmit(createTweet)
								}}
							>
								Tweet
							</button>
						</div>
					</div>
				)}
			</Mutation>
		)
	}
}

export default CreateTweet
