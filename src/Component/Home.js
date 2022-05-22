import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="#">COVID<span className='text-danger'>.LIVE</span>
                        <span className='live'></span> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">VACCINE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">TREATMENT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">MAP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Home;