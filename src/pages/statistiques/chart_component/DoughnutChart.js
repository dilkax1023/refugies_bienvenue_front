import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
	const data = {
		labels: ['Avec RB', 'Sans RB'],
		datasets: [
			{
				label: 'Année 2020',
				data: [4.35, 2.5],
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(255, 205, 86, 1)',
				],
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: "Période d'accompagnement par RB",
		},
	};

	return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
