import { ChangeEvent, useState } from "react";

interface RegisterDataProps {
  name: string;
  email: string;
  password: string;
  password2: string;
}
export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    //another form
    /* setFormData(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value,
            }
            )); */
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ ...initState });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    formData,
    onChange,
    resetForm,
    isValidEmail
  };
};
