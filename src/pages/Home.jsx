import BreakingNews from "./Shered/BreakingNews";
import Header from "./Shered/Header";
import LeftSideNav from "./Shered/LeftSideNav";
import Navbar from "./Shered/Navbar";
import RightSideNav from "./Shered/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
    

      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">News comming soon</div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
