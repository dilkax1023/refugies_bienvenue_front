import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
	constructor() {
		super();
		this.state = {
			time: moment().format('LT'),
			one: true,
			two: true,
		};
	}
	componentDidMount() {
		this.intervalId = setInterval(() => {
			if (this.state.one) {
				this.setState({
					time: moment().format('LT'),
				});
			}
			if (this.state.two && this.props.left) {
				this.setState({
					time: moment().format('Do MMMM YY'),
				});
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		const style = 'py-2 mb-0 text-light pl-3 text-left';
		return (
			<div id="clock">
				<h5
					className={
						this.props.left
							? style
							: 'py-2 mb-0 pr-3 text-right text-light'
					}
				>
					{this.state.time}
				</h5>
			</div>
		);
	}
}

export default Clock;
