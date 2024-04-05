import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';


function LatestMovies() {

  const [movieData, setMovieData] = useState([]);

  

  //const apikey = '62ba1a4ef927d1596c9797d21fae9310';
  //https://api.themoviedb.org/3/movie/popular?api_key=62ba1a4ef927d1596c9797d21fae9310&language=en-US&page=1

    const getTrendingMovieData = () => {
        let res = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62ba1a4ef927d1596c9797d21fae9310&language=en-US&page=1')
        .then(res => {
            console.log(res[0].results[0].original_title);

            setMovieData(res.data.poster);
        })
        .catch(err => {
            console.log(err)
    })
    }

  return (
    <>
      <div className='background_container'>
        <div className='button_container'>
          <button onClick={() => {
            getTrendingMovieData("movie");
          }}>
            Trending Movies
          </button>
        </div>
        <div className='flex-container'>
          {movieData.map((item) =>
           <div className='movie_item'>
              <img src={'https://api.themoviedb.org/3/movie/{movie_id}?api_key=62ba1a4ef927d1596c9797d21fae9310&language=en-US'} />
              <div className='movie_name'>
                {item.original_title ? item.original_title : item.original_name}
              
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default LatestMovies

//<Container style={{height: '500px', width: '100%'}}>
//      <ull>
//        <Card style={{height: '100px', width: '100px', margin: '5%'}}>
//          <Card.Body>
//            <Card.Title>Movie Name</Card.Title>
//            <Card.Img></Card.Img>
//            <Card.Text>Lorem ipso</Card.Text>
//          </Card.Body>
//        </Card>
//        <Card style={{height: '100px', width: '100px', margin: '5%'}}>
//          <Card.Body>
//            <Card.Title>Movie Name</Card.Title>
//            <Card.Img></Card.Img>
//            <Card.Text>Lorem ipso</Card.Text>
//          </Card.Body>
//        </Card>
//        <Card style={{height: '100px', width: '100px', margin: '5%'}}>
//          <Card.Body>
//            <Card.Title>Movie Name</Card.Title>
//            <Card.Img></Card.Img>
//            <Card.Text>Lorem ipso</Card.Text>
//          </Card.Body>
//        </Card>
//      </ull>
//   </Container>