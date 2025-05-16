import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../providers/FormContext";
import { BsFiletypePdf, BsFiletypeJpg } from "react-icons/bs";
import { HiCloudArrowUp } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import AboveFold from "./AboveFold";
import FormToggleBtn from "../Common/FormToggleBtn";

const Form = () => {
  const [skillInput, setSkillInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [hoverSubmit, setHoverSubmit] = useState(false);
  const [hoverReset, setHoverReset] = useState(false);
  const [hoverProj, setHoverProj] = useState(false);
  const [hoverAdd, setHoverAdd] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    if (firstTimeUser) {
      const handleScroll = () => {
        setToggleBtn(window.scrollY > 500);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setToggleBtn(true);
    }
  }, []);

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
    firstTimeUser,
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
    projList,
    setFileName,
    cvFile,
    formRef,
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
    setProjList,
  } = useContext(FormContext);

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleProjImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImgUrl(imageUrl);
    }
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setCvFile(file);
      setCvFileName(file.name);
    }
  };

  const handleSaveProject = (e) => {
    e.preventDefault();

    const projObject = {
      title: projRef.current.value,
      desc: descRef.current.value,
      link: linkRef.current.value,
      img: imgUrl,
    };

    setProjList([...projList, projObject]);

    console.log(projList);

    setImgUrl("");
    projRef.current.value = "";
    descRef.current.value = "";
    linkRef.current.value = "";
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
    setBgColor("#FFFFFF");
    setFontColor("#000000");
    setAccentColor("#FF6200");
    setFontFamily("Helvetica, sans-serif");
  };

  const handleSubmit = () => {
    const form = formRefTwo.current;

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

  const handleResetAll = (e) => {
    handleStyleReset(e);
    setFirstName("");
    setLastName("");
    setSchool("");
    setEducation("");
    setEmail("");
    setPhoneNumber("");
    setGithubURL("https://github.com/");
    setLinkedInURL("https://linkedin.com/");
    setHeader("");
    setAboutMe("");

    const form = formRefTwo.current;

    form.fname.value = "";
    form.lname.value = "";
    form.school.value = "";
    form.education.value = "";
    form.email.value = "";
    form.telephone.value = "";
    form.github.value = "https://github.com/";
    form.linkedIn.value = "https://linkedin.com/";
    form.header.value = "";
    form.about.value = "";

    setProjList([]);
    setProfilePic(null);

    if (formRef.current) {
      const offset = 50;
      const top =
        formRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const projRef = useRef();
  const descRef = useRef();
  const linkRef = useRef();
  const imageRef = useRef();
  const formRefTwo = useRef();

  return (
    <>
      {firstTimeUser && <AboveFold />}
      <div className="flex flex-col items-start gap-6">
        <h1
          ref={formRef}
          className=" text-5xl text-center w-full mb-2 font-medium"
        >
          Tell Us About Yourself
        </h1>
        <p className=" text-lg text-center mb-2 w-full font-normal">
          Fill in all the fields below to build your personal portfolio. <br />{" "}
          Add your name, contact details, school, education, and links to GitHub
          and LinkedIn. <br /> Don’t forget to upload your CV and profile
          picture – everything is required to make your portfolio complete and
          ready to use.
        </p>
        <form ref={formRefTwo} onSubmit={handleSubmit} className="w-full">
          <div className="relative flex mb-10">
            <div className="flex flex-col gap-4 w-2/3">
              <input
                type="text"
                name="fname"
                defaultValue={firstName}
                placeholder="First name"
                className="outline-none  border-b w-full text-3xl font-light"
              />
              <input
                type="text"
                name="lname"
                defaultValue={lastName}
                placeholder="Last name"
                className="outline-none  border-b w-full text-3xl font-light"
              />
              <input
                type="text"
                name="school"
                defaultValue={school}
                placeholder="School"
                className="outline-none  border-b w-full text-3xl font-light "
              />
              <input
                type="text"
                name="education"
                defaultValue={education}
                placeholder="Education"
                className="outline-none  border-b w-full text-3xl font-light "
              />
              <input
                type="email"
                name="email"
                defaultValue={email}
                placeholder="Email"
                className="outline-none  border-b w-full text-3xl font-light "
              />
              <input
                type="tel"
                name="telephone"
                defaultValue={phoneNumber}
                placeholder="Phone number"
                className="outline-none  border-b w-full text-3xl font-light "
              />
              <input
                type="url"
                name="github"
                defaultValue={githubURL}
                placeholder="Github"
                className="outline-none  border-b w-full text-3xl font-light "
              />
              <input
                type="url"
                name="linkedIn"
                defaultValue={linkedInURL}
                placeholder="LinkedIn"
                className="outline-none  border-b w-full text-3xl font-light "
              />
              <div className="flex gap-6 w-full">
                <label className="relative w-full cursor-pointer">
                  <div className="flex justify-between items-center border-b text-3xl font-light ">
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
              </div>
            </div>
            <div className="shrink-0 relative w-fit mt-[-0%] h-[400px] ml-20">
              {profilePic ? (
                <>
                  {/* Offset ram bakom bilden */}
                  <div
                    style={{ borderColor: accentColor }}
                    className="absolute top-4 left-4 w-full h-full border-2 z-0"
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
                    className="absolute top-4 left-4 w-full h-full border-2 z-0"
                  ></div>

                  <label
                    htmlFor="projectImg"
                    className="absolute w-full h-full z-100 top-1/3 pointer-events-none"
                    style={{ color: fontColor }}
                  >
                    {" "}
                    <div className="flex flex-col text-center">
                      <HiCloudArrowUp className="text-6xl ml-auto mr-auto" />
                      <h3 className="text-2xl font-semibold">Upload image</h3>
                      <p className="text-sm">Image must be in .jpg or .png</p>
                    </div>
                  </label>
                  <input
                    className=" relative z-10 h-[400px] w-[300px] object-center object-cover border-1 grid place-content-center cursor-pointer"
                    style={{
                      borderColor: fontColor,
                      backgroundColor: bgColor,
                      color: bgColor,
                    }}
                    type="file"
                    accept="image/*"
                    name="projectImg"
                    ref={imageRef}
                    onChange={handleProfilePicUpload}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-80 mb-30 gap-1">
            <h3 className=" text-5xl text-center font-normal">
              What Are You Looking For?
            </h3>
            <p className="text-lg text-center mb-2">
              Write your availability and what you’re open to – internship, job,
              or freelance?
            </p>
            <input
              type="text"
              name="header"
              defaultValue={header}
              placeholder="Seeking LIA 2025 - Open to Opportunities"
              className="text-3xl text-left font-normal outline-none border-t pt-2"
            />
            <input
              type="text"
              name="about"
              defaultValue={about}
              placeholder="I'm a passionate developer with a love for clean code and elegant design..."
              className="outline-none border-t border-b w-full text-2xl font-thin  pb-15 pt-3"
            />
          </div>

          <div className="flex flex-col mt-80 mb-30">
            <h3 className=" text-5xl text-center font-normal">
              Got Any Projects To Show?
            </h3>
            <p className="text-center text-lg pt-4 mb-3">
              Upload an image, write a short description, and share a link to
              your GitHub or live demo.
            </p>
            <div className="relative flex flex-col items-center border-t w-full border-b pt-7 pb-7 mb-5 justify-around">
              {imgUrl ? (
                <>
                  <label
                    htmlFor="projectImg"
                    className="absolute top-7 w-1/2 pointer-events-none"
                    style={{ color: bgColor }}
                  >
                    {" "}
                    <img
                      className="h-[350px] rounded-2xl w-full mb-7 object-cover object-center"
                      src={imgUrl}
                    />
                  </label>
                  <input
                    className=" h-[350px] border-b-2 rounded-2xl w-1/2 cursor-pointer mb-7"
                    style={{ backgroundColor: fontColor }}
                    type="file"
                    accept="image/*"
                    name="projectImg"
                    ref={imageRef}
                    onChange={handleProjImgUpload}
                  />
                </>
              ) : (
                <>
                  <label
                    htmlFor="projectImg"
                    className="absolute top-37 pointer-events-none"
                    style={{ color: bgColor }}
                  >
                    {" "}
                    <div
                      className="flex flex-col text-center"
                      style={{ color: fontColor }}
                    >
                      <HiCloudArrowUp className="text-6xl ml-auto mr-auto" />
                      <h3 className="text-2xl font-semibold">Upload image</h3>
                      <p className="text-sm">Image must be in .jpg or .png</p>
                    </div>
                  </label>
                  <input
                    className=" h-[350px] border-1 rounded-2xl w-1/2 cursor-pointer mb-7"
                    style={{
                      borderColor: fontColor,
                      backgroundColor: bgColor,
                      color: bgColor,
                    }}
                    type="file"
                    accept="image/*"
                    name="projectImg"
                    ref={imageRef}
                    onChange={handleProjImgUpload}
                  />
                </>
              )}

              <div className="flex flex-col w-1/2 tracking-tighter">
                <input
                  type="text"
                  name="projTitle"
                  placeholder="Project title"
                  ref={projRef}
                  className="outline-none border-b text-3xl font-light py-1 pb-1 mb-3"
                />
                <input
                  type="text"
                  name="projDescription"
                  placeholder="Short description"
                  ref={descRef}
                  className="outline-none border-b text-3xl font-light py-1 pb-1 mb-3"
                />
                <input
                  type="url"
                  name="projLink"
                  placeholder="Link to /url"
                  ref={linkRef}
                  className="outline-none border-b text-3xl font-light py-1 pb-1 mb-4"
                />
                <button
                  type="button"
                  onMouseEnter={() => setHoverProj(true)}
                  onMouseLeave={() => setHoverProj(false)}
                  onClick={handleSaveProject}
                  style={{
                    backgroundColor: hoverProj ? bgColor : accentColor,
                    color: hoverProj ? fontColor : bgColor,
                    borderColor: hoverProj ? fontColor : accentColor,
                    transition: "all 0.2s ease-in-out",
                  }}
                  className="cursor-pointer h-10 w-full items-center border-2 border- rounded-4xl text-xl "
                >
                  SAVE PROJECT
                </button>
              </div>

              {projList.length > 0 && (
                <ul className="w-1/2 mt-7">
                  <p>
                    {projList.map((item, index) => {
                      return (
                        <li className="flex">
                          <p key={index} className="text-xl pb-2">
                            {index + 1}. {item.title}
                          </p>
                        </li>
                      );
                    })}
                  </p>
                </ul>
              )}
            </div>

            <div className="flex flex-col mt-80 mb-30 relative">
              <p className=" text-3xl text-left font-normal">Your skills</p>
              <input
                type="text"
                name="skills"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSkills(e);
                  }
                }}
                placeholder="Write your skills..."
                className="outline-none  border-t border-b w-full text-3xl font-light  py-1 pb-1 mb-5"
              />
              <button
                type="button"
                onMouseEnter={() => setHoverAdd(true)}
                onMouseLeave={() => setHoverAdd(false)}
                onClick={handleSkills}
                style={{
                  backgroundColor: hoverAdd ? bgColor : accentColor,
                  color: hoverAdd ? fontColor : bgColor,
                  borderColor: hoverAdd ? fontColor : accentColor,
                  transition: "all 0.2s ease-in-out",
                }}
                className="absolute top-14.5 -translate-y-1/2 right-0 items-center pl-4 pr-4 h-9 w-[100px] border-2 border-
          rounded-4xl text-xl cursor-pointer"
              >
                ADD
              </button>
              <div className="flex justify-around border-t border-b w-full text-3xl font-light  py-5 pb-5">
                {skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
                })}
              </div>
            </div>
          </div>

          <div className="w-full text-center mt-80">
            <p className="text-lg">
              Great! You've filled in all the details – now it’s time to make
              the portfolio truly yours. <br /> Customize the style to match
              your personality and see your changes instantly. You can always go
              back and make edits at any time. <br /> When you're happy with how
              it looks, hit "Generate Portfolio" to save or "Reset All" to start
              over.
            </p>
          </div>

          <div className="flex flex-col w-full gap-2.5 mt-30 mb-20">
            <p className="text-5xl text-center font-normal mb-5">
              Style Your Portfolio
            </p>
            <select
              style={{ backgroundColor: bgColor }}
              name="fontTheme"
              className="outline-none cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1 "
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

            <label className="outline-none relative flex items-center cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1">
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
                className="w-10 h-10 absolute right-0 inline-block border border-black rounded-md"
              ></span>
            </label>

            <label className="outline-none relative flex items-center cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1">
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
                className="w-10 h-10 absolute right-0 inline-block border border-black rounded-md"
              ></span>
            </label>
            <label className="outline-none relative flex items-center cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1">
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
                className="w-10 h-10 absolute right-0 inline-block border border-black rounded-md"
              ></span>
            </label>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleStyleReset}
                style={{ "--hover-color": accentColor }}
                className="flex max-w-fit items-end gap-3 cursor-pointer font-light hover:text-[var(--hover-color)]"
              >
                Reset styling <VscDebugRestart className="h-8 w-8" />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onMouseEnter={() => setHoverReset(true)}
              onMouseLeave={() => setHoverReset(false)}
              type="button"
              onClick={handleResetAll}
              style={{
                backgroundColor: hoverReset ? fontColor : bgColor,
                color: hoverReset ? bgColor : fontColor,
                borderColor: hoverReset ? fontColor : fontColor,
                transition: "all 0.2s ease-in-out",
              }}
              className="cursor-pointer h-10 w-[200px] items-center border-2 border- rounded-4xl mt-20 mb-20 text-xl "
            >
              RESET ALL
            </button>

            <button
              onMouseEnter={() => setHoverSubmit(true)}
              onMouseLeave={() => setHoverSubmit(false)}
              type="submit"
              style={{
                backgroundColor: hoverSubmit ? bgColor : accentColor,
                color: hoverSubmit ? fontColor : bgColor,
                borderColor: hoverSubmit ? fontColor : accentColor,
                transition: "all 0.2s ease-in-out",
              }}
              className="cursor-pointer h-10 w-[300px] items-center border-2 border- rounded-4xl mt-20 mb-20 text-xl "
            >
              GENERATE PORTFOLIO
            </button>
          </div>
          {toggleBtn && (
            <FormToggleBtn
              text="Preview portfolio"
              posY="top-8"
              posX="right-10"
              direction="right"
              func={handleSubmit}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
