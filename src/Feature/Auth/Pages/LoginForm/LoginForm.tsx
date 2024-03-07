import {} from "react";
import { TextField } from "../../../../components";
import { Link } from "react-router-dom";

export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  return (
    <div>
      <div className="my-5">
        <div className="container mx-auto">
          <div className="login-form lg:w-2/5 lg:mx-auto">
            <div className="login-form-header text-center">
              <h3 className="uppercase text-[26px] tracking-wide text-main-color font-normal pb-3">
                đăng nhập tài khoản
              </h3>
            </div>
            <form action="POST">
              <div className="login-form-body">
                <TextField title="email" name="email" type="text" />
                <TextField title="mật khẩu" name="password" type="password" />
              </div>
              <div className="login-form-footer text-center">
                <button
                  className="text-white font-normal border-[1px] border-main-color px-[80px] py-[14px] bg-main-color uppercase hover:bg-white hover:text-main-color"
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
