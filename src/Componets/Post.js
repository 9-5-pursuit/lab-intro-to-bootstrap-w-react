 export default function Post({item}) {
    return (
        <div className="card" style={{width: "18rem"}} key={item.id}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.content}</p>
          <a href="#" className="btn btn-primary">Go to post</a>
        </div>
      </div>
    
    );
  }
  

//   export default function BirdCard({bird, handleAddToCart}){
//     return(
//       <div className='card'>
//         <h2>{bird.name}</h2>
//         <p>Price: ${bird.amount}</p>
//         <img src={bird.img} alt={""}/>
//         <button onClick={()=>handleAddToCart(bird)}>Adpot</button>
//       </div>
//     )
//   }