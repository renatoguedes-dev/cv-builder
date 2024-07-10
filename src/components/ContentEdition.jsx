import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";

/**
 * ContentEdition Component
 * This component manages the state of which section (PersonalDetails, Education, or Experience)
 * is currently active/expanded and passes the appropriate props to each child component.
 */
const ContentEdition = ({
  personalDetails,
  setPersonalDetails,
  educationDetails,
  setEducationDetails,
}) => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState("personal-details");

  /**
   * handleExpand Function
   * @param {string} section - The section to expand or collapse
   * This function toggles the active state of a section. If the clicked section is already active,
   * it sets the active section to null (collapsing it). Otherwise, it sets the active section to the clicked section.
   */
  const handleExpand = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <div className="content-edition">
      {/* PersonalDetails component with props to manage its active state */}
      <PersonalDetails
        isActive={activeSection === "personal-details"}
        onClick={() => handleExpand("personal-details")}
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      {/* Education component with props to manage its active state */}
      <Education
        isActive={activeSection === "education"}
        onClick={() => handleExpand("education")}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
      />
      {/* Experience component with props to manage its active state */}
      <Experience
        isActive={activeSection === "experience"}
        onClick={() => handleExpand("experience")}
      />
    </div>
  );
};

export default ContentEdition;
