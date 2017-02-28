import React from 'react';

class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount : 0};
        this.onLike = this.onLike.bind(this);
    }

    onLike () {
        this.getMoviesFromApiAsync();
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount : newLikesCount});
    }

    render() {
        return (
            <div>
                <h1>Like Robert Component </h1>
                <b>Number of likes:</b><span> {this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like Me</button></div>
            </div>
        );
    }

    getMoviesFromApiAsync() {
        return fetch('http://localhost:8090/app')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // async getMoviesFromApiAsync() {
    //     try {
    //         let response = await fetch('https://facebook.github.io/react-native/movies.json');
    //         let responseJson = await response.json();
    //         return responseJson.movies;
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }

}

export default AwesomeComponent;