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

  function hexToRgb(hex) {
    const sanitized = hex.replace("#", "");
    const bigint = parseInt(sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }

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
      inputFocus();
    }
    // if (expInput.trim() !== "") {
    //   setExpInput(expInput);
    // }
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
    setExpInput("");
    setSkills("");
    textareaFocusRef.current.value = "";
  };

  const inputFocus = () => {
    inputFocusRef.current.focus();
  };

  const textareaFocus = () => {
    textareaFocusRef.current.focus();
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
    setExperience(form.experience.value);
    setQuote(form.quote.value);
    setSource(form.source.value);

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
    setGithubURL("https://github.com/yourname");
    setLinkedInURL("https://linkedin.com/yourname");
    setHeader("");
    setAbout("");
    setLocation("");
    setExperience("");
    setQuote("");
    setSource("");

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
    form.experience.value = "";
    form.quote.value = "";
    form.source.value = "";

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
  const inputFocusRef = useRef();
  const textareaFocusRef = useRef();

  return (
    <div className="flex flex-col items-start gap-6">
      <h1
        ref={formRef}
        className=" text-5xl text-center w-full mb-2 font-medium"
      >
        Introduce Yourself
      </h1>
      <p className=" text-lg text-center mb-2 w-1/2 mr-auto ml-auto font-normal">
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
                    className="absolute top-4 left-4 w-full h-full border-2 z-0 rounded-2xl"
                  ></div>

                  {/* Själva bilden */}
                  <img
                    className="relative z-10 h-[400px] w-[300px] object-center object-cover border-1 rounded-2xl"
                    src={profilePic}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div
                    style={{ borderColor: accentColor }}
                    className="absolute top-4 left-4 w-full h-full border-2 z-0 rounded-2xl"
                  ></div>

                  <label
                    htmlFor="projectImg"
                    className="absolute w-full h-full z-100 top-0 rounded-2xl pt-32 pointer-events-none"
                    style={{
                      color: fontColor,
                      backgroundColor: `${fontColor + "20"}`,
                    }}
                  >
                    {" "}
                    <div className="flex flex-col text-center">
                      <HiCloudArrowUp
                        style={{ color: accentColor }}
                        className="text-6xl ml-auto mr-auto"
                      />
                      <h3 className="text-2xl font-semibold">
                        Upload Profile Picture
                      </h3>
                      <p className="text-sm">Image must be in .jpg or .png</p>
                    </div>
                  </label>
                  <input
                    className="relative hover:scale-101 transition-all z-10 h-[400px] w-[300px] object-center object-cover rounded-2xl grid place-content-center cursor-pointer"
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
              style={{ color: fontColor }}
              defaultValue={firstName}
              placeholder="First name"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />

            <input
              type="text"
              name="lname"
              defaultValue={lastName}
              style={{ color: fontColor }}
              placeholder="Last name"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="text"
              style={{ color: fontColor }}
              name="school"
              defaultValue={school}
              placeholder="School"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="text"
              name="education"
              defaultValue={education}
              placeholder="Education"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="tel"
              name="telephone"
              defaultValue={phoneNumber}
              placeholder="Phone number"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Location"
              className="outline-none border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="text"
              name="github"
              defaultValue={githubURL}
              placeholder="https://github.com/yourprofile"
              className="outline-none  border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <input
              type="text"
              name="linkedIn"
              defaultValue={linkedInURL}
              placeholder="https://linkedin.com/yourprofile"
              className="outline-none  border-b w-full text-3xl focus:placeholder-transparent placeholder:font-normal"
            />
            <div className="flex gap-6 w-full border-b hover:pb-1 transition-all duration-200">
              <label className="relative w-full">
                <div className="flex justify-between items-center text-3xl ">
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

        <div className="flex flex-col w-1/2 mx-auto mt-80 mb-0 gap-2">
          <h3 className="text-5xl text-center font-normal mb-1">
            What Are You Looking For?
          </h3>
          <p className="text-lg text-center mb-7">
            Write your availability and what you’re open to – internship, job or
            freelance?
          </p>

          {/* Header textarea – större */}
          <div className="flex relative flex-col py-2">
            <label
              style={{ color: fontColor, backgroundColor : bgColor }}
              className="absolute font-semibold rounded-2xl top-2 text-lg z-10 italic pl-5 pt-5 pr-5"
            >
              What is this portfolio for? Write your header here:
            </label>
            <textarea
              name="header"
              defaultValue={header}
              placeholder="Seeking LIA 2025 - Open to opportunities..."
              style={{
                boxShadow: `0px 0px 15px ${fontColor + "50"}`,
              }}
              className="focus:placeholder-transparent resize-none pt-18 pl-5 pr-5 rounded-2xl h-[300px] w-full font-medium outline-none placeholder:font-normal text-4xl"
            />
          </div>

          {/* About textarea */}
          <div className="relative flex flex-col">
            <label
              style={{ color: fontColor, backgroundColor : bgColor }}
              className="absolute font-semibold top-0 rounded-2xl z-10 text-lg italic pl-5 pt-5 pr-5"
            >
              Something about you, like a cover letter:
            </label>

            <textarea
              name="about"
              defaultValue={about}
              placeholder="I'm a creative and detail-oriented person who enjoys working with design and layout..."
              style={{
                boxShadow: `0px 0px 15px ${fontColor + "50"}`,
              }}
              className="focus:placeholder-transparent  text-xl resize-none pt-18 pl-5 pr-5 rounded-2xl h-[300px] w-full font-medium outline-none placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex flex-col mt-80 mb-30">
          <h3 className=" text-5xl w-1/2 mr-auto ml-auto text-center font-normal">
            Got Any Projects To Show?
          </h3>
          <p className="text-center w-1/2 mr-auto ml-auto text-lg pt-4 mb-7">
            Upload an image, write a short description, and share a link to your
            GitHub or live demo.
          </p>
          <div className="relative flex flex-col items-center w-1/2 mr-auto ml-auto pt-7 pb-7 mb-5 justify-around">
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
                  className=" h-[350px] border-b-2 rounded-2xl cursor-pointer mb-8"
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
                    <HiCloudArrowUp
                      style={{ color: accentColor }}
                      className="text-6xl ml-auto z-10 mr-auto group-hover:translate-y-3"
                    />
                    <h3 className="text-2xl z-10 font-semibold">
                      Upload project image
                    </h3>
                    <p className="text-sm z-10">
                      Image must be in .jpg or .png
                    </p>
                  </div>
                </label>
                <input
                  className=" h-[350px]  transition-all w-full hover:scale-101 z-0 rounded-2xl cursor-pointer mb-7"
                  style={{
                    borderColor: fontColor,
                    backgroundColor: `${fontColor + "20"}`,
                    color: "transparent",
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
                className="outline-none border-b text-3xl font-light py-1 pb-1 mb-3 focus:placeholder-transparent placeholder:font-normal"
              />
              <input
                type="text"
                name="projDescription"
                placeholder="Short description"
                ref={descRef}
                className="outline-none border-b text-3xl font-light py-1 pb-1 mb-3 focus:placeholder-transparent placeholder:font-normal"
              />
              <input
                type="url"
                name="projLink"
                placeholder="Link to /url"
                ref={linkRef}
                className="outline-none border-b text-3xl font-light py-1 pb-1 mb-4 focus:placeholder-transparent placeholder:font-normal"
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

          <div className="flex flex-col w-1/2 mr-auto ml-auto mt-80 mb-30">
            <p className=" text-5xl text-center font-normal">
              Technical Skills
            </p>
            <p className="text-center text-xl pt-4 mb-7">
              What are you good at or what have you learned? Add as many skills
              as you like – for example “React”, “Figma” or “CSS”. Then write a
              few sentences about your experience working with these tools or
              technologies.
            </p>
            <div className="relative">
              <input
                type="text"
                name="skills"
                value={skillInput}
                ref={inputFocusRef}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSkills(e);
                    inputFocus(e);
                  }
                }}
                placeholder="Add a skill....."
                className="focus:placeholder-transparent placeholder:font-normal outline-none relative w-full border-b text-3xl font-light py-1 pb-1 mb-3"
              />
              <div className="flex justify-start flex-wrap gap-2 items-center mb-3">
                {skills &&
                  skills.map((skill, index) => (
                    <p
                      key={index}
                      style={{ color: bgColor, backgroundColor: fontColor }}
                      className="text-2xl text-center px-2 py-1 rounded-sm w-max"
                    >
                      {skill}
                    </p>
                  ))}
              </div>
              <div className="relative">
                <label
                  style={{ color: fontColor, backgroundColor : bgColor }}
                  className="absolute rounded-2xl font-semibold top-0 z-10 text-lg italic pl-5 pt-5 pr-5"
                >
                  Describe your skills and how you've applied them:
                </label>
                <textarea
                  type="text"
                  name="experience"
                  maxLength={300}
                  ref={textareaFocusRef}
                  defaultValue={experience}
                  style={{
                    boxShadow: `0px 0px 15px ${fontColor + "50"}`,
                  }}
                  // onChange={(e) => setExpInput(e.target.value)}
                  placeholder="I’ve applied my skills in HTML, CSS, JavaScript, and React in various school projects, both individually and in team settings..."
                  className="focus:placeholder-transparent text-xl resize-none pt-18 pl-5 pr-5 rounded-2xl h-[300px] w-full font-medium outline-none placeholder:font-normal"
                ></textarea>
              </div>

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
                className="absolute top-0 right-0 items-center pl-4 pr-4 h-9 w-[100px] border-2 border-
          rounded-4xl text-xl cursor-pointer"
              >
                ADD
              </button>
            </div>

            <div className="flex justify-end">
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

        <div className="flex flex-col w-1/2 mx-auto mt-80 gap-2">
          <h3 className="text-5xl text-center font-normal mb-2">Your Quote</h3>
          <p className="text-lg text-center mb-5">
            Share a quote that inspires you – lyrics, a saying, or something
            personal. <br />
            Include who said it, if you want. Both fields are optional.
          </p>

          {/* Quote textarea */}
          <div className="flex flex-col relative py-2">
            <label
              style={{ color: fontColor, backgroundColor : bgColor }}
              className="absolute rounded-2xl font-semibold z-10 top-2 text-lg italic pl-5 pt-5 pr-5"
            >
              Write your quote here:
            </label>
            <textarea
              type="text"
              name="quote"
              maxLength={300}
              defaultValue={quote}
              style={{
                boxShadow: `0px 0px 15px ${fontColor + "50"}`,
              }}
              // onChange={(e) => setExpInput(e.target.value)}
              placeholder={`"The hardest problem in web development? Centering a div."`}
              className="italic text-4xl resize-none pt-12 pl-5 pr-5 rounded-2xl h-[300px] w-full font-medium outline-none placeholder:font-normal focus:placeholder-transparent"
            ></textarea>
          </div>

          {/* Source input */}
          <div className="flex relative flex-col">
            <label
              style={{ color: fontColor }}
              className="absolute font-semibold top-0 text-lg italic pl-5 pt-5 pr-5"
            >
              Who said it? Write here:
            </label>
            <input
              type="text"
              name="source"
              defaultValue={source}
              style={{
                boxShadow: `0px 0px 15px ${fontColor + "50"}`,
              }}
              // onChange={(e) => setExpInput(e.target.value)}
              placeholder="-Every web developer, at some point"
              className="text-2xl resize-none pl-5 pr-5 pt-6 rounded-2xl h-[100px] w-full font-medium outline-none placeholder:font-normal focus:placeholder-transparent"
            ></input>
          </div>
        </div>

        <div className="flex flex-col w-1/2 ml-auto mr-auto gap-2.5 mt-80 mb-30">
          <h3 className="text-5xl text-center font-normal mb-5">
            Style Your Portfolio
          </h3>
          <p className="text-lg text-center mb-7">
            Great! You've filled in all the details – now it’s time to make the
            portfolio truly yours. <br /> Customize the style to match your
            personality and see your changes instantly. You can always go back
            and make edits at any time. <br /> When you're happy with how it
            looks, hit <span className="italic">"Generate Portfolio"</span> to
            save or <span className="">"Reset All"</span> to start over.
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
