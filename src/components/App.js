import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
class App extends React.Component{
  
  onTermSubmit=async(term)=>{
      const searchresponse=await youtube.get('/search',{
        q:term
      });
      console.log(searchresponse);
  };
  render(){ 
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
    </div>
  );
}
}

export default App;