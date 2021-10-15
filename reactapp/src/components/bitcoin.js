import React from "react";

export default class FetchBitcoin extends React.Component {
  state = {
    loading: true,
    price: null
  };

  async componentDidMount() {
    const url = "https://api2.binance.com/api/v3/ticker/24hr";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ price: data[11].weightedAvgPrice, loading: false });
    console.log(data[11]);
  }

  render() {
    if (this.state.loading) {
      return <div>one moment please...</div>;
    }

    if (!this.state.price) {
      return <div>didn't get a price</div>;
    }

    return (
      <div>
        <h2 className="textColor headers">Bitcoin's Last Price</h2>
        <div className="big">{this.state.price}</div>
      </div>
    );
  }
}