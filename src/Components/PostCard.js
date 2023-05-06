import Images from '/Users/onyxmcqueen/Desktop/lab-intro-to-bootstrap-w-react/src/images/index.js'

export default function PostCard({ title, content, location}){

    let fixedLocation = location.trim().replaceAll(" ", "-").toLowerCase();

    return(
    <div className='col'>
        <div className='card h-100'>
            <img src={Images[fixedLocation]} className="card-img-top post-image-height object-fit-cover" alt='A city'/>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text text-truncate'>{content}</p>
                <button type="button" className="btn btn-warning float-end">Go to post ↗</button>
            </div>
        </div>
    </div>
    );
}