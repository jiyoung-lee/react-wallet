import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form action="/login_process" method="post">
                    <p><input type="text" name="id" placeholder="userid"></input></p>
                    <p><input type="password" name="pw" placeholder="password"></input></p>
                    <div>
                        <input type="submit" value="Login"></input>
                        <input type="button" value="singUp" onClick="/create"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Index;