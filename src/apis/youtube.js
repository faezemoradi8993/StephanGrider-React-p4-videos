import axios from 'axios';
export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: '10',
            key: "AIzaSyAaR18duFr8W4nw7or8B3sAM9wEpnSsKJs"
        }
    }
); npm