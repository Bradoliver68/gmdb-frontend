import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  state = {
    isMovieDisplayed: true,
    title: '',
    error: ''
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:3001/movies")
    await response.json()
      .then(
        data => this.setState({ title: data.title }),
        error => {
          this.setState({ error: 'Unable to load movies' })
      })
  }

  render() {
    return this.state.error !== ''
      ? (<h1>Unable to load movies</h1>)
      : this.state.title !== ''        
        ? (<h1>{this.state.title}</h1>)
        : (<h1>{this.state.title}</h1>)
  }
}

