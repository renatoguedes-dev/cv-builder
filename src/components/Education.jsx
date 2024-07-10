import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faAngleUp,
  faAngleDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import FormButtons from "./FormButtons";
import SideEntries from "./SideEntries";

const Education = ({
  isActive,
  onClick,
  educationDetails,
  setEducationDetails,
}) => {
  const [addEducation, setAddEducation] = useState(false);
  const [educationForm, setEducationForm] = useState({
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [editID, setEditID] = useState(null);
  const [lastId, setLastId] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEducationForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setAddEducation(false);
    setEducationForm({
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editID === null) {
      const newId = lastId + 1;
      setLastId((prevId) => prevId + 1); // Increment lastId
      setEducationDetails((prevDetails) => [
        ...prevDetails,
        { ...educationForm, id: newId },
      ]);
    } else {
      setEducationDetails((prevDetails) =>
        prevDetails.map((entry) =>
          entry.id === editID ? { ...entry, ...educationForm } : entry
        )
      );
    }

    setAddEducation(false);
    setEditID(null);
    setEducationForm({
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleEdit = (entryID) => {
    const index = educationDetails.findIndex((entry) => entry.id === entryID);
    if (index !== -1) {
      const entryToEdit = educationDetails[index];
      setEditID(entryID);
      setEducationForm(entryToEdit);
      setAddEducation(true);
    }
  };

  const handleDelete = (entryID) => {
    setEducationDetails((prevDetails) =>
      prevDetails.filter((entry) => entry.id !== entryID)
    );
  };

  useEffect(() => {
    console.log("Updated educationDetails:", educationDetails);
  }, [educationDetails]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (isActive && e.key === "Enter") {
        handleSave(e);
      }
    };

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [isActive, educationForm, educationDetails, editID]);

  return (
    <div className="add-education-section">
      <button className="education-button section-button" onClick={onClick}>
        <h2 className="education">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="graduation-cap-icon"
          />
          Education
        </h2>
        {isActive ? (
          <FontAwesomeIcon icon={faAngleUp} className="angle-icons" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} className="angle-icons" />
        )}
      </button>

      {/* show the education entries in case there are any */}
      {isActive && !addEducation && educationDetails.length !== 0 && (
        <SideEntries
          entries={educationDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      {/* show the add education button if the section is active */}
      {isActive && !addEducation && (
        <div className="add-education-div">
          <button
            className="add-education-btn"
            onClick={() => setAddEducation(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Education
          </button>
        </div>
      )}

      {/* show the form to fill the education details if the add education button was pressed */}
      {isActive && addEducation && (
        <form>
          <div className="input-groups">
            <div className="input-group">
              <label htmlFor="university">
                <span>University</span>
              </label>
              <input
                type="text"
                id="university"
                value={educationForm.university}
                onChange={handleChange}
                placeholder="Enter University / School"
              />
            </div>
            <div className="input-group">
              <label htmlFor="degree">
                <span>Degree</span>
              </label>
              <input
                type="text"
                id="degree"
                value={educationForm.degree}
                onChange={handleChange}
                placeholder="Enter Degree / Field of Study"
              />
            </div>
            <div className="dates-div">
              <div className="input-group">
                <label htmlFor="startDate">
                  <span>Start Date</span>
                </label>
                <input
                  type="text"
                  id="startDate"
                  value={educationForm.startDate}
                  onChange={handleChange}
                  placeholder="Enter Start Date"
                />
              </div>
              <div className="input-group">
                <label htmlFor="endDate">
                  <span>End Date</span>
                </label>
                <input
                  type="text"
                  id="endDate"
                  value={educationForm.endDate}
                  onChange={handleChange}
                  placeholder="Enter End Date"
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="location">
                <span>Location</span>
                <span className="recommended-text">optional</span>
              </label>
              <input
                type="text"
                id="location"
                value={educationForm.location}
                onChange={handleChange}
                placeholder="Enter Location"
              />
            </div>

            <FormButtons
              cancelSection={handleCancel}
              saveSection={handleSave}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Education;
