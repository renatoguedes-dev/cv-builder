import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ResumePersonalInfo = ({ personalDetails }) => {
  return (
    <div className="personal-info">
      <h1>{personalDetails.fullName}</h1>
      <div className="contact-info">
        <div className="email-info">
          {personalDetails.email && <FontAwesomeIcon icon={faEnvelope} />}
          {personalDetails.email}
        </div>
        <div className="phone-info">
          {personalDetails.phoneNumber && <FontAwesomeIcon icon={faPhone} />}
          {personalDetails.phoneNumber}
        </div>
        <div className="address-info">
          {personalDetails.address && <FontAwesomeIcon icon={faLocationDot} />}
          {personalDetails.address}
        </div>
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
