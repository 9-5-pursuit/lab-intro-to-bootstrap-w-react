export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand">
            <div className='container'>
                <a className="navbar-brand fs-1 fw-bold" href='App.js'>Travel <span className="script-font text-warning">Blog</span></a>

                <ul className='navbar-nav me-auto ms-3'>
                    <li className='nav-item'>
                        <a className='nav-link' href='App.js'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='App.js'>Popular posts</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}