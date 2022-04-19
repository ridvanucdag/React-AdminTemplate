import React from 'react';
import { Bubble } from 'react-chartjs-2';

class ChartsPage8 extends React.Component {
  state = {
    dataBubble: {
      labels: 'Bubble',
      datasets: [
        {
          label: 'John',
          data: [
            {
              x: 3,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: '#ff6384',
          hoverBackgroundColor: '#ff6384'
        },
        {
          label: 'Peter',
          data: [
            {
              x: 3.2,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: '#44e4ee',
          hoverBackgroundColor: '#44e4ee'
        },
        {
          label: 'Donald',
          data: [
            {
              x: 3.4,
              y: 7,
              r: 10
            }
          ],
          backgroundColor: '#62088A',
          hoverBackgroundColor: '#62088A'
        }
      ]
    }
  };
  // Rıdvan Üçdağ
  // linkedin.com/in/ridvanucdag/
  // github.com/ridvanucdag
  render() {
    return (
      <div>
        <h5 className='mt-5' style={{color:"black"}}>Bar chart Deneme vb.</h5>
        <Bubble data={this.state.dataBubble} options={{ responsive: true }} />
      </div>
    );
  }
}

export default ChartsPage8;