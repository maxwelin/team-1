import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";

const Form = () => {
  const {
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
    const LastName = form[1].value;
    const School = form[2].value;
    const Education = form[3].value;
    const Email = form[4].value;
    const PhoneNumber = form[5].value;
    const GithubURL = form[6].value;
    const LinkedInURL = form[7].value;
    const AboutMe = form[8].value;

    setFirstName(firstName);
    setLastName(LastName);
    setSchool(School);
    setEducation(Education);
    setEmail(Email);
    setPhoneNumber(PhoneNumber);
    setGithubURL(GithubURL);
    setLinkedInURL(LinkedInURL);
    setAboutMe(AboutMe);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 max-w-[400px] border-2 bg-white">
          <input type="text" name="fname" placeholder="First name" />
          <input type="text" name="lname" placeholder="Last name" />
          <input type="text" name="school" placeholder="School" />
          <input type="text" name="education" placeholder="Education" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="telephone" placeholder="Tel" />
          <input type="url" name="github" placeholder="Github" />
          <input type="url" name="linkedIn" placeholder="LinkedIn" />
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
              placeholder=""
            />
          </div>
          <input type="text" name="header" placeholder="Add your header" />
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
