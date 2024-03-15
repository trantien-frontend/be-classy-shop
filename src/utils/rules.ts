// import type { RegisterOptions, UseFormGetValues } from "react-hook-form";
import * as yup from "yup";

// type Rules = {
//   [key in "email" | "password" | "confirm_password"]?: RegisterOptions;
// };

const REQUIRED_MESSAGE = "Không được để trong trường này";

export const schema = yup.object({
  firstName: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .min(4, "Độ dài từ 4 - 160 ký tự")
    .max(160, "Độ dài từ 4-160 ký tự"),
  lastName: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .min(4, "Độ dài từ 4 - 160 ký tự")
    .max(160, "Độ dài từ 4-160 ký tự"),
  phone: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .min(10, "Độ dài phải ít nhất 10 ký tự"),
  email: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .email("Email sai định dạng")
    .min(6, "Độ dài từ 5-160 ký tự")
    .max(160, "Độ dài từ 5-160 ký tự"),
  password: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .min(4, "Độ dài từ 4-160 ký tự")
    .max(160, "Độ dài từ 5-160 ký tự"),
  confirm_password: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .oneOf([yup.ref("password")], "Phải trùng khớp với mật khẩu"),
});

export const loginSchema = schema.omit([
  "firstName",
  "lastName",
  "phone",
  "confirm_password",
]);

export interface LoginFormData extends yup.InferType<typeof loginSchema> {}
export interface RegisterFormData extends yup.InferType<typeof schema> {}

// export const getRules = (getValues?: UseFormGetValues<any>): Rules => {
//   return {
//     email: {
//       required: { message: "Vui lòng nhập email", value: true },
//       pattern: {
//         value: /^\S+@\S+\.\S+$/,
//         message: "Email không đúng",
//       },
//       maxLength: {
//         value: 160,
//         message: "độ dài ký tự từ 5 - 160 ký tự",
//       },
//       minLength: {
//         value: 5,
//         message: "độ dài ký tự từ 5 - 160 ký tự",
//       },
//     },
//     password: {
//       required: { message: "Vui lòng nhập password", value: true },
//       maxLength: {
//         value: 160,
//         message: "độ dài ký tự từ 5 - 160 ký tự",
//       },
//       minLength: {
//         value: 5,
//         message: "độ dài ký tự từ 5 - 160 ký tự",
//       },
//     },
//     confirm_password: {
//       required: { message: "Vui lòng nhập confirm password", value: true },
//       maxLength: {
//         value: 160,
//         message: "độ dài ký tự từ 5 - 160 ký tự",
//       },
//       minLength: {
//         value: 5,
//         message: "độ dài ký tự từ 5 - 160 ký tự",
//       },
//       validate:
//         typeof getValues == "function"
//           ? (value) => value === getValues("password") || "Nhập lại password"
//           : undefined,
//     },
//   };
// };
