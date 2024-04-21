import * as Yup from "yup";

export const contactValidationScheme = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد."),
    email: Yup.string().email("آدرس ایمیل معتبر نیست").required("وارد کردن ایمیل الزامی میباشد"),
    subject: Yup.string().required("وارد کردن عنوان الزامی میباشد"),
    message: Yup.string().required("وارد کردن پیام الزامی میباشد"),
    recaptcha: Yup.string().required("کپتچا الزامی میباشد"),
});