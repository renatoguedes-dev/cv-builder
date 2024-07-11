import { useState } from "react";
import ContentEdition from "./components/ContentEdition";
import ResumePage from "./components/ResumePage";
import "./styles/index.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Renato Guedes",
    email: "developer@example.com",
    phoneNumber: "+55 81 99555 4433",
    address: "Recife, Brazil",
    id: "0",
  });

  const [educationDetails, setEducationDetails] = useState([
    {
      university: "Federal University of Pernambuco",
      degree: "Bachelor of Computer Science",
      startDate: "2020",
      endDate: "2024",
      location: "",
      id: "0",
    },
  ]);
  const [workDetails, setWorkDetails] = useState([
    {
      companyName: "Technologies Company",
      positionTitle: "FullStack Developer",
      startDate: "2022",
      endDate: "2023",
      location: "",
      jobDescription:
        `- Assisted senior software engineers in developing and maintaining software applications.\n- Contributed to code reviews and participated in unit testing to ensure functionality and quality.`,
      id: "0",
    },
    {
      companyName: "Company Technologies",
      positionTitle: "Backend Developer",
      startDate: "2021",
      endDate: "2022",
      location: "",
      jobDescription:
        `- Assisted senior software engineers in developing and maintaining software applications.\n- Contributed to code reviews and participated in unit testing to ensure functionality and quality.`,
      id: "1",
    },
    {
      companyName: "Technologies Company",
      positionTitle: "Backend Developer Junior",
      startDate: "2020",
      endDate: "2021",
      location: "",
      jobDescription:
        `- Assisted senior software engineers in developing and maintaining software applications.\n- Contributed to code reviews and participated in unit testing to ensure functionality and quality.`,
      id: "2",
    },
  ]);

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
