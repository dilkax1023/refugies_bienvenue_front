import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
	// labels is title; x-axis=label, y-axis=data
	const data = {
		labels: ['1', '2', '3', '4', '5'],
		datasets: [
			{
				label: "Nombre d'hébergeurs dans une année",
				data: [2999, 1025, 2064],
				borderColor: ['rgba(255, 206, 86, 0.2)'],
				backgroundColor: ['rgba(255, 206, 86, 0.2)'],
				pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
				pointBorderColor: 'rgba(255, 206, 86, 0.2)',
			},
			{
				label: "Nombre des désistements qui n'ont pas abouti",
				data: [1268, 945, 1036],
				borderColor: ['rgba(45, 162, 235, 0.2)'],
				backgroundColor: ['rgba(45, 162, 235, 0.2)'],
				pointBackgroundColor: 'rgba(45, 162, 235, 0.2)',
				pointBorderColor: 'rgba(45, 162, 235, 0.2)',
			},
			{
				label: 'Durée moyenne des hébergements',
				data: [29, 25, 64],
				borderColor: ['rgba(239, 146, 53, 0.2)'],
				backgroundColor: ['rgba(239, 146, 53, 0.2)'],
				pointBackgroundColor: 'rgba(239, 146, 53, 0.2)',
				pointBorderColor: 'rgba(239, 146, 53, 0.2)',
			},
			{
				label: 'Nombre des hébergements par personne BPI',
				data: [129, 425, 364],
				borderColor: ['rgba(53, 239, 103, 0.2)'],
				backgroundColor: ['rgba(53, 239, 103, 0.2)'],
				pointBackgroundColor: 'rgba(53, 239, 103, 0.2)',
				pointBorderColor: 'rgba(53, 239, 103, 0.2)',
			},
			{
				label: 'Nombre de médiations entre hébergés et hébergeurs',
				data: [12, 42, 36],
				borderColor: ['rgba(53, 158, 239, 0.2)'],
				backgroundColor: ['rgba(53, 158, 239, 0.2)'],
				pointBackgroundColor: 'rgba(53, 158, 239, 0.2)',
				pointBorderColor: 'rgba(53, 158, 239, 0.2)',
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: 'Hébergement',
		},
		// scales: {
		// 	yAxes: [
		// 		{
		// 			ticks: {
		// 				min: 0,
		// 				stepSize: 500,
		// 			},
		// 		},
		// 	],
		// },
	};
	return <Line data={data} options={options} />;
}

export default LineChart;
