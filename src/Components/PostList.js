import PostCard from "./PostCard"

export default function PostList({ posts }){
    return(
        <div className="col-8">
            <div className="row row-cols-2 g-3">
                {posts.map((post) => <PostCard {...post} />)}
            </div>
        </div>
    )
}