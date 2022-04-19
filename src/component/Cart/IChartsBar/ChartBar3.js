import React from "react";
import { Radar } from "react-chartjs-2";


class ChartsPage3 extends React.Component {
  state = {
    dataRadar: {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(194, 116, 161, 0.5)",
          borderColor: "rgb(194, 116, 161)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(71, 225, 167, 0.5)",
          borderColor: "rgb(71, 225, 167)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }

  }

  // Rıdvan Üçdağ
  // linkedin.com/in/ridvanucdag/
  // github.com/ridvanucdag
  render() {
    return (
      <div>
        <h5 className="mt-5" style={{color:"black"}}>Radar chart Deneme vb.</h5>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage3;