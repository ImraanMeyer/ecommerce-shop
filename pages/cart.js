import Layout from "../components/Layout/Layout"

const Cart = () => (
    <React.Fragment>
        <Layout>
            <div>
                <h1>Cart</h1>
            </div>
        </Layout>

        <style jsx>{`
            h1 {
                color: red;
            }
        
        `}
        </style>
    </React.Fragment>
)

export default Cart;