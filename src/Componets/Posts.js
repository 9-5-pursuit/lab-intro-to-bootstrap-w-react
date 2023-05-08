import data from "../data/posts.json";
import Post from './Post'

export default function Posts() {
    return (
        <div className="posts">
            {data.map((item)=>{
                return <Post key={item.id} item={item}/>
            } )}
      </div>
    );
  }

//   \import BirdCard from './Birdcard'
//   import birdData from '../data/birds'
//   // BirdsContainer component
  
//   //1. display bird data
//   export default function BirdsContainer({ handleAddToCart}){
//     return (
//       <div className='birds'>
//         {birdData.map((bird) => 
//         <BirdCard key={bird.id} bird={bird} handleAddToCart={handleAddToCart}/>
//         )}
//       </div>
//     );
//   }
