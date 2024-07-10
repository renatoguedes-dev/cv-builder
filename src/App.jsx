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

  return (
    <div className="app-container">
      <ContentEdition
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationDetails={educationDetails}
        setEducationDetails={setEducationDetails}
      />

      <ResumePage
        personalDetails={personalDetails}
        educationDetails={educationDetails}
      />
    </div>
  );
}

export default App;
