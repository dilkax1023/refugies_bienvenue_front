import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
	// labels is title; x-axis=label, y-axis=data
	const data = {
		labels: ['Sexe', 'Age', 'Statut administratif (DA/BPI/DUBLIN)'],
		datasets: [
			{
				label: 'Année 2019',
				data: [5, 3, 4],
				borderColor: ['rgba(255, 206, 86, 0.2)'],
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
			},
			{
				label: 'Année 2020',
				data: [1, 4, 3],
				borderColor: ['rgba(45, 162, 235, 0.2)'],
				backgroundColor: ['rgba(45, 162, 235, 0.2)'],
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
