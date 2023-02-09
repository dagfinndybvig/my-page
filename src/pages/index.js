import React from 'react'
import Layout from '../components/layout'

const listStyles = {
  listStyleType: "none",
  padding: 25
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Make the GET request to the API endpoint
    fetch('https://folk.ntnu.no/dybvig/mypage/respond2.php')
    .then(response => response.json())
    .then(data => {
      const arrayData = Array.isArray(data) ? data : Object.values(data);
      this.setState({ data: arrayData });
      console.log(data)
    });
  }
  

  render() {
    const { data } = this.state;

    // Show a loading message until the data is received
    if (!data) {
      return <div>Loading...</div>;
    }

    // Render the received data
    return (
    <Layout pageTitle="Home">
      <h1>Greetings from</h1>
      <ul style={listStyles}>
 {data.map(d => (<li>{d.navn} the {d.type.toUpperCase()}</li>))} 
      </ul>
    </Layout>
    );
  }
}

export const Head = () => <title>Home</title>
export default IndexPage;
