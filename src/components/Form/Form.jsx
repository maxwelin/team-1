const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 max-w-[400px] border-2 border-black">
          <input type="text" name="fname" placeholder="Name..." />
          <input type="text" name="lname" placeholder="Last name..." />
          <input type="text" name="school" placeholder="School..." />
          <input type="text" name="education" placeholder="Education..." />
          <input type="email" name="email" placeholder="Email..." />
          <input type="tel" name="telephone" placeholder="Tel..." />
          <input type="url" name="github" placeholder="Github..." />
          <input type="url" name="linkedIn" placeholder="LinkedIn..." />
          <input type="text" name="header" placeholder="Add your header..." />
          <textarea name="about" placeholder="About me..."></textarea>
          <input type="url" name="project" placeholder="Projects..." />
          <textarea name="skills" placeholder="Tech stack..."></textarea>
          <input type="color" name="colorTheme" />
          <select name="fontTheme">
            <option value="sans">Sans-serif</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
          <input type="file" accept=".pdf" name="cv" />
          <input type="file" accept="image/*" name="profilePicture" />
          <button type="submit" className="cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
