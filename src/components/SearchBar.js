import React from 'react';

class SearchBar extends React.Component{
    state = { term: ''};

//Whenever form is submitted this function will run
    onFormSubmit = (event)=> {
    //When submitting do not refresh the page
        event.preventDefault();
    //Refers to the function you passed in through props from "App"
        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;