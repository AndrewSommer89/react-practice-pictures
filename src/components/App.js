import React from 'react';
import SearchBar from './SearchBar';
import unsplash from "../api/unsplash"
import ImageList from "./ImageList"

class App extends React.Component {
// Intialize the state
    state = { images: [] };

// Function that is passed down to "SearchBar"
// Will fire when "SearchBar" input is submitted
    onSearchSubmit = async (term) => {
    // Make a get request to "unsplash" url
        const response = await unsplash.get('/search/photos',{
        // Must include query param that includes search term we want to use
        // Specifies different query string paramaters we want to add to the request
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'} }>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;