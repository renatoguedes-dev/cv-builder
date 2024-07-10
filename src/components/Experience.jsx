import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faAngleUp,
  faAngleDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import FormButtons from "./FormButtons";
import SideEntries from "./SideEntries";

const Experience = ({ isActive, onClick, workDetails, setWorkDetails }) => {
  const [addWork, setAddWork] = useState(false);
  const [workForm, setWorkForm] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    jobDescription: "",
  });

  const [editID, setEditID] = useState(null);
  const [lastId, setLastId] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setWorkForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setAddWork(false);
    setWorkForm({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      jobDescription: "",
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editID === null) {
      const newId = lastId + 1;
      setLastId((prevId) => prevId + 1); // Increment lastId
      setWorkDetails((prevDetails) => [
        ...prevDetails,
        { ...workForm, id: newId },
      ]);
    } else {
      setWorkDetails((prevDetails) =>
        prevDetails.map((entry) =>
          entry.id === editID ? { ...entry, ...workForm } : entry
        )
      );
    }

    setAddWork(false);
    setEditID(null);
    setWorkForm({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      jobDescription: "",
    });
  };

  const handleEdit = (entryID) => {
    const index = workDetails.findIndex((entry) => entry.id === entryID);
    if (index !== -1) {
      const entryToEdit = workDetails[index];
      setEditID(entryID);
      setWorkForm(entryToEdit);
      setAddWork(true);
    }
  };

  const handleDelete = (entryID) => {
    setWorkDetails((prevDetails) =>
      prevDetails.filter((entry) => entry.id !== entryID)
    );
  };

  useEffect(() => {
    console.log("Updated workDetails:", workDetails);
  }, [workDetails]);

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
  }, [isActive, workForm, workDetails, editID]);

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

      {/* show the jobs entries in case there are any */}
      {isActive && !addWork && workDetails.length !== 0 && (
        <SideEntries
          entries={workDetails}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      {/* show the add Experience button if the section is active */}
      {isActive && !addWork && (
        <div className="add-experience-div">
          <button
            className="add-experience-btn"
            onClick={() => setAddWork(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Experience
          </button>
        </div>
      )}

      {/* show the form to fill the job experience details if the add education 
          button was pressed */}
      {isActive && addWork && (
        <form>
          <div className="input-groups">
            <div className="input-group">
              <label htmlFor="companyName">
                <span>Company Name</span>
              </label>
              <input
                type="text"
                id="companyName"
                value={workForm.companyName}
                onChange={handleChange}
                placeholder="Enter Company Name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="positionTitle">
                <span>Position Title</span>
              </label>
              <input
                type="text"
                id="positionTitle"
                value={workForm.positionTitle}
                onChange={handleChange}
                placeholder="Enter Position Title"
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
                  value={workForm.startDate}
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
                  value={workForm.endDate}
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
                value={workForm.location}
                onChange={handleChange}
                placeholder="Enter Location"
              />
            </div>

            <div className="input-group">
              <label htmlFor="jobDescription">
                <span>Job Description</span>
                <span className="recommended-text">optional</span>
              </label>
              <textarea
                type="text"
                id="jobDescription"
                name="jobDescription"
                value={workForm.jobDescription}
                onChange={handleChange}
                placeholder="Enter Job Description"
                rows={5}
              />
            </div>

            <FormButtons cancelSection={handleCancel} saveSection={handleSave} />
          </div>
        </form>
      )}
    </div>
  );
};

export default Experience;
