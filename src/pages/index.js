import React from 'react';
import { Link } from 'gatsby'

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
      <main>
        
      <h1>Greetings from</h1>
      <Link to="/about">About</Link>
      <ul style={listStyles}>
 {data.map(d => (<li>{d.navn} the {d.type}</li>))} 
      </ul>
     </main>
    );
  }
}

export const Head = () => <title>Toys</title>
export default IndexPage;
