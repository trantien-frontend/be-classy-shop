import {} from "react";
import { TextField } from "../../../../components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterFormData, schema } from "../../../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";

export interface RegisterFormProp {}

// export interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: number;
//   password: string;
//   confirm_password: string;
// }

export function RegisterForm({}: RegisterFormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  // const rules = getRules(getValues);
  return (
    <div className="my-5">
      <div className="container mx-auto">
        <div className="register-form lg:w-2/5 lg:mx-auto">
          <div className="register-form-header text-center">
            <h3 className="uppercase text-[26px] tracking-wide text-main-color font-normal pb-3">
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
              <button
                className="text-white font-normal border-[1px] border-main-color px-[80px] py-[14px] bg-main-color uppercase hover:bg-white hover:text-main-color"
                type="submit"
              >
                Tạo tài khoản
              </button>
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
