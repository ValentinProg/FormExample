import "./Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {

  const schema = yup.object().shape({
    fullName: yup.string().required('Your full Name is Required!'),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords Don't Match").required(),
  })

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="text" placeholder="Password..." {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="text" placeholder="Confirm Password..." {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input type='submit'/>
    </form>
  );
};


// npm install react-hook-form yup
// npm install @hookform/resolvers