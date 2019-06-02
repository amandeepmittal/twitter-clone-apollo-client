import React from "react"
import Tweet from "./Tweet"
import CreateTweet from "./CreateTweet"
import Query from "./Query"
import { QUERY_GET_TWEETS } from "../graphql/queries"
import "./Tweets.css"

class Tweets extends React.Component {
	render() {
		return (
			<div className='tweets'>
				<CreateTweet />
				<Query query={QUERY_GET_TWEETS} render={Tweet} />
			</div>
		)
	}
}

export default Tweets
