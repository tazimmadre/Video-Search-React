import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], onVideoSelect: null };

  componentDidMount(){
    this.onTermSubmit('trending');
  }

  onTermSubmit = async (term) => {
    const searchresponse = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: searchresponse.data.items,onVideoSelect:searchresponse.data.items[0] });
    console.log(this.state.videos);
  };
  onVideoSelect = (video) => {
    console.log("From the App", video);
    this.setState({ onVideoSelect: video });
  };
  render() {
    return (
      <div className="main-div ui container">
        <SearchBar className="searchbar" onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
          <div className="eleven wide column">
          <VideoDetail
            className="videodetail"
            video={this.state.onVideoSelect}
          />
          </div>
          <div className="five wide column">
          <VideoList
            className="videolist"
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
