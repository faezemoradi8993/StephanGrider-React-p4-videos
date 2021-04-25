import React, { Component } from 'react';
class SearchBar extends Component {
    state = { term: '' }
    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state.term);
        //call app callback function to pass term
        this.props.onSubmitForm(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className='ui field'>
                        <label >
                            Search videos
                        </label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;