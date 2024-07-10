import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FormButtons = ({ cancelSection, saveSection }) => {
  return (
    <div className="form-buttons">
      
      <div className="save-cancel-buttons">
        <button className="cancel-button" onClick={cancelSection}>
          Cancel
        </button>
        <button className="save-button" onClick={saveSection}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormButtons;
