import React, { useState } from "react";

const Form = () => {
  // const [inputValue, setInputValue] = useState({
  //   namn: "",
  //   efternamn: "",
  //   skola: "",
  //   utbildning: "",
  //   email: "",
  //   telefon: "",
  //   github: "",
  //   linkedIn: "",
  //   about: "",
  //   rubrik: "",
  //   projekt: "",
  //   skills: "",
  //   färgTema: "",
  //   fontTema: "",
  //   cv: null,
  //   profilbild: null,
  // });

  // //hantera flera input value fields
  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setInputValue((prev) => {
  //     return { ...prev, [name]: type === "file" ? files[0] : value };
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input type="text" name="namn" />
        <input type="text" name="efternamn" />
        <input type="text" name="skola" />
        <input type="text" name="utbildning" />
        <input type="email" name="email" />
        <input type="tel" name="telefon" />
        <input type="url" name="github" />
        <input type="url" name="linkedIn" />
        <textarea name="about" />
        <input type="text" name="rubrik" />
        <input type="url" name="projekt" />
        <textarea name="skills" />
        <input type="color" name="färgTema" />
        <select name="fontTema" />
        <input type="file" accept=".pdf" name="cv" />
        <input type="file" accept="image/*" name="profilbild" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
