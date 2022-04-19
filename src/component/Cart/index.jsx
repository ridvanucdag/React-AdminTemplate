import React from 'react'
import ChartsPage1 from './IChartsBar/ChartBar1'
import ChartsPage2 from './IChartsBar/ChartBar2'
import ChartsPage7 from './IChartsBar/ChartBar7'
import ChartsPage8 from './IChartsBar/ChartBar8'

function index() {
    // Rıdvan Üçdağ
    // linkedin.com/in/ridvanucdag/
    // github.com/ridvanucdag
    return (
        <div className="container-wrap">
            <div className="row">
                <div className="col-4"><ChartsPage1 /></div>
                <div className="col-4"><ChartsPage2 /></div>
                <div className="col-4"><ChartsPage7 /></div>
            </div>
            <div className="row">
                <div className="col-sm-4"><ChartsPage7 /></div>
                <div className="col-sm-4"><ChartsPage8 /></div>
                <div className="col-sm-4"><ChartsPage1 /></div>
            </div>
            <div className="row">
                <div className="col-sm-4"><ChartsPage2 /></div>
                <div className="col-sm-4"><ChartsPage7 /></div>
                <div className="col-sm-4"><ChartsPage8 /></div>
            </div>
        </div>
    )
}

export default index