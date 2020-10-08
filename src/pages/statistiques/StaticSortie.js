import React from 'react';
import DoughnutChart from './chart_component/DoughnutChart';
import './Statistique.css';
// import Navbar from '../../components/navigation/Navbar';

class StaticSortie extends React.Component {
	render() {
		return (
			<div className="chart justify-content-center">
				<DoughnutChart />
			</div>
		);
	}
}

export default StaticSortie;
