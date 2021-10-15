import React from "react";

export default class FetchBitcoin extends React.Component {
  state = {
    loading: true,
    quote: null
  };

  async componentDidMount() {
    const url = "https://api2.binance.com/api/v3/ticker/24hr";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data[11].lastPrice, loading: false });
    console.log(data[11].lastPrice);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.quote) {
      return <div>didn't get a quote</div>;
    }

    return (
      <div>
        <h2 className="textColor headers">Office Api Quote Generator</h2>
        <div className="textColor">{this.state.quote}</div>
      </div>
    );
  }
}