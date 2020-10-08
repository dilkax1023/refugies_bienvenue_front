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
