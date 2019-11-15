import Layout from "../components/Layout/Layout"

const About = () => (
    <React.Fragment>
        <Layout>
            <div>
                <h1>About</h1>
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

export default About;