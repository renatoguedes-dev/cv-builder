import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

/**
 * PersonalDetails Component
 * @param {boolean} isActive - Indicates if the section is currently active/expanded
 * @param {function} onClick - Function to toggle the active state of the section
 * @param {object} personalDetails - State containing personal details
 * @param {function} setPersonalDetails - Function to update personal details state
 */
const PersonalDetails = ({
  isActive,
  onClick,
  personalDetails,
  setPersonalDetails,
}) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <div className="personal-details">
      {/* Button to toggle the active state of the Personal Details section */}
      <button className="section-button" onClick={onClick}>
        <h2 className="personal-information">
          {/* Icon representing personal details */}
          <FontAwesomeIcon icon={faUser} />
          Personal Details
        </h2>
        {/* Icon to indicate whether the section is expanded or collapsed */}
        {isActive ? (
          <FontAwesomeIcon icon={faAngleUp} className="angle-icons" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} className="angle-icons" />
        )}
      </button>

      {/* Form displayed when the Personal Details section is active */}
      {isActive && (
        <form>
          <div className="input-groups">
            {/* Full Name input group */}
            <div className="input-group">
              <label htmlFor="fullName">
                <span>Full Name</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={personalDetails.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                autoComplete="name"
              />
            </div>

            {/* Email input group */}
            <div className="input-group">
              <label htmlFor="email">
                <span>E-mail</span>
                <span className="recommended-text">recommended</span>
              </label>
              <input
                type="email"
                id="email"
                value={personalDetails.email}
                onChange={handleChange}
                placeholder="Enter e-mail"
                autoComplete="email"
              />
            </div>

            {/* Phone Number input group */}
            <div className="input-group">
              <label htmlFor="phoneNumber">
                <span>Phone Number</span>
                <span className="recommended-text">recommended</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={personalDetails.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                autoComplete="tel"
              />
            </div>

            {/* Address input group */}
            <div className="input-group">
              <label htmlFor="address">
                <span>Address</span>
                <span className="recommended-text">recommended</span>
              </label>
              <input
                type="text"
                id="address"
                placeholder="City, Country"
                value={personalDetails.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonalDetails;
