import React from "react";
import { Pie } from "react-chartjs-2";

class ChartsPage1 extends React.Component {
  state = {
    dataPie: {
      labels: ["Google", "Yandex", "Youtube", "Facebook", "İnstagram"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
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
        <h5 className="mt-5" style={{color:"black"}}>Hangi sitelerden trafik çekiyoruz</h5>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage1;