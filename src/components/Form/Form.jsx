import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../providers/FormContext";
import { BsFiletypePdf } from "react-icons/bs";
import { HiCloudArrowUp } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
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
    form.github.value = "https://github.com/yourname";
    form.linkedIn.value = "https://linkedin.com/yourname";
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
      <p className=" text-lg text-center mb-2 w-1/2 ml-auto mr-auto font-normal">
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
                    className="relative z-10 h-[400px] w-[300px] object-center object-cover border-1 rounded-2xl grid place-content-center cursor-pointer"
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
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
            />

            <input
              type="text"
              name="lname"
              defaultValue={lastName}
              placeholder="Last name"
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
            />
            <input
              type="text"
              name="school"
              defaultValue={school}
              placeholder="School"
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
            />
            <input
              type="text"
              name="education"
              defaultValue={education}
              placeholder="Education"
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
            />
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
            />
            <input
              type="tel"
              name="telephone"
              defaultValue={phoneNumber}
              placeholder="Phone number"
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
            />
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Location"
              className="outline-none border-b w-full text-3xl font-light placeholder-gray-400 text-black border-black focus:placeholder-transparent"
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

        <div className="flex flex-col w-1/2 mx-auto mt-80 mb-0 gap-2">
          <h3 className="text-5xl text-center font-normal mb-2">
            What you’re Looking For?
          </h3>
          <p className="text-lg text-center">
            Write your availability and what you’re open to – internship, job,
            or freelance.
          </p>

          {/* Header textarea – större */}
          <div className="flex flex-col border-t border-b py-2">
            <label className="text-sm italic text-black">
              Write your header here:
            </label>
            <textarea
              name="header"
              defaultValue={header}
              placeholder="Seeking LIA 2025 - Open to opportunities..."
              className="resize-none text-[4rem] leading-[4.5rem] font-medium text-gray-400 focus:text-black placeholder-gray-400 outline-none transition-colors h-[260px] focus:placeholder-transparent"
            />
          </div>

          {/* About textarea */}
          <div className="flex flex-col border-b">
            <label className="text-sm italic mb-2 text-black">
              Something about you like a cover letter:
            </label>
            <textarea
              name="about"
              defaultValue={about}
              placeholder="I'm a creative and detail-oriented person who enjoys working with design and layout..."
              className="resize-none text-xl font-medium text-gray-400 focus:text-black placeholder-gray-400 outline-none transition-colors leading-relaxed h-[300px] focus:placeholder-transparent"
            />
          </div>
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
                maxLength={100}
                placeholder="Project title"
                ref={projRef}
                className="outline-none border-b text-3xl font-light py-1 pb-1 mb-3 focus:placeholder-transparent"
              />
              <input
                type="text"
                name="projDescription"
                placeholder="Short description"
                maxLength={160}
                ref={descRef}
                className="outline-none border-b text-3xl font-light py-1 pb-1 mb-3 focus:placeholder-transparent"
              />
              <input
                type="url"
                name="projLink"
                placeholder="Link to /url"
                ref={linkRef}
                className="outline-none border-b text-3xl font-light py-1 pb-1 mb-4 focus:placeholder-transparent"
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
                {projList.map((item, index) => {
                  return (
                    <li key={index} className="flex">
                      <p className="text-xl pb-2">
                        {index + 1}. {item.title}
                      </p>
                    </li>
                  );
                })}
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
            <p className="text-center text-xl pt-4 mb-8">
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
                className="outline-none relative w-full border-b text-3xl font-light py-1 pb-1 mb-3"
              />
              <div className="flex justify-start flex-wrap gap-2 items-center mb-3">
                {skills &&
                  skills.map((skill, index) => (
                    <p
                      key={index}
                      style={{ color: bgColor, backgroundColor: fontColor }}
                      className="text-2xl text-center px-2 py-1 rounded-sm w-max"
                    >
                      {skill.toUpperCase()}
                    </p>
                  ))}
              </div>
              <div className="relative">
                <textarea
                  type="text"
                  name="experience"
                  ref={textareaFocusRef}
                  value={expInput}
                  onChange={(e) => setExpInput(e.target.value)}
                  placeholder="Describe your skills and how you've applied them professionally or in school:"
                  className="outline-none resize-none border rounded-2xl h-[300px] p-2 w-full placeholder:text-sm placeholder-black placeholder:italic mb-5"
                ></textarea>

                {expInput.trim() === "" && (
                  <p
                    onClick={textareaFocus}
                    className="absolute top-7 text-gray-400 text-xl font-light p-2 mt-5"
                  >
                    I’ve applied my skills in HTML, CSS, JavaScript, and React
                    in various school projects, both individually and in team
                    settings...
                  </p>
                )}
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
          <p className="text-lg text-center">
            Share a quote that inspires you – lyrics, a saying, or something
            personal. <br />
            Include who said it, if you want. Both fields are optional.
          </p>

          {/* Quote textarea */}
          <div className="flex flex-col border-t border-b py-2">
            <label className="text-sm italic mb-2 text-black">
              Write your quote here:
            </label>
            <textarea
              name="quote"
              defaultValue={quote}
              placeholder="“The hardest problem in web development?&#10;Centering a div.”"
              onChange={(e) => setQuote(e.target.value)}
              className="resize-none text-5xl italic font-medium text-gray-400 focus:text-black placeholder-gray-400 outline-none transition-colors leading-snug h-[340px] focus:placeholder-transparent"
            />
          </div>

          {/* Source input */}
          <div className="flex flex-col border-b pb-2">
            <label className="text-sm italic mb-2 text-black">
              Who said it?, write here:
            </label>
            <input
              type="text"
              name="source"
              defaultValue={source}
              placeholder="– Every developer, at some point"
              onChange={(e) => setSource(e.target.value)}
              className="text-xl italic font-medium text-gray-400 focus:text-black placeholder-gray-400 outline-none transition-colors focus:placeholder-transparent"
            />
          </div>
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
