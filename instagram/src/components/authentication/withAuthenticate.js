import React from 'react';

const withAuthenticate = App => {
    return class extends React.Component {
        render(){
            return <App />
        }
    }
}

export default withAuthenticate;