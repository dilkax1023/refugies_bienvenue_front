import React from "react";
import { Chart } from 'react-charts';
// import Navbar from '../../components/navigation/Navbar';

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Nombre d'hébergeurs dans une année",
        data: [[0, 1], [1, 2]]
      },
      {
        label: "Nombre de désistements qui n'ont pas abouti",
        data: [[0, 3], [1, 1]]
      },
      {
        label: "Durée moyenne des hébergements",
        data: [[3, 6], [4, 4]]
      },
      {
        label: "Nombre des hébergements par personne BPI",
        data: [[3, 6]]
      },
      {
        label: "Nombre de médiations entre hébergés et hébergeurs",
        data: [[0, 3], [2, 5]]
      }
    ],
    []
  )

  const series = React.useMemo (
      () => ({
          type: 'bar'
      }),
      []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { type: 'linear', position: 'bottom', stacked: true }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
        <h1>Hébergement</h1>
      <Chart data={data} series={series} axes={axes} />
    </div>
  )
}


// class StatHebergement extends React.Component {
//   render() {
//     return (
//       <div>
        
//           
        
        
//       </div>
//     );
//   }
// }

// export default StatHebergement;