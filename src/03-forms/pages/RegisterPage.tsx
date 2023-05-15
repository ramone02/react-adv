import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {

  const { formData, onChange, resetForm, isValidEmail, name, email, password, password2 } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={ ` ${name.trim().length <= 0 && 'has-error'} ` }
        />
        {name.trim().length <= 0 && <span>Este campo en necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={ ` ${!isValidEmail(email) && 'has-error'} ` }
        />
        {!isValidEmail(email) && <span>Email no es valido </span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo en necesario</span>}
        {password.trim().length < 6 && password.trim().length < 6 &&  <span>La constraseña tiene que tener 6 caracteres</span>}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo en necesario</span>}
        { password2.trim().length > 0 && password !== password2  && <span>Las contraseñas deben ser iguales</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
