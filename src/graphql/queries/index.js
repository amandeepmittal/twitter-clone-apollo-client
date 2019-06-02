import { gql } from "apollo-boost"

export const QUERY_GET_TWEETS = gql`
	query getTweets {
		getTweets {
			_id
			tweet
			author
			createdAt
		}
	}
`
