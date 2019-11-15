import Layout from "../components/Layout/Layout"

const Products = () => (
    <React.Fragment>
        <Layout>
            <div>
                <h1>Projects</h1>
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

export default Products;