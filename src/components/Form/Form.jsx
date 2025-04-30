const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 max-w-[400px] border-2 border-black">
          <input type="text" name="namn" placeholder="Name..." />
          <input type="text" name="efternamn" placeholder="Last name..." />
          <input type="text" name="skola" placeholder="School..." />
          <input type="text" name="utbildning" placeholder="Education..." />
          <input type="email" name="email" placeholder="Email..." />
          <input type="tel" name="telefon" placeholder="Tel..." />
          <input type="url" name="github" placeholder="Github..." />
          <input type="url" name="linkedIn" placeholder="LinkedIn..." />
          <input type="text" name="rubrik" placeholder="Add your header..." />
          <textarea name="about" placeholder="Om mig"></textarea>
          <input type="url" name="projekt" placeholder="Olika projekt" />
          <textarea name="skills" placeholder="Tekniska färdigheter"></textarea>
          <input type="color" name="färgTema" />
          <select name="fontTema">
            <option value="sans">Sans-serif</option>
            <option value="poppins">Poppins</option>
            <option value="mono">Monospace</option>
          </select>
          <input type="file" accept=".pdf" name="cv" />
          <input type="file" accept="image/*" name="profilbild" />
          <button type="submit" className="cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
