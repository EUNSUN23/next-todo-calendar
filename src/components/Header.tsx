import React from 'react';

// .header {
//     font-size: 1.4rem;
//     height: 7rem;
//     background-color: #fff;
//     border-bottom: var(--line);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

function Header() {
    return (
        <header className="flex justify-between items-center text-2xl h-28 bg-white border-b border-[var(--line)]">
            <nav className="user-nav">
                <div className="user-nav__user">
                    <span className="user-nav__user-name">Eunsun</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;