import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from "./searchBar";
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "o5fqE6YTl9hvi"
    };
  }

  selection = (newId) => {
    this.setState({ selectedGifId: newId });
  }

  search = (query) => {
    giphy({ apiKey: 'CwrSxZ7PQ7uRhEvfXiVD412dFsxctPjB' }).search(
      { q: query,
        rating: 'g',
        limit: "10",
      }, (err, res) => {
        this.setState({ gifs: res.data });
      }
    );
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selection={this.selection} />
        </div>
      </div>
    );
  }
}

export default App;
