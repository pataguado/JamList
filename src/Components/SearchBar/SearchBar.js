import React from 'react';
import './SearchBar.css';
import logo from './logo.png'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    search(){
        this.props.onSearch(this.state.term)
    }

    handleTermChange(event){
        this.setState({term: event.target.value})
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.onSearch(this.state.term);
        }
      }
    render(){
        return (
            
           
            <div className="SearchBar">
                <img src={logo} alt="logo"></img>
                <h2>Create and manage your Spotify playlists</h2>
                <input placeholder="Enter A Song, Album, or Artist" 
                onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
            
        )
    }

}

export default SearchBar;
