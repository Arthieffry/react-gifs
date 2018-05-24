import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  listGif = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} selection={this.props.selection} />);
  }
  render() {
    return (
      <div className="gif-list">
        {this.listGif()}
      </div>
    );
  }
}

export default GifList;
