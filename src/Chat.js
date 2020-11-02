import React, { Component } from 'react';
import iconMini from './minimize icon.svg';

class Chat extends Component {
	render() {
		return (
			<div className="chatFrame">
				<button className="miniBtn" onClick={this.props.handleClick}><img src={iconMini} className="iconMiniBtn" alt="Minimize Icon" /></button>
				<iframe title="talkabotChat" src="https://talkabot.id">
					<p>Browser does not support iframe.</p>
				</iframe>
			</div>
		);
	}
}

export default Chat;