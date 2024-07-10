import { useState } from "react";
import ContentEdition from "./components/ContentEdition";
import ResumePage from "./components/ResumePage";
import "./styles/index.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [educationDetails, setEducationDetails] = useState([]);
  const [workDetails, setWorkDetails] = useState([]);

  return (
    <div className="app-container">
      <ContentEdition
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
        workDetails={workDetails}
        setWorkDetails={setWorkDetails}
      />

      <ResumePage
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        workDetails={workDetails}
      />
    </div>
  );
}

export default App;
