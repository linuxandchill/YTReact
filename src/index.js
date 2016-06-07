import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search'; 
import SearchBar from './components/SearchBar'; 
import VideoList from  './components/VideoList'; 
const API_KEY = 'AIzaSyDk7_RqQ_zY1ghsdFmKkalKFxlUXQmnEXo'; 


class App extends Component {
  constructor(props){
    super(props); 

    this.state ={ videos: [] }; 

    YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
      //this is our chance to update state
      this.setState({ videos: videos });  
    });
  }

  render(){
    return  (
      <div> 
        <SearchBar /> 
        <VideoList videos={this.state.videos} /> 
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 
