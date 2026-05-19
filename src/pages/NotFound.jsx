
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <>
            <h2>Sorry,</h2>
            <p>Couldn't find that!</p>
            <br />
            <Link to="/">Return Home</Link>
        </>

    );

}

export default NotFound;