// import Posts from './Posts'
import Filter from './Filter'
import Posts from "./Posts";

export default function MainContainer(){
    return(
        <div className="main">
        <Posts/>
        <aside>
            <Filter/>
        </aside>
        </div>
    );
}



// export default function Posts() {
//     return (
//         <div className="Posts">
//             {data.map((item)=>{
//                 return <Post key={item.id} item={item}/>
//             } )}
//       </div>
//     );
//   }