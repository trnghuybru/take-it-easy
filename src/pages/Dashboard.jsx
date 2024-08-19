import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../components/Logo";
import MainButton from "../components/MainButton";
import SideBar from "../components/SideBar";
import { faLanguage, faPlane } from "@fortawesome/free-solid-svg-icons";
import FindNewWord from "../components/FindNewWord";
import Review from "../components/Review";
import MemorizeChart from "../components/MemorizeChart";

function Dashboard() {
  return (
    <div className="flex space-x-32 pt-12 px-20">
      <div className="flex flex-col w-48 space-y-6">
        <Logo />
        <SideBar />
        <MainButton>
          <FontAwesomeIcon icon={faPlane} className="mr-2" />
          Upgrade plan
        </MainButton>
      </div>

      <div className="flex flex-col space-y-6 w-3/6 max-w-3/6 ">
        <FindNewWord />
        <div className="flex flex-row space-x-6 min-w-max ">
          <Review />
          <MemorizeChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
