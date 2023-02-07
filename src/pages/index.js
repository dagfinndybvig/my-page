import React from 'react';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // Make the GET request to the API endpoint
    fetch('https://folk.ntnu.no/dybvig/mypage/respond.php')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    // Show a loading message until the data is received
    if (!data) {
      return <div>Loading...</div>;
    }

    // Render the received data
    return (
      <div><h1>{data.title}</h1>
      <h2>Greetings from {data.status}</h2></div>
    );
  }
}

export default IndexPage;
