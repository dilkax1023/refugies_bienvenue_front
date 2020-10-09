import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
	// labels is title; x-axis=label, y-axis=data
	const data = {
		labels: ['Sexe', 'Age', 'Statut administratif (DA/BPI/DUBLIN)'],
		datasets: [
			{
				label: 'F',
				data: [3.6, 2.1, 3.4],
				borderColor: ['rgba(239, 146, 53, 0.5)'],
				backgroundColor: [
					'rgba(239, 146, 53, 0.5)',
					'rgba(255, 205, 86, 0.5)',
				],
			},
			{
				label: 'M',
				data: [4, 3.75, 2.65],
				borderColor: ['rgba(45, 162, 235, 0.5)'],
				backgroundColor: [
					'rgba(45, 162, 235, 0.5)',
					'rgba(89, 229, 145, 0.5)',
					'rgba(110, 104, 104, 0.5)',
				],
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Suivi',
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						// stepSize: 500,
					},
				},
			],
		},
	};
	return <Bar data={data} options={options} />;
}

export default BarChart;
