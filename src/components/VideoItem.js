import React from 'react';
const VideoItem = (props) => {
    return (
        <div>
            <img alt="video" src={props.src} />
            <h1>{props.title}</h1>
            { props.desc}
            <hr />

        </div>

    );
}

export default VideoItem;