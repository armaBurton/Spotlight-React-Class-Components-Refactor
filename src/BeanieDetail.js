import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';
import './App.css';
import { Component } from 'react';


// export default function BeanieDetail() {

//   const [beanieBaby, setBeanieBaby] = useState({});
//   const params = useParams();
//   useEffect(() => {
   
//     async function onLoad() {
//       const data = await getSingleBeanie(params.id);
//       setBeanieBaby(data);
//     }

//     onLoad();
//   }, [params.id]); 

//   return (
//     <Link to={`/`}>
//       <div className='bean-holder'>
//         <img className='detail-image' src={beanieBaby.image} alt={beanieBaby.title} />
//         <div className='bean-card'>
//           <h2 className='title'>{beanieBaby.title}</h2>
//           <p className='zodiac'>Zodiac: {beanieBaby.astroSign}</p>
//           <p className="born">Born: {beanieBaby.birthday}</p>
//           <p className="release-date">Release Date: {beanieBaby.releaseDate}</p>
//           <p className="style-number">Styling Number: {beanieBaby.styleNumber}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }
// const params = new URLSearchParams(window.location.search);
// const id = params.get('id');

// let windowData = window.location;
// console.log(windowData);
// let split = windowData.href.split('/');
// let count = split.length - 1;
// console.log(split[count]);




export default class BeanieDetail extends Component {
  
  
  constructor() {
    super();
    
    this.setState = { 
      beanieBaby: {},
      ___stateBeanBaby: {}
    };
  } 

  async componentDidMount() {
    let windowData = window.location;
    let split = windowData.href.split('/');
    let count = split.length - 1;
    const beanie = await getSingleBeanie(split[count]);
    this.setState({});
    console.log(beanie);
  }

  
  render() {
    // const { beanie } = this.props.location.search;
    // console.log(beanie);
  
    return <></>;
  }
}