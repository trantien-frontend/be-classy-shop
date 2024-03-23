import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { Link, useNavigate } from "react-router-dom";

import { userApi } from "../../apis";
import { Button, TextField } from "../../components";
import { LoginFormData, loginSchema } from "../../utils/rules";
import { ApiResponse, ErrorResponse } from "../../types";
import { isAxiosBadRequest, isAxiosNotFound } from "../../utils/ultis";

export function Login() {
  const { setIsAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const loginMutation = useMutation({
    mutationFn: (data: LoginFormData) => userApi.login(data),
  });

  const onsSubmit = handleSubmit((formData) => {
    if (loginMutation.isPending) return;
    loginMutation.mutate(formData, {
      onSuccess: () => {
        setIsAuthenticated(true);
        navigate("/account");
        toast("login success");
      },
      onError: (error) => {
        if (
          isAxiosNotFound<ApiResponse<ErrorResponse>>(error) &&
          error.response?.config.url === "/auth/signin"
        ) {
          const formError = error.response.data?.body;
          if (formError?.code === 1002) {
            setError("email", {
              type: "pattern",
              message: formError.message,
            });
          }
        }

        if (
          isAxiosBadRequest<ApiResponse<ErrorResponse>>(error) &&
          error.response?.config.url === "/auth/signin"
        ) {
          const formError = error.response.data?.body;
          if (formError?.code === 1003) {
            setError("password", {
              type: "pattern",
              message: formError.message,
            });
          }
        }
      },
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
                <Button type="submit" isPending={loginMutation.isPending}>
                  đăng nhập
                </Button>
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
