import React from 'react';
import BarChart from './chart_component/BarChart';
// // import Navbar from '../../components/navigation/Navbar';

class StaticSuivi extends React.Component {
	render() {
		return (
			<div className="chart justify-content-center">
				<BarChart />
			</div>
		);
	}
}

export default StaticSuivi;

// function MyChart() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: "Sexe",
//         data: [[0, 1], [1, 2]]
//       },
//       {
//         label: "Age",
//         data: [[0, 3], [1, 1]]
//       },
//       {
//         label: "Statut administratif (DA/BPI/DUBLIN)",
//         data: [[3, 6], [4, 4]]
//       },
//       {
//         label: "Pourcentage de personne en formation/travail",
//         data: [[3, 6], [4, 4]]
//       },
//       {
//         label: "Pourcentage d'accés au logement (privé/d'urgence/social)",
//         data: [[0, 3], [2, 5]]
//       }
//     ],
//     []
// )

const series = React.useMemo(
	() => ({
		type: 'bar',
	}),
	[]
);

const axes = React.useMemo(
	() => [
		{ primary: true, type: 'ordinal', position: 'left' },
		{ type: 'linear', position: 'bottom', stacked: true },
	],
	[]
);

const lineChart = (
	// A react-chart hyper-responsively and continuously fills the available
	// space of its parent element automatically
	<div
		style={{
			width: '400px',
			height: '300px',
		}}
	>
		<h1>Les Suivis</h1>
		<Chart data={data} series={series} axes={axes} />
	</div>
);
