import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <React.Fragment>
        <Head>
            <title>Ecommerce Store</title>
        </Head>
        <Navbar />

        <main>
            {props.children}
        </main>

        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

            *   {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
                font-smoothing: antialiased;
            }
            
            button { cursor: pointer }

            button:focus {
                outline: 0;
            }
        `}</style>
    </React.Fragment>
)

export default Layout;