import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
class App extends Component {
    state = { term: '', videos: [] };
    onSubmitForm = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items);
        this.setState({ videos: response.data.items });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmitForm={this.onSubmitForm} />
                i have {this.state.videos.length} videos
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;