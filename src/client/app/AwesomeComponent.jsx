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
                <h1>Like Counter </h1>
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

}

export default AwesomeComponent;