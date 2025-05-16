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
  const [about, setAbout] = useState("");
  const [header, setHeader] = useState("");
  const [fileName, setFileName] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [cvFileName, setCvFileName] = useState(null);
  const [skills, setSkills] = useState([]);
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [fontColor, setFontColor] = useState("#000000");
  const [accentColor, setAccentColor] = useState("#FF6200");
  const [bgColorName, setBgColorName] = useState("White #FFFFFF");
  const [fontColorName, setFontColorName] = useState("Black #000000");
  const [accentColorName, setAccentColorName] = useState("Orange #FF6200");
  const [fontFamily, setFontFamily] = useState("Helvetica, sans-serif");
  const [location, setLocation] = useState("");
  const [author, setAuthor] = useState("Team Juan");
  const [projList, setProjList] = useState([]);
  const [firstTimeUser, SetFirstTimeUser] = useState(true);
  const [experience, setExperience] = useState("");

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
        about,
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
        firstTimeUser,
        experience,
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
        setAbout,
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
        SetFirstTimeUser,
        setExperience,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export { FormContext, FormContextProvider };
