import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const SideEntries = ({ entries, handleEdit, handleDelete }) => {

  return (
    <>
      {entries.map((entry) => (
        <div className="entry-div" key={entry.id}>
          <p className="side-entry-paragraph">{entry.university}</p>
          <div className="edit-delete-icons-div">
            <button className="edit-icon" onClick={() => handleEdit(entry.id)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <div className="edit-hover">Edit</div>
            <button
              className="delete-icon"
              onClick={() => handleDelete(entry.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <div className="delete-hover">Delete</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SideEntries;
