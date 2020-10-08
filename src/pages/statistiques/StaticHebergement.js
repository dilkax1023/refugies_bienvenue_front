import React from 'react';
import LineChart from './chart_component/LineChart';
import './StaticHebergement.css';
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

// function MyChart() {
// 	const data = React.useMemo(
// 		() => [
// 			{
// 				label: 'Durée moyenne des hébergements',
// 				data: [
// 					[3, 6],
// 					[4, 4],
// 				],
// 			},
// 			{
// 				label: 'Nombre des hébergements par personne BPI',
// 				data: [[3, 6]],
// 			},
// 			{
// 				label: 'Nombre de médiations entre hébergés et hébergeurs',
// 				data: [
// 					[0, 3],
// 					[2, 5],
// 				],
// 			},
// 		],
// 		[]
// 	);

// 	const series = React.useMemo(
// 		() => ({
// 			type: 'bar',
// 		}),
// 		[]
// 	);

// 	const axes = React.useMemo(
// 		() => [
// 			{ primary: true, type: 'ordinal', position: 'left' },
// 			{ type: 'linear', position: 'bottom', stacked: true },
// 		],
// 		[]
// 	);

// 	const lineChart = (
// 		// A react-chart hyper-responsively and continuously fills the available
// 		// space of its parent element automatically
// 		<div
// 			style={{
// 				width: '400px',
// 				height: '300px',
// 			}}>
// 			<h1>Hébergement</h1>
// 			<Chart data={data} series={series} axes={axes} />
// 		</div>
// 	);
// }
