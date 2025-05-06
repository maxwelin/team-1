import { useContext } from "react";
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
    setToggleForm,
    fileName,
    setFileName,
  } = useContext(FormContext);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setFirstName(form.fname.value.toUpperCase());
    setLastName(form.lname.value.toUpperCase());
    setSchool(form.school.value.toUpperCase());
    setEducation(form.education.value.toUpperCase());
    setEmail(form.email.value.toUpperCase());
    setPhoneNumber(form.telephone.value.toUpperCase());
    setGithubURL(form.github.value.toUpperCase());
    setLinkedInURL(form.linkedIn.value.toUpperCase());
    setAboutMe(form.about.value.toUpperCase());

    setToggleForm(false);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 max-w-[400px] border-2 bg-white p-4">
          <input
            type="text"
            name="fname"
            defaultValue={firstName}
            placeholder="First name"
          />
          <input
            type="text"
            name="lname"
            defaultValue={lastName}
            placeholder="Last name"
          />
          <input
            type="text"
            name="school"
            defaultValue={school}
            placeholder="School"
          />
          <input
            type="text"
            name="education"
            defaultValue={education}
            placeholder="Education"
          />
          <input
            type="email"
            name="email"
            defaultValue={email}
            placeholder="Email"
          />
          <input
            type="tel"
            name="telephone"
            defaultValue={phoneNumber}
            placeholder="Phone number"
          />
          <input
            type="url"
            name="github"
            defaultValue={githubURL}
            placeholder="Github"
          />
          <input
            type="url"
            name="linkedIn"
            defaultValue={linkedInURL}
            placeholder="LinkedIn"
          />
          <div className="relative">
            <label className="absolute" htmlFor="cv">
              Upload CV
            </label>
            <input className="opacity-0" type="file" accept=".pdf" name="cv" />
          </div>

          <div className="relative">
            <label htmlFor="profilePicture" className="absolute">
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
          <textarea
            name="about"
            defaultValue=""
            placeholder="About me"
          ></textarea>
          <input type="url" name="project" placeholder="Projects" />
          <textarea name="skills" placeholder="Skills"></textarea>
          <input type="color" name="colorTheme" />
          <select name="fontTheme">
            <option value="sans">Sans-serif</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>

          <button
            type="submit"
            className="cursor-pointer border border-white mt-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
