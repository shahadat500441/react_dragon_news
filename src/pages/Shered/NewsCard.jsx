import {Link } from "react-router-dom"

const NewsCard = ({ news }) => {
  const { title,thumbnail_url,details,id } = news;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          src={thumbnail_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {
            details.length >  200 ? <p>{details.slice(0,200)} <Link 
            to={`/news/${id}`}
            className="text-blue-600 font-bold">Read more....</Link></p>:
            <p>{details}</p>
          }
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
