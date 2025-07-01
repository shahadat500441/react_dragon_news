import Marquee from "react-fast-marquee";

import {Link} from "react-router-dom"
const BreakingNews = () => {
  return (
    <div className="flex ">
      <button className="btn btn-secondary">Breaking NewS</button>
      <Marquee pauseOnClick={true} speed={100}>
        I can be a React component, multiple React components, or just some
        text.
        <Link to="/"></Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
