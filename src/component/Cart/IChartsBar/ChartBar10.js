import React from "react";
import { Pie } from "react-chartjs-2";

class ChartsPage10 extends React.Component {
  state = {
    dataPie: {
      labels: ["Laptop", "Mouse", "Telefon", "Kulaklık", "Tablet", "Kamera", "Yazıcı", "Monitör", "Kasa", "Televizyon"],
      datasets: [
        {
          data: [200, 50, 100, 40, 120, 50, 100, 40, 120, 50],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD",
            "#949FB1",
            "#4D5360",
            "#AC64AD",
            "#949FB1"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
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
        <h5 className="mt-5" style={{color:"black"}}>En çok tercih edilen 10 farklı ürün kategorisi</h5>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage10;