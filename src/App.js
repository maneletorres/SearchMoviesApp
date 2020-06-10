import React, { Component } from 'react'
import { Title } from './components/Title'
import SearchForm from './components/SearchForm'
import Movie from './components/Movie'
import MoviesList from './components/MoviesList'
import './App.css';
import "bulma/css/bulma.css"

class App extends Component {
  state = {
    moviesResults: [],
    usedSearch: false
  }

  handleMoviesResults = (moviesResults) => {
    this.setState({
      moviesResults,
      usedSearch: true
    })
  }

  renderMoviesResults = () => {
    const {moviesResults} = this.state
    return moviesResults.map(movie => {
      return <Movie 
        key={movie.imdbID} 
        title={movie.Title} 
        poster={movie.Poster} 
        year={movie.Year}></Movie>
    })
  }

  render() {
    return (
      <div className="App">
        <Title>Search for movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onMoviesResults={this.handleMoviesResults}/>
        </div>
        {
          this.state.usedSearch ? 
            this.state.moviesResults.length == 0 ? 
            <p>No movies</p> : 
            <MoviesList movies={this.state.moviesResults}></MoviesList> 
            : <p>Enter you search</p>
        }
      </div>
    )
  }
}

export default App