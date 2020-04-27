import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlay, FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi'
import frozen from '../../assets/frozen.png';
import movie1 from '../../assets/movie1.jpeg';
import movie2 from '../../assets/movie2.png';
import movie3 from '../../assets/movie3.jpg';
import movie4 from '../../assets/movie4.png';
import moreMovie1 from '../../assets/more-movie1.png';
import moreMovie2 from '../../assets/more-movie2.png';
import moreMovie3 from '../../assets/more-movie3.png';
import './style.css';

export default function Home() {
  function watchTrailer(){
    window.open('https://www.youtube.com/watch?v=TbQm5doF_Uc');
    return false;
  }
  return (
    <div className="home">
      <div className="navigation-bar">
        <div className="title">
          <h1>AnimTv</h1>
        </div>
        <div className="navigation">
          <ul>
            <li><Link className="menu-link active" to="#">Upcoming</Link></li>
            <li><Link className="menu-link" to="#">Genere</Link></li>
            <li><Link className="menu-link" to="#">Videos</Link></li>
            <li><Link className="menu-link" to="#">Subscription</Link></li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Pesquisar..."/>
          <FiSearch color="#1E234B" size={20}/>
        </div>
        <div className="time">
          <h1>06:20 PM</h1>
        </div>
        <div className="date">
            <span>Nov 10</span>
            <span>Wednesday</span>
        </div>
      </div>

      <div className="background">
        <div className="destaque">
          <div className="info">
            <div className="title">
              <h1>Frozen</h1>
            </div>
            <div className="informacoes">
              <span>2013</span>
              <span>Family/Musical</span>
              <span>1h45min</span>
            </div>
            <div className="sinopse">
              <p>Elsa the Snow Queen and her sister Anna embark on an adventure far away from the kingdom of Arendelle…</p>
            </div>
            <div className="release">
              <span>Release date: November 27, 2013</span>
            </div>
            <div className="watch">
                <button type="button" onClick={watchTrailer}>Watch Trailer <FiPlay color="#1E234B" size={16} /></button>
            </div>
          </div>
          <div className="image">
            <img src={frozen} alt="Frozen"/>
          </div>
        </div>
      </div>

      <div className="recomended">
        <div className="page-items">
          <div className="title">
            <h1>Recomended Movies</h1>
          </div>
          <div className="navigation">
            <FiArrowLeft color="#1E234B" size={18} />
            <FiArrowRight color="#1E234B" size={18} />
          </div>
        </div>

        <div className="movies-list">
          <ul>
            <li><Link className="hvr-float-shadow" to="#"><img src={movie1} alt="Movie 1"/></Link></li>
            <li><Link className="hvr-float-shadow" to="#"><img src={movie2} alt="Movie 2"/></Link></li>
            <li><Link className="hvr-float-shadow" to="#"><img src={movie3} alt="Movie 3"/></Link></li>
            <li><Link className="hvr-float-shadow" to="#"><img src={movie4} alt="Movie 4"/></Link></li>
          </ul>
        </div>
      </div>

      <div className="more-movies">
        <div className="title">
          <h1>Browse More Movies</h1>
        </div>
        <div className="options">
          <ul>
            <li><Link className="menu-link active" to="#">Trending</Link></li>
            <li><Link className="menu-link" to="#">Top Rated</Link></li>
            <li><Link className="menu-link" to="#">New Arrival</Link></li>
          </ul>
        </div>

        <div className="list">
          <div className="movie">
            <div className="image">
              <img src={moreMovie1} alt="More Movie 1"/>
            </div>
            <div className="info">
              <div className="title">
                <h1>Up Animation Movie</h1>
              </div>
              <div className="sinopse">
                <p>Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.</p>
              </div>
              <div className="watch-list">
                <Link to="#"><FiPlus color="#2A2A2A" size={18}/> Add To Watch List</Link>
              </div>
            </div>
          </div>

          <div className="movie">
            <div className="image">
              <img src={moreMovie2} alt="More Movie 2"/>
            </div>
            <div className="info">
              <div className="title">
                <h1>Beauty and the Beast</h1>
              </div>
              <div className="sinopse">
                <p>Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon.</p>
              </div>
              <div className="watch-list">
                <Link to="#"><FiPlus color="#2A2A2A" size={18}/> Add To Watch List</Link>
              </div>
            </div>
          </div>

          <div className="movie">
            <div className="image">
              <img src={moreMovie3} alt="More Movie 3"/>
            </div>
            <div className="info">
              <div className="title">
                <h1>Big Hero 6</h1>
              </div>
              <div className="sinopse">
                <p>Hiro, a robotics prodigy, joins hands with Baymax in order to avenge his brother's death. They then team up with Hiro's friends to form a team of high-tech heroes.</p>
              </div>
              <div className="watch-list">
                <Link to="#"><FiPlus color="#2A2A2A" size={18}/> Add To Watch List</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <span>&copy; 2020 AnimTv</span>
      </div>
    </div>
  );
}
