import React from "react";
import { Doughnut } from "react-chartjs-2";

class ChartsPage7 extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    }
  }  // Rıdvan Üçdağ
  // linkedin.com/in/ridvanucdag/
  // github.com/ridvanucdag

  render() {
    return (
      <div>
        <h5 className="mt-5" style={{color:"black"}}>Doughnut chart Deneme vb.</h5>
        <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage7;