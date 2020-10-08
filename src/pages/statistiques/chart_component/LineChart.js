import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
	// labels are the propierties;
	const data = {
		labels: 'Hébergeurs',
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
		],
	};
	return <Line data={data} />;
}

export default LineChart;
