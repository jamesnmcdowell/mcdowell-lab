import React from 'react';
import { Link } from 'react-static';

let MobileMenu = ({menuOpen}) =>
    <div className={(menuOpen) ? "mobile-menu-wrapper menu-open" : "mobile-menu-wrapper"}>
        <ul className="mobile-menu-list">
            <li>
                <Link to="/" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Home</span>
                    </div>
                </Link>
            </li>
            <li>
                <hr />
            </li>
            <li>
                <Link to="/become-a-vendor" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Become a Vendor</span>
                    </div>
                </Link>
            </li>
        </ul>
    </div>

export default MobileMenu;