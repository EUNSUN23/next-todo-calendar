import React from 'react';


export default function Home() {
    return (
        <>
            <div className="container">
                <header className="header">
                    <nav className="user-nav">
                        <div className="user-nav__user">
                            <span className="user-nav__user-name">Eunsun</span>
                        </div>
                    </nav>
                </header>

                <div className="content">
                    <nav className="sidebar">
                        <ul className="side-nav">
                            <li className="side-nav__item side-nav__item--active">
                                <a href="#" className="side-nav__link">
                                    <span>Hotel</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <span>Flight</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <span>Car rental</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className="side-nav__link">
                                    <span>Tours</span>
                                </a>
                            </li>
                        </ul>
                        <div className="legal">
                            &copy: 2017 by trillo. All rights reserved.
                        </div>
                    </nav>

                    <main className="hotel-view">
                        <h3>content 1</h3>
                    </main>
                </div>
            </div>
        </>
    );
}
