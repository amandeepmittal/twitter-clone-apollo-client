import { gql } from "apollo-boost"

export const MUTATION_CREATE_TWEET = gql`
	mutation createTweet($tweet: String, $author: String) {
		createTweet(tweet: $tweet, author: $author) {
			_id
			tweet
			author
		}
	}
`

export const MUTATION_DELETE_TWEET = gql`
	mutation deleteTweet($_id: String) {
		deleteTweet(_id: $_id) {
			_id
			tweet
			author
		}
	}
`
