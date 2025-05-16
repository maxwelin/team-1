import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../providers/FormContext";
import { BsFiletypePdf } from "react-icons/bs";
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
  const [expInput, setExpInput] = useState("");

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
    location,
    githubURL,
    linkedInURL,
    header,
    about,
    quote,
    source,
    firstTimeUser,
    setFirstTimeUser,
    setFirstName,
    setLastName,
    setSchool,
    setEducation,
    setEmail,
    setPhoneNumber,
    setLocation,
    setGithubURL,
    setLinkedInURL,
    setHeader,
    setAbout,
    profilePic,
    setProfilePic,
    setToggleForm,
    projList,
    experience,
    setFileName,
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
    setQuote,
    setSource,
    setFontFamily,
    setProjList,
    setExperience,
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
    }
    if (expInput.trim() !== "") {
      setExperience(expInput);
      setExpInput("");
    }
    console.log("Cleared input");
  };

  const handleStyleReset = (e) => {
    e.preventDefault();
    setBgColor("#FFFFFF");
    setFontColor("#000000");
    setAccentColor("#FF6200");
    setFontFamily("Helvetica, sans-serif");
  };

  const handleSkillReset = (e) => {
    e.preventDefault();
    setExperience("");
    setSkills("");
  };

  const handleSubmit = () => {
    const form = formRefTwo.current;
    setFirstTimeUser(false);

    setFirstName(form.fname.value.toUpperCase());
    setLastName(form.lname.value.toUpperCase());
    setSchool(form.school.value.toUpperCase());
    setEducation(form.education.value.toUpperCase());
    setEmail(form.email.value);
    setPhoneNumber(form.telephone.value);
    setGithubURL(form.github.value);
    setLinkedInURL(form.linkedIn.value);
    setHeader(form.header.value);
    setAbout(form.about.value);
    setLocation(form.location.value);

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
    setAbout("");
    setLocation("");
    setQuote("The hardest problem in web development? Centering a div.");
    setSource("Every web developer, at some point");

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
    form.location.value = "";

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
        and LinkedIn. <br /> Don’t forget to upload your CV and profile picture
        – everything is required to make your portfolio complete and ready to
        use.
      </p>
      <form ref={formRefTwo} onSubmit={handleSubmit} className="w-full">
        <div className="relative flex w-1/2 mr-auto ml-auto mb-10">
          <div className="flex flex-col gap-4 w-full">
            <div className="shrink-0 relative mr-auto ml-auto w-fit mt-5 mb-10 h-[400px]">
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
                      <h3 className="text-2xl font-semibold">
                        Upload Profile Picture
                      </h3>
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
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Location"
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
        </div>

        <div className="flex flex-col w-1/2 mr-auto ml-auto mt-80 mb-30 gap-1">
          <h3 className=" text-5xl text-center font-normal mb-5">
            What Are You Looking For?
          </h3>
          <p className="text-lg text-center mb-3">
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
            placeholder="I'm a passionate developer with a love for clean code and..."
            className="outline-none border-t border-b w-full text-2xl font-thin  pb-15 pt-3"
          />
        </div>

        <div className="flex flex-col mt-80 mb-30">
          <h3 className=" text-5xl text-center font-normal">
            Got Any Projects To Show?
          </h3>
          <p className="text-center text-lg pt-4 mb-3">
            Upload an image, write a short description, and share a link to your
            GitHub or live demo.
          </p>
          <div className="relative flex flex-col items-center border-t w-1/2 mr-auto ml-auto border-b pt-7 pb-7 mb-5 justify-around">
            {imgUrl ? (
              <>
                <label
                  htmlFor="projectImg"
                  className="absolute top-7 pointer-events-none h-[350px] w-full"
                  style={{ color: bgColor }}
                >
                  {" "}
                  <img
                    className="h-[350px] rounded-2xl min-w-full mb-7 object-cover max-h-full"
                    src={imgUrl}
                  />
                </label>
                <input
                  className=" h-[350px] border-b-2 rounded-2xl cursor-pointer mb-7"
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
                    <h3 className="text-2xl wfont-semibold">Upload image</h3>
                    <p className="text-sm">Image must be in .jpg or .png</p>
                  </div>
                </label>
                <input
                  className=" h-[350px] border-1 w-full rounded-2xl cursor-pointer mb-7"
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

            <div className="flex flex-col w-full tracking-tighter">
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
              <ul className="w-full mt-7">
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
            <div className="flex w-full justify-end mt-3">
              <button
                type="button"
                onClick={() => setProjList([])}
                style={{ "--hover-color": accentColor }}
                className="flex max-w-fit items-end gap-3 cursor-pointer font-light hover:text-[var(--hover-color)]"
              >
                Reset projects <VscDebugRestart className="h-8 w-8" />
              </button>
            </div>
          </div>

          <div className="flex flex-col w-1/2 mr-auto ml-auto mt-80 mb-30 relative">
            <p className=" text-5xl text-center font-normal">Your skills</p>
            <p className="text-center text-lg pt-4 mb-8">
              What are you good at? Add one skill at a time - like "React",
              "Figma" or "CSS"
            </p>
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
              className="outline-none w-full text-3xl font-light py-1 pb-1"
            />
            <input
              type="text"
              name="experience"
              value={expInput}
              onChange={(e) => setExpInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSkills(e);
                }
              }}
              placeholder="Write your skills..."
              className="outline-none border-t border-b w-full text-2xl font-light py-1 pb-1 mb-5"
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
              className="absolute top-35 -translate-y-1/2 right-0 items-center pl-4 pr-4 h-9 w-[100px] border-2 border-
          rounded-4xl text-xl cursor-pointer"
            >
              ADD
            </button>
            <div className="flex flex-col border-b w-full h-fit-content font-light justify-center">
              {skills.length === 0 ? (
                <div className="flex flex-col justify-center items-center relative h-[300px]">
                  <div className="flex justify-center">
                    <p className="text-6xl">Write your skills</p>
                  </div>
                  <div className="bottom-0 left-0 absolute">
                    <p
                      style={{ color: accentColor }}
                      className="text-md text-left mb-4"
                    >
                      Write something about your skills or experience
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-8 py-7 pb-7">
                  <div className="flex flex-wrap items-center justify-around">
                    {skills.map((skill, index) => (
                      <p
                        key={index}
                        className="text-5xl font-bold flex-grow-0 flex-shrink-0 basis-1/5"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                  {experience && (
                    <span
                      style={{ color: accentColor }}
                      className="text-md w-1/2 mt-2"
                    >
                      {experience}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-end mt-3">
              <button
                type="button"
                onClick={handleSkillReset}
                style={{ "--hover-color": accentColor }}
                className="flex max-w-fit items-end gap-3 cursor-pointer font-light hover:text-[var(--hover-color)]"
              >
                Reset skills <VscDebugRestart className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 text-center mt-80 ml-auto mr-auto">
          <h3 className="text-5xl mb-5">Your Quote</h3>
          <p className="text-lg text-center mb-10">
            Share a quote that inspires you – lyrics, a saying, or something
            personal. <br /> Include who said it, if you want. Both fields are
            optional.
          </p>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setQuote(e.target.value);
              }
            }}
            name="quote"
            placeholder="Quote"
            className="outline-none border-b w-full text-3xl font-light "
          />
          <h3 className="text-7xl text-left italic overflow-hidden opacity-25 tracking-tighter mt-10 mb-50">
            "{quote}"
          </h3>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setSource(e.target.value);
              }
            }}
            name="source"
            placeholder="Who said it?"
            className="outline-none border-b w-full text-3xl font-light "
          />
          <h4 className="text-right text-3xl opacity-30 tracking-tighter">
            -{source}
          </h4>
        </div>

        <div className="flex flex-col w-1/2 ml-auto mr-auto gap-2.5 mt-80 mb-30">
          <h3 className="text-5xl text-center font-normal mb-5">
            Style Your Portfolio
          </h3>
          <p className="text-lg text-center mb-10">
            Great! You've filled in all the details – now it’s time to make the
            portfolio truly yours. <br /> Customize the style to match your
            personality and see your changes instantly. You can always go back
            and make edits at any time. <br /> When you're happy with how it
            looks, hit "Generate Portfolio" to save or "Reset All" to start
            over.
          </p>
          <select
            style={{ backgroundColor: bgColor }}
            name="fontTheme"
            className="outline-none cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1 "
            onChange={handleColorChange}
          >
            <option disabled selected hidden>
              Font style
            </option>
            <option style={{ fontFamily: "Helvetica" }} value="Helvetica">
              Helvetica
            </option>
            <option style={{ fontFamily: "Arial" }} value="Arial">
              Arial
            </option>
            <option style={{ fontFamily: "Verdana" }} value="Verdana">
              Verdana
            </option>
            <option style={{ fontFamily: "Tahoma" }} value="Tahoma">
              Tahoma
            </option>
            <option style={{ fontFamily: "Trebuchet MS" }} value="Trebuchet MS">
              Trebuchet MS{" "}
            </option>
            <option style={{ fontFamily: "Georgia" }} value="Georgia">
              Georgia
            </option>
            <option
              style={{ fontFamily: "Times New Roman" }}
              value="Times New Roman"
            >
              Times New Roman
            </option>
            <option style={{ fontFamily: "Courier New" }} value="Courier New">
              Courier New{" "}
            </option>
            <option
              style={{ fontFamily: "Lucida Sans Unicode" }}
              value="Lucida Sans Unicode"
            >
              Lucida Sans Unicode
            </option>
            <option style={{ fontFamily: "Impact" }} value="Impact">
              Impact
            </option>
          </select>

          <label className="outline-none relative flex items-center cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1">
            Background color
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
            <p className="ml-auto mr-30 text-xl">{bgColor.toUpperCase()}</p>
          </label>

          <label className="outline-none relative flex items-center cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1">
            Font color
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
            <p className="ml-auto mr-30 text-xl">{fontColor.toUpperCase()}</p>
          </label>
          <label className="outline-none relative flex items-center cursor-pointer border-b w-full text-3xl font-light  pt-1 pb-1">
            Accent color
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
            <p className="ml-auto mr-30 text-xl">{accentColor.toUpperCase()}</p>
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
        <div className="flex justify-between w-1/2 mr-auto ml-auto">
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
  );
};

export default Form;
