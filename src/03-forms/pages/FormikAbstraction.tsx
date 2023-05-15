import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Email invalido").required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["It-Junior"], "Esta opcíon no es valida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Leonardo"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Bellido"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="example@gmail.com"
              type="email"
            />
            <MySelect name="jobType" label="JobType">
              <option value="">Choose One</option>
              <option value="Dev">Dev</option>
              <option value="Designer">Designer</option>
              <option value="It-Senior">It-Senior</option>
              <option value="It-Junior">It-Junior</option>
            </MySelect>
            <MyCheckbox label="Term and Conditions" name="terms"/>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
