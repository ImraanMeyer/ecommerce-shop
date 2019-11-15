import data from '../../data/content';

const { landing } = data;
const { cta, tagline, description } = landing;

const Landing = () => (
    <React.Fragment>
        <div className="landing">
            <div className="content">
                <h1>{tagline}</h1>
                <p>{description}</p>
                <button>{cta}</button>
            </div>
            <div className="image-wrapper">
                <img src="" alt="clothes" />
            </div>
        </div>

        <style jsx>{`
            .landing {
                height: 90vh;
                display:flex;
                justify-content: space-around;
                align-items: center
            }
        `}</style>
    </React.Fragment>
)

export default Landing;