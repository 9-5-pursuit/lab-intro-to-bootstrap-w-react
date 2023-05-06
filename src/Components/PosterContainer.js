export default function PosterContainer({ children }){
    return(
        <div className="container mt-3">
            <div className="row">
                {children}
            </div>
        </div>
    )
}