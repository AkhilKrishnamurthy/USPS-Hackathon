import React, { Component } from "react";
import Chart from "./ChartPage";
class ChartLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }
  componentWillMount() {
    this.setState({
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Safety Score",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(0, 123, 182, 0.8)",
              "rgba(236, 85, 85, 0.8)",
              "rgba(124,252,0, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(15, 159, 64, 0.8)",
              "rgba(15, 99, 132, 0.8)"
            ]
          }
        ]
      }
    });

  }
  getChartData() {
    // Ajax calls here
    
  }
  render() {
    return (
      <div className="chartPage">
      <nav className="navbar navbar-dark">
      <div className="header center-content pad-1-pc">
                <span><img className="header-img" src="https://www.evrent.co.uk/images/home_icon.png"/></span>
                <span className="">Safety Quotient Predictor</span>
            </div>
      </nav>
        {/* <h2>SAFETY SCORE ANALYSIS</h2> */}
        <div className = "chartPageTop">
        {/* <h3>Summary</h3> */}
        <span className = "ScoreDisplay">SUMMARY </span>
        {/* <span className = "safetyScoreDisplay">  Your Safery Score</span> */}
        <br/>
        <br/>
        <br/>
        <Chart className=""
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
        </div>
        <br/>
        <br/>
        <div className = "chartPageBottom chartPageTop">
        <Chart className="chartPage"
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
        </div>
      </div>
    );
  }
}

export default ChartLanding;
