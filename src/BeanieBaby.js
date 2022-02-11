import { Link } from 'react-router-dom';

export default function BeanieBaby(beanieBaby) {
  return (
    <Link to={`/beanie-baby/${beanieBaby.bean.id}`}>
      <div className='beanie-div'>
        <img className='beanie-img' src={beanieBaby.bean.image} alt={beanieBaby.bean.title} />
        <div className='beanies'>
          <h3>{beanieBaby.bean.title}</h3>
          <p>{beanieBaby.bean.astroSign}</p>
          <p>{beanieBaby.bean.releaseDate}</p>
        </div>
      </div>
    </Link>
  );
}