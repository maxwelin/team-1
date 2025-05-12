import { createContext, useState } from "react";

const FormContext = createContext(undefined);

const FormContextProvider = ({ children }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [firstName, setFirstName] = useState("First name");
  const [lastName, setLastName] = useState("Last name");
  const [school, setSchool] = useState("School");
  const [education, setEducation] = useState("Education");
  const [email, setEmail] = useState("Example@email.com");
  const [phoneNumber, setPhoneNumber] = useState("Phone number");
  const [githubURL, setGithubURL] = useState("https://github.com/");
  const [linkedInURL, setLinkedInURL] = useState("https://linkedin.com/");
  const [profilePic, setProfilePic] = useState(null);
  const [aboutMe, setAboutMe] = useState(
    "I'm a passionate developer with a love for clean code and elegant design."
  );
  const [header, setHeader] = useState("Front End Developer");
  const [fileName, setFileName] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [cvFileName, setCvFileName] = useState(null);
  const [skills, setSkills] = useState([]);

  return (
    <FormContext.Provider
      value={{
        toggleForm,
        firstName,
        lastName,
        school,
        education,
        email,
        phoneNumber,
        githubURL,
        linkedInURL,
        profilePic,
        aboutMe,
        header,
        fileName,
        cvFile,
        cvFileName,
        skills,
        setToggleForm,
        setFirstName,
        setLastName,
        setSchool,
        setEducation,
        setEmail,
        setPhoneNumber,
        setGithubURL,
        setLinkedInURL,
        setProfilePic,
        setAboutMe,
        setHeader,
        setFileName,
        setCvFile,
        setCvFileName,
        setSkills,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export { FormContext, FormContextProvider };
