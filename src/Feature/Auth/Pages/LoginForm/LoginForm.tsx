import {} from "react";
import { TextField } from "../../../../components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { LoginFormData, loginSchema } from "../../../../utils/rules";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../../../../apis";

export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) => userApi.login(data),
  });

  const onsSubmit = handleSubmit((formData) => {
    console.log(formData);
    loginMutation.mutate(formData, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {},
    });
  });

  return (
    <div>
      <div className="my-5">
        <div className="container mx-auto">
          <div className="login-form lg:w-2/5 lg:mx-auto">
            <div className="login-form-header text-center">
              <h3 className="uppercase text-[26px] tracking-wide text-color-primary font-normal pb-3">
                đăng nhập tài khoản
              </h3>
            </div>
            <form action="POST" onSubmit={onsSubmit}>
              <div className="login-form-body">
                <TextField
                  name="email"
                  type="text"
                  message={errors.email?.message}
                  title="email"
                  register={register}
                />
                <TextField
                  name="password"
                  type="password"
                  title="password"
                  register={register}
                  message={errors.password?.message}
                />
              </div>
              <div className="login-form-footer text-center">
                <button
                  className="text-white font-normal border-[1px] border-color-primary px-[80px] py-[14px] bg-color-primary uppercase hover:bg-white hover:text-color-primary"
                  type="submit"
                >
                  đăng nhập
                </button>
                <div className="mt-5">
                  <Link
                    className="font-normal uppercase hover:text-main"
                    to={"/login"}
                  >
                    quên mật khẩu?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
