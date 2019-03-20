import React from 'react';

const withAuthenticate = PostsPage => Login =>  {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            };
        }
        componentDidMount(){
            if(!localStorage.getItem('user') && !localStorage.getItem('pass')){
                this.setState({loggedIn: false})
            } else {
                this.setState({loggedIn: true})
            }
        }
        render(){
            if(this.state.loggedIn) {
                return <PostsPage />;
            } else {
                return <Login />;
            }
            
        }
    }
}

export default withAuthenticate;