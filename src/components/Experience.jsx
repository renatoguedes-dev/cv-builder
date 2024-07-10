import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faAngleUp,
  faAngleDown,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const Experience = ({ isActive, onClick }) => {
  return (
    <div className="add-experience-section">
      <button className="experience-button section-button" onClick={onClick}>
        <h2 className="experience">
          <FontAwesomeIcon icon={faBriefcase} className="briefcase-icon" />
          Experience
        </h2>
        {isActive ? (
          <FontAwesomeIcon icon={faAngleUp} className="angle-icons" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} className="angle-icons" />
        )}
      </button>

      {isActive && (
        <div className="add-experience-div">
          <button className="add-experience-btn">
            <FontAwesomeIcon icon={faPlus} />
            Experience
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
