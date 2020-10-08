import React from 'react';
import LineChart from './chart_component/LineChart';
import './Statistique.css';
// import Navbar from '../../components/navigation/Navbar';

class StaticHebergement extends React.Component {
	render() {
		return (
			<div className="chart justify-content-center">
				<LineChart />
			</div>
		);
	}
}

export default StaticHebergement;
