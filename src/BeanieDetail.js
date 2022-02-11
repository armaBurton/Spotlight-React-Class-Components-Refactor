import { Link } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';
import './App.css';
import { Component } from 'react';

export default class BeanieDetail extends Component {
  constructor() {
    super();
    
    this.state = { 
      beanieBaby: {},
    };
    // console.log(beanieBaby);
  } 

  async componentDidMount() {
    const windowData = window.location;
    const split = windowData.href.split('/');
    const count = split.length - 1;
    const id = split[count];
    const beanieBaby = await getSingleBeanie(id);
    this.setState({ beanieBaby: { beanieBaby } });
    this.render();
  }
  
  render() {
    
    const { beanieBaby } = this.state;
    if (beanieBaby.beanieBaby === undefined){
      <></>;
    } else {
      return <Link to={`/`}>
        <div className='bean-holder'>
          <img className='detail-image' src={beanieBaby.beanieBaby.image} alt={beanieBaby.beanieBaby.title} />
          <div className='bean-card'>
            <h2 className='title'>{beanieBaby.beanieBaby.title}</h2>
            <p className='zodiac'>Zodiac: {beanieBaby.beanieBaby.astroSign}</p>
            <p className="born">Born: {beanieBaby.beanieBaby.birthday}</p>
            <p className="release-date">Release Date: {beanieBaby.beanieBaby.releaseDate}</p>
            <p className="style-number">Styling Number: {beanieBaby.beanieBaby.styleNumber}</p>
          </div>
        </div>
      </Link>;
    }
    return <></>;
  }
}

