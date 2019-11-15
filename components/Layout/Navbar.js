import Link from 'next/link';

const NavLinks = {
    Home: '/',
    Products: '/products',
    Cart: '/cart',
    About: '/about'
}

const Navbar = () => (
    <React.Fragment>
        <nav>
            <Link href={NavLinks.Home}>
                <h3>Simple Fashion</h3>
            </Link>
            <ul>
                {Object.entries(NavLinks).map(([value, route]) => (
                    <Link href={route}>
                        <button>
                            {value}
                        </button>
                    </Link>
                ))}
            </ul>
        </nav>

        <style jsx>{`
            nav {
                display:flex;
                height: 10vh;
                justify-content: space-around;
                align-itmes: center;
                font-size: larger;
                box-shadow: 0px -2px 8px 0px #ccc;
            }

            h3 {
                cursor: pointer;
                letter-spacing: 1.5px;
                font-weight: bolder;
            }

            ul > button {
                background: none;
                border: none;
                padding: 1em;
                margin: 0 2em;
                border-radius: .7em;
            }

            ul > button::after {
                content: '';
                display: block;
                width: 0;
                margin: 0 auto;
                height: 2.5px;
                background: #ccc;
            }

            button:hover { font-weight: 600; }

            button:hover::after {
                content: '';
                transition: width 200ms;
                width: 40%;
            }  
            
            button:active::after {
                content: '';
                transition: width 200ms;
                width: 100%;
            } 
        `}</style>
    </React.Fragment>
)

export default Navbar;