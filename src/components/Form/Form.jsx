import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";
import { BsFiletypePdf, BsFiletypeJpg } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuFilePenLine } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";

const Form = () => {
  const [skillInput, setSkillInput] = useState("");

  const {
    firstName,
    lastName,
    school,
    education,
    email,
    phoneNumber,
    githubURL,
    linkedInURL,
    header,
    setFirstName,
    setLastName,
    setSchool,
    setEducation,
    setEmail,
    setPhoneNumber,
    setGithubURL,
    setLinkedInURL,
    setHeader,
    setAboutMe,
    profilePic,
    setProfilePic,
    setToggleForm,
    fileName,
    setFileName,
    cvFile,
    setCvFile,
    cvFileName,
    setCvFileName,
    skills,
    setSkills,
    bgColor,
    setBgColor,
    fontColor,
    setFontColor,
    accentColor,
    setAccentColor,
    bgColorName,
    setBgColorName,
    fontColorName,
    setFontColorName,
    accentColorName,
    setAccentColorName,
    fontFamily,
    setFontFamily,
  } = useContext(FormContext);

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setCvFile(file);
      setCvFileName(file.name);
    }
  };

  const handleColorChange = (e) => {
    const currentValue = e.target.value;
    const inputName = e.target.name;

    if (inputName === "bgColor") {
      setBgColor(currentValue);
      setBgColorName(currentValue.toUpperCase());
    } else if (inputName === "fontColor") {
      setFontColor(currentValue);
      setFontColorName(currentValue.toUpperCase());
    } else if (inputName === "accentColor") {
      setAccentColor(currentValue);
      setAccentColorName(currentValue.toUpperCase());
    } else if (inputName === "fontTheme") {
      setFontFamily(currentValue);
    }
  };

  const handleSkills = (e) => {
    e.preventDefault();
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
      console.log("Cleared input");
    }
  };

  const handleStyleReset = (e) => {
    e.preventDefault();
    setBgColor("#000000");
    setFontColor("#FFFFFF");
    setAccentColor("#FF58C7");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setFirstName(form.fname.value.toUpperCase());
    setLastName(form.lname.value.toUpperCase());
    setSchool(form.school.value.toUpperCase());
    setEducation(form.education.value.toUpperCase());
    setEmail(form.email.value);
    setPhoneNumber(form.telephone.value);
    setGithubURL(form.github.value);
    setLinkedInURL(form.linkedIn.value);
    setHeader(form.header.value);
    setAboutMe(form.about.value);

    setToggleForm(false);
  };

  return (
    <div className="flex flex-col items-start gap-6">
      <p className=" text-6xl text-left mb-2 font-medium">Form</p>
      <p className=" text-1xl text-left mb-2 font-normal">
        Fyll i formuläret nedan för att skapa din personliga portfolio.
        Informationen du skriver in visas direkt i portfolion under formuläret.
        När du är nöjd kan du ladda ner en färdig zip-fil med din portfolio som
        du kan använda, visa upp eller fortsätta bygga vidare på. Du kan när som
        helst uppdatera fälten för att se ändringar i realtid.
      </p>
      <form onSubmit={handleSubmit} className="w-full">
        <button
          type="submit"
          className="flex bg-white cursor-pointer p-1 pl-3 box-border rounded-3xl w-14 hover:bg-black hover:text-white mb-5"
        >
          <LuFilePenLine size={32} />
        </button>
        <div className="relative flex mb-10">
          <div className="flex flex-col gap-4 w-2/3">
            <input
              type="text"
              name="fname"
              defaultValue={firstName}
              placeholder="First name"
              style={{ borderColor: accentColor }}
              className="outline-none border-t border-b w-full text-3xl font-light"
            />
            <input
              type="text"
              name="lname"
              defaultValue={lastName}
              placeholder="Last name"
              style={{ borderColor: accentColor }}
              className="outline-none border-t border-b w-full text-3xl font-light"
            />
            <input
              type="text"
              name="school"
              defaultValue={school}
              placeholder="School"
              className="outline-none border-t border-b w-full text-3xl font-light "
            />
            <input
              type="text"
              name="education"
              defaultValue={education}
              placeholder="Education"
              className="outline-none border-t border-b w-full text-3xl font-light "
            />
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
              className="outline-none border-t border-b w-full text-3xl font-light "
            />
            <input
              type="tel"
              name="telephone"
              defaultValue={phoneNumber}
              placeholder="Phone number"
              className="outline-none border-t border-b w-full text-3xl font-light "
            />
            <input
              type="url"
              name="github"
              defaultValue={githubURL}
              placeholder="Github"
              className="outline-none border-t border-b w-full text-3xl font-light "
            />
            <input
              type="url"
              name="linkedIn"
              defaultValue={linkedInURL}
              placeholder="LinkedIn"
              className="outline-none border-t border-b w-full text-3xl font-light "
            />
            <div className="flex gap-6 w-full">
              <label className="relative w-full cursor-pointer">
                <div className="flex justify-between items-center border-t border-b text-3xl font-light ">
                  {cvFileName ? cvFileName : "Upload CV"} <BsFiletypePdf />
                </div>
                <input
                  className="opacity-0 absolute inset-0 w-full cursor-pointer"
                  type="file"
                  accept="application/pdf"
                  name="cv"
                  onChange={handleCVUpload}
                />
              </label>

              <div className="relative w-full cursor-pointer">
                <label
                  htmlFor="profilePicture"
                  className="absolute w-full flex justify-between items-center border-t border-b text-3xl font-light "
                >
                  {profilePic ? fileName : "Upload profile img"}
                  <BsFiletypeJpg />
                </label>
                <input
                  className="opacity-0 w-full h-full cursor-pointer"
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  onChange={handleProfilePicUpload}
                />
              </div>
            </div>
          </div>
          <div className="shrink-0 relative w-fit mt-[-0%] h-[400px] ml-20">
            {profilePic ? (
              <>
                {/* Offset ram bakom bilden */}
                <div
                  style={{ borderColor: accentColor }}
                  className="absolute top-4 left-4 w-full h-full border-1 z-0"
                ></div>

                {/* Själva bilden */}
                <img
                  className="relative z-10 h-[400px] w-[300px] object-center object-cover border-1"
                  src={profilePic}
                  alt=""
                />
              </>
            ) : (
              <>
                <div
                  style={{ borderColor: accentColor }}
                  className="absolute top-4 left-4 w-full h-full border-1 z-0"
                ></div>
                <div className="relative z-10 h-[400px] w-[300px] object-center object-cover border-1 grid place-content-center">
                  {/* <CgProfile className="text-white text-[200px]" /> */}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-30 mb-30">
          <input
            type="text"
            name="header"
            defaultValue={header}
            placeholder="Header for about"
            className="text-3xl text-left font-normal outline-none"
          />
          <input
            type="text"
            name="about"
            placeholder="Something about you/Cover letter"
            className="outline-none border-t border-b w-full text-2xl font-thin  pb-15 pt-3"
          />
        </div>

        <div className="flex flex-col mt-30 mb-30">
          <p className=" text-3xl text-left font-normal">
            Upload images of your projects
          </p>
          <div className="grid grid-cols-4 gap-4 border-t border-b pt-3 pb-3 mb-5">
            <div className="bg-gray-300 h-40 p-4">Project 1</div>
            <div className="bg-gray-300 p-4">Project 2</div>
            <div className="bg-gray-300 p-4">Project 3</div>
            <div className="bg-gray-300 p-4">Project 4</div>
            {/* <div className="bg-gray-300 h-20 p-4">Item 5</div>
            <div className="bg-gray-300 p-4">Item 6</div>
            <div className="bg-gray-300 p-4">Item 7</div>
            <div className="bg-gray-300 p-4">Item 8</div> */}
          </div>

          <div className="flex flex-col gap-6 relative">
            {["project1", "project2", "project3", "project4"].map(
              (item, index) => {
                const splitIndex = item.search(/\d/);
                const proj = item.slice(0, splitIndex);
                const number = item.slice(splitIndex);
                const label =
                  proj.charAt(0).toUpperCase() + proj.slice(1) + " " + number;

                return (
                  <div
                    key={index}
                    className="w-full flex border-2 border-b-white"
                  >
                    <label
                      htmlFor={item}
                      className={`text-white text-1xl text-left font-light absolute left-0`}
                    >
                      {label}
                    </label>
                    <input
                      type="url"
                      name={item}
                      placeholder="Link to project ex: url,netlify app or github repo"
                      className="outline-none bg-gray-100 w-[90%] text-1.5xl font-light text-black pl-4 ml-auto"
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="flex flex-col mt-30 mb-30 relative">
          <p className=" text-3xl text-left font-normal">Your skills</p>
          <input
            type="text"
            name="skills"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Write your skills..."
            className="outline-none  border-t border-b w-full text-3xl font-light  py-1 pb-1 mb-5"
          />
          <button
            onClick={handleSkills}
            style={{ backgroundColor: accentColor }}
            className="absolute top-15 -translate-y-1/2 right-0 items-center pl-4 pr-4 rounded-4xl  text-black transition duration-300 ease-in-out hover:bg-fuchsia-600 cursor-pointer text-2xl font-light "
          >
            Add skill
          </button>
          <div className="flex justify-around border-t border-b w-full text-3xl font-light  py-5 pb-5">
            {skills.map((skill, index) => {
              return <p key={index}>{skill}</p>;
            })}
          </div>
        </div>

        <div className="flex flex-col w-2/3 gap-2.5 mt-30 mb-20">
          <p className="text-3xl text-left font-normal mb-5">
            Style your Portfolio
          </p>
          <select
            style={{ backgroundColor: bgColor }}
            name="fontTheme"
            className="outline-none cursor-pointer border-t border-b w-full text-3xl font-light  pt-1 pb-1 "
            onChange={handleColorChange}
          >
            <option value="Helvetica">Helvetica</option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS </option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New </option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Impact">Impact</option>
          </select>

          <label className="outline-none relative flex items-center cursor-pointer border-t border-b w-full text-3xl font-light  pt-1 pb-1">
            {bgColorName}
            <input
              type="color"
              value={bgColor}
              onChange={handleColorChange}
              name="bgColor"
              className="opacity-0 cursor-pointer"
            />
            <span
              style={{ backgroundColor: bgColor }}
              className="w-10 h-10 absolute right-0 inline-block border rounded-md"
            ></span>
          </label>

          <label className="outline-none relative flex items-center cursor-pointer border-t border-b w-full text-3xl font-light  pt-1 pb-1">
            {fontColorName}
            <input
              type="color"
              value={fontColor}
              onChange={handleColorChange}
              name="fontColor"
              className="opacity-0 cursor-pointer"
            />
            <span
              style={{ backgroundColor: fontColor }}
              className="w-10 h-10 absolute right-0 inline-block rounded-md"
            ></span>
          </label>
          <label className="outline-none relative flex items-center cursor-pointer border-t border-b w-full text-3xl font-light  pt-1 pb-1">
            {accentColorName}
            <input
              type="color"
              value={accentColor}
              onChange={handleColorChange}
              name="accentColor"
              className="opacity-0 cursor-pointer"
            />
            <span
              style={{ backgroundColor: accentColor }}
              className="w-10 h-10 absolute right-0 inline-block rounded-md"
            ></span>
          </label>
          <div className="flex justify-end">
            <button
              onClick={handleStyleReset}
              style={{ "--hover-color": accentColor }}
              className="flex max-w-fit items-end gap-3 cursor-pointer font-light hover:text-[var(--hover-color)]"
            >
              Reset styling <VscDebugRestart className="h-8 w-8" />
            </button>
          </div>
        </div>

        <p className="text-1xl text-left mb-2 font-normal w-2/3">
          Fyll i formuläret nedan för att skapa din personliga portfolio.
          Informationen du skriver in visas direkt i portfolion under
          formuläret. När du är nöjd kan du ladda ner en färdig zip-fil med din
          portfolio som du kan använda, visa upp eller fortsätta bygga vidare
          på. Du kan när som helst uppdatera fälten för att se ändringar i
          realtid.
        </p>

        <button
          type="submit"
          style={{ backgroundColor: accentColor }}
          className="cursor-pointer items-center pl-4 pr-4 rounded-4xl mt-20 mb-20 text-black text-2xl transition duration-300 ease-in-out hover:bg-fuchsia-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
