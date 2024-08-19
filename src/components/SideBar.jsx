import {
  faBook,
  faFile,
  faFolder,
  faHouse,
  faLayerGroup,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
  return (
    <nav className="flex flex-col text-gray-normal p-6 space-y-4 bg-white w-fit rounded-2xl">
      <a
        href="#"
        className="bg-gradient-to-br from-main-start to-main-end text-transparent bg-clip-text"
      >
        <FontAwesomeIcon icon={faHouse} className="text-main-start mr-2" />
        Dashboard
      </a>
      <a href="#">
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-gray-normal mr-2"
        />
        Flashcards
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFolder} className="text-gray-normal mr-2" />
        Collections
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faRobot} className="text-gray-normal mr-2" />
        Talk with AI
      </a>
    </nav>
  );
}

export default SideBar;
