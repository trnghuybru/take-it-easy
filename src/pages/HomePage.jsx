import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import MainButton from "../components/MainButton";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen space-y-10">
        <div className="text-center">
          <p className="bg-gradient-to-l from-main-start to-main-end text-transparent bg-clip-text font-semibold text-6xl mb-6">
            Boost your vocabulary
          </p>
          <p className="text-gray-main text-6xl font-semibold text-wrap">
            and language skills with us
          </p>
        </div>
        <div className="flex space-x-6 text-gray-normal">
          <p>
            <span className="mr-2 text-main-start">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            Memorize with Active Learning Methods
          </p>
          <p>
            <span className="mr-2 text-main-start">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            Impove Speaking Skill with AI
          </p>
          <p>
            <span className="mr-2 text-main-start">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            Gamify learning with word games
          </p>
        </div>
        <MainButton>Let’s start explore the magic</MainButton>
      </main>
    </>
  );
}
