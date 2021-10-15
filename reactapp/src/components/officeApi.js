import React from "react";

export default class FetchRandomQuote extends React.Component {
  state = {
    loading: true,
    quote: null
  };

  async componentDidMount() {
    const url = "https://www.officeapi.dev/api/quotes/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data.data.content, loading: false });
    console.log(data.data.content);
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