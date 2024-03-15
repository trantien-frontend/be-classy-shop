import {} from "react";
import { omit } from "lodash";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { userApi } from "../../../../apis";
import { Button, TextField } from "../../../../components";
import { RegisterResponse } from "../../../../types";
import { RegisterFormData, schema } from "../../../../utils/rules";
import { isAxiosUnprocessableEntityError } from "../../../../utils/ultis";
import { toast } from "react-toastify";

export interface RegisterFormProp {}

export function RegisterForm({}: RegisterFormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({ resolver: yupResolver(schema) });

  const registerAccountMutaion = useMutation({
    mutationFn: (data: Omit<RegisterFormData, "confirm_password">) =>
      userApi.register(data),
  });

  const onSubmit = handleSubmit((formData) => {
    const newFormData = omit(formData, ["confirm_password"]);
    registerAccountMutaion.mutate(newFormData, {
      onSuccess: () => {
        toast("Register Success");
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<RegisterResponse>(error)) {
          const formError = error.response?.data.body;
          if (formError?.code == 1001) {
            setError("email", {
              type: "pattern",
              message: formError.message,
            });
          }
        }
      },
    });
  });

  return (
    <div className="my-5">
      <div className="container mx-auto">
        <div className="register-form lg:w-2/5 lg:mx-auto">
          <div className="register-form-header text-center">
            <h3 className="uppercase text-[26px] tracking-wide text-color-primary font-normal pb-3">
              đăng ký tài khoản
            </h3>
            <p className="font-light">
              Nếu chưa có tài khoản vui lòng đăng ký tại đây
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="register-form-body">
              <TextField
                title="họ"
                type="text"
                name="firstName"
                register={register}
                message={errors.firstName?.message}
              />
              <TextField
                title="tên"
                type="text"
                name="lastName"
                register={register}
                message={errors.lastName?.message}
              />
              <TextField
                title="số điện thoại"
                type="tel"
                name="phone"
                register={register}
                message={errors.phone?.message}
              />
              <TextField
                title="email"
                type="text"
                name="email"
                register={register}
                message={errors.email?.message}
              />
              <TextField
                title="mật khẩu"
                type="password"
                name="password"
                register={register}
                message={errors.password?.message}
              />
              <TextField
                title="Nhập lại mật khẩu"
                type="password"
                name="confirm_password"
                register={register}
                message={errors.confirm_password?.message}
              />
            </div>
            <div className="register-form-footer text-center">
              <Button text="tạo tài khoản" />
              <div className="mt-5">
                <Link
                  className="font-normal uppercase hover:text-main"
                  to={"/login"}
                >
                  đăng nhập
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
