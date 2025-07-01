import BreakingNews from "./Shered/BreakingNews";
import Header from "./Shered/Header";
import LeftSideNav from "./Shered/LeftSideNav";
import Navbar from "./Shered/Navbar";
import NewsCard from "./Shered/NewsCard";
import RightSideNav from "./Shered/RightSideNav";
import {useLoaderData} from "react-router-dom"

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
    

      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        <div >
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 ">
          {
            news.map((aNews)=><NewsCard key={aNews.id} news={aNews}></NewsCard>)
          }
          </div>
        <div >
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
