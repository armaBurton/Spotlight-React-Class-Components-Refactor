import './App.css';
import BeanieBaby from './BeanieBaby';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanie-baby'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map((bean, i) => 
          <BeanieBaby key={bean + i} bean={bean}/>
          
        )
      }
    </div>);
}
