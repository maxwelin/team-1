import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";

const Form = () => {
  const {
    firstName,
    lastName,
    school,
    education,
    email,
    phoneNumber,
    githubURL,
    linkedInURL,
    setFirstName,
    setLastName,
    setSchool,
    setEducation,
    setEmail,
    setPhoneNumber,
    setGithubURL,
    setLinkedInURL,
    setAboutMe,
    profilePic,
    setProfilePic,
    setHeader,
    setToggleForm,
  } = useContext(FormContext);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    console.log(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const [fileName, setFileName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form[0].value;
    const lastName = form[1].value;
    const school = form[2].value;
    const education = form[3].value;
    const email = form[4].value;
    const phoneNumber = form[5].value;
    const githubURL = form[6].value;
    const linkedInURL = form[7].value;
    const aboutMe = form[8].value;

    setFirstName(firstName);
    setLastName(lastName);
    setSchool(school);
    setEducation(education);
    setEmail(email);
    setPhoneNumber(phoneNumber);
    setGithubURL(githubURL);
    setLinkedInURL(linkedInURL);
    setAboutMe(aboutMe);

    setToggleForm(false);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 max-w-[400px] border-2 bg-white">
          <input
            type="text"
            name="fname"
            placeholder={firstName || "First name"}
          />
          <input
            type="text"
            name="lname"
            placeholder={lastName || "Last name"}
          />
          <input type="text" name="school" placeholder={school || "School"} />
          <input
            type="text"
            name="education"
            placeholder={education || "Education"}
          />
          <input type="email" name="email" placeholder={email || "Email"} />
          <input
            type="tel"
            name="telephone"
            placeholder={phoneNumber || "Phone number"}
          />
          <input type="url" name="github" placeholder={githubURL || "Github"} />
          <input
            type="url"
            name="linkedIn"
            placeholder={linkedInURL || "LinkedIn"}
          />
          <input type="file" accept=".pdf" name="cv" />
          <div>
            <label className="absolute" htmlFor="profilePicture">
              {profilePic ? fileName : "Upload profile img"}
            </label>
            <input
              className="opacity-0"
              type="file"
              accept="image/*"
              name="profilePicture"
              onChange={handleImageUpload}
            />
          </div>
          <input type="text" name="header" placeholder="Header" />
          <textarea name="about" placeholder="About me"></textarea>
          <input type="url" name="project" placeholder="Projects" />
          <textarea name="skills" placeholder="Skills"></textarea>
          <input type="color" name="colorTheme" />
          <select name="fontTheme">
            <option value="sans">Sans-serif</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
          <button type="submit" className="cursor-pointer border border-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
