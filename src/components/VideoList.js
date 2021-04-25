import React from 'react';
import VideoItem from './VideoItem';
const VideoList = (props) => {
    console.log(props.videos)
    return (
        <div>
            {props.videos.map(x => {
                return <VideoItem src={x.snippet.thumbnails.default.url} desc={x.snippet.description} title={x.snippet.title} key={x.id} />
            })}

        </div>
    );
}

export default VideoList;