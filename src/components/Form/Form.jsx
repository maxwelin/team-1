import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import { BsFiletypePdf } from "react-icons/bs";
import { BsFiletypeJpg } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

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
    <div className="flex flex-col items-start gap-6">
      <p className="text-white text-6xl text-left mb-2 font-medium">Form</p>
      <p className="text-white text-1xl text-left mb-2 font-normal">
        Fyll i formuläret nedan för att skapa din personliga portfolio.
        Informationen du skriver in visas direkt i portfolion under formuläret.
        När du är nöjd kan du ladda ner en färdig zip-fil med din portfolio som
        du kan använda, visa upp eller fortsätta bygga vidare på. Du kan när som
        helst uppdatera fälten för att se ändringar i realtid.
      </p>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative flex mb-10">
          <div className="flex flex-col gap-4 w-2/3">
            <input
              type="text"
              name="fname"
              defaultValue={firstName}
              placeholder="First name"
              className="outline-none border-t border-b border-[#FF58C7] w-full text-3xl font-light text-[#FF58C7]"
            />
            <input
              type="text"
              name="lname"
              defaultValue={lastName}
              placeholder="Last name"
              className="outline-none border-t border-b border-[#FF58C7] w-full text-3xl font-light text-[#FF58C7]"
            />
            <input
              type="text"
              name="school"
              defaultValue={school}
              placeholder="School"
              className="outline-none border-t border-b border-white w-full text-3xl font-light text-white"
            />
            <input
              type="text"
              name="education"
              defaultValue={education}
              placeholder="Education"
              className="outline-none border-t border-b border-white w-full text-3xl font-light text-white"
            />
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
              className="outline-none border-t border-b border-white w-full text-3xl font-light text-white"
            />
            <input
              type="tel"
              name="telephone"
              defaultValue={phoneNumber}
              placeholder="Phone number"
              className="outline-none border-t border-b border-white w-full text-3xl font-light text-white"
            />
            <input
              type="url"
              name="github"
              defaultValue={githubURL}
              placeholder="Github"
              className="outline-none border-t border-b border-white w-full text-3xl font-light text-white"
            />
            <input
              type="url"
              name="linkedIn"
              defaultValue={linkedInURL}
              placeholder="LinkedIn"
              className="outline-none border-t border-b border-white w-full text-3xl font-light text-white"
            />
            <div className="flex gap-6 w-full">
              <div className="relative w-full">
                <label
                  className="absolute cursor-pointer w-full flex justify-between items-center border-t border-b border-white text-3xl font-light text-white"
                  htmlFor="cv"
                >
                  Upload CV
                  <BsFiletypePdf />
                </label>
                <input
                  className="opacity-0"
                  type="file"
                  accept=".pdf"
                  name="cv"
                />
              </div>

              <div className="relative w-full">
                <label
                  htmlFor="profilePicture"
                  className="absolute cursor-pointer w-full flex justify-between items-center border-t border-b border-white text-3xl font-light text-white"
                >
                  {profilePic ? fileName : "Upload profile img"}
                  <BsFiletypeJpg />
                </label>
                <input
                  className="opacity-0"
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <CgProfile className="absolute right-5 text-white text-[300px]" />
          </div>
        </div>

        <div className="flex flex-col mt-30 mb-30">
          <p className="text-white text-3xl text-left font-normal">
            Header for about
          </p>
          <input
            type="text"
            name="header"
            placeholder="Something about you/Cover letter"
            className="outline-none border-t border-b border-white w-full text-2xl font-thin text-white pb-15 pt-3"
          />
        </div>

        {/* <textarea
          name="about"
          defaultValue=""
          placeholder="About me"
        ></textarea> */}

        <div className="flex flex-col mt-30 mb-30">
          <p className="text-white text-3xl text-left font-normal">
            Upload images of your projects
          </p>
          <div className="grid grid-cols-4 gap-4 border-t border-b border-white pt-3 pb-3 mb-5">
            <div className="bg-gray-300 h-20 p-4">Item 1</div>
            <div className="bg-gray-300 p-4">Item 2</div>
            <div className="bg-gray-300 p-4">Item 3</div>
            <div className="bg-gray-300 p-4">Item 4</div>
            <div className="bg-gray-300 h-20 p-4">Item 5</div>
            <div className="bg-gray-300 p-4">Item 6</div>
            <div className="bg-gray-300 p-4">Item 7</div>
            <div className="bg-gray-300 p-4">Item 8</div>
          </div>
          <div className="flex items-end gap-20">
            <p className="text-white text-1xl text-left font-light">
              Project.jpg
            </p>
            <input
              type="url"
              name="project"
              placeholder="Link to project ex: url,netlify app or github repo"
              className="outline-none bg-gray-100 w-full text-1.5xl font-light text-blac pl-4"
            />
          </div>
        </div>

        <div className="flex flex-col mt-30 mb-30">
          <p className="text-white text-3xl text-left font-normal">
            Your skills
          </p>
          <textarea
            name="skills"
            placeholder="Skills"
            className="outline-none border-t border-b border-white w-full text-2xl font-thin text-white pb-15 pt-3"
          ></textarea>
        </div>

        <div className="flex flex-col w-2/3 gap-2.5 mt-30 mb-20">
          <p className="text-white text-3xl text-left font-normal mb-5">
            Style your Portfolio
          </p>
          <select
            name="fontTheme"
            className="outline-none border-t border-b border-white w-full text-3xl font-light text-white pt-1 pb-1"
          >
            <option value="sans">Helvetica</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
          <select
            name="fontTheme"
            className="outline-none border-t border-b border-white w-full text-3xl font-light text-white pt-1 pb-1"
          >
            <option value="sans">Helvetica</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
          <select
            name="fontTheme"
            className="outline-none border-t border-b border-white w-full text-3xl font-light text-white pt-1 pb-1"
          >
            <option value="sans">Helvetica</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
          <select
            name="fontTheme"
            className="outline-none border-t border-b border-[#FF58C7] w-full text-3xl font-light text-[#FF58C7] pt-1 pb-1"
          >
            <option value="sans">Helvetica</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
        </div>

        <p className="text-white text-1xl text-left mb-2 font-normal w-2/3">
          Fyll i formuläret nedan för att skapa din personliga portfolio.
          Informationen du skriver in visas direkt i portfolion under
          formuläret. När du är nöjd kan du ladda ner en färdig zip-fil med din
          portfolio som du kan använda, visa upp eller fortsätta bygga vidare
          på. Du kan när som helst uppdatera fälten för att se ändringar i
          realtid.
        </p>

        {/* <input type="color" name="colorTheme" /> */}

        <button
          type="submit"
          className="cursor-pointer items-center pl-4 pr-4 rounded-4xl mt-20 mb-20 text-black text-2xl bg-[#FF58C7]"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
