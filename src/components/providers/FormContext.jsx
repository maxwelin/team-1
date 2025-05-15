import { createContext, useRef, useState } from "react";

const FormContext = createContext(undefined);

const FormContextProvider = ({ children }) => {
  const [toggleForm, setToggleForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [githubURL, setGithubURL] = useState("https://github.com/");
  const [linkedInURL, setLinkedInURL] = useState("https://linkedin.com/");
  const [profilePic, setProfilePic] = useState(null);
  const [aboutMe, setAboutMe] = useState(
    "I'm a passionate developer with a love for clean code and elegant design."
  );
  const [header, setHeader] = useState("Header");
  const [fileName, setFileName] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [cvFileName, setCvFileName] = useState(null);
  const [skills, setSkills] = useState([]);
  const [bgColor, setBgColor] = useState("#000000");
  const [fontColor, setFontColor] = useState("#FFFFFF");
  const [accentColor, setAccentColor] = useState("#FF58C7");
  const [bgColorName, setBgColorName] = useState("Black #000000");
  const [fontColorName, setFontColorName] = useState("White #FFFFFF");
  const [accentColorName, setAccentColorName] = useState("Pink #FF58C7");
  const [fontFamily, setFontFamily] = useState("Helvetica, sans-serif");
  const [location, setLocation] = useState("Stockholm");
  const [author, setAuthor] = useState("Team Juan");
  const [projList, setProjList] = useState([]);

  const formRef = useRef(null);

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
        bgColor,
        fontColor,
        accentColor,
        bgColorName,
        fontColorName,
        accentColorName,
        fontFamily,
        location,
        author,
        projList,
        formRef,
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
        setBgColor,
        setFontColor,
        setAccentColor,
        setBgColorName,
        setFontColorName,
        setAccentColorName,
        setFontFamily,
        setLocation,
        setAuthor,
        setProjList,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export { FormContext, FormContextProvider };
