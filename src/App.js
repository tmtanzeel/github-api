import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/users/tmtanzeel"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          total_repos: json.public_repos
        });
      });
  }

  render() {
    var { isLoaded, total_repos } = this.state;
    if (!isLoaded) return <div>Loading...</div>;
    return (
      <div>
        <ul>
          {
            <li >
              Public repos : {total_repos}
            </li>
          }
        </ul>
      </div>
    );
  }
}

export default App;
