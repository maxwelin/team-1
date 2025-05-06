import { createContext, useState } from "react";

const FormContext = createContext(undefined);

const FormContextProvider = ({ children }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [school, setSchool] = useState("Example University");
  const [education, setEducation] = useState("B.S. in Computer Science");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [githubURL, setGithubURL] = useState("https://github.com/johndoe");
  const [linkedInURL, setLinkedInURL] = useState(
    "https://linkedin.com/in/johndoe"
  );
  const [profilePic, setProfilePic] = useState(null);
  const [aboutMe, setAboutMe] = useState(
    "I'm a passionate developer with a love for clean code and elegant design."
  );
  const [header, setHeader] = useState("Front End Developer");

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export { FormContext, FormContextProvider };
