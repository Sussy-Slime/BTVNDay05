// Nếu file export không có chữ default thì các 
// biến phải bỏ vào dấu ngoặc

// import { number, number2 } from "./components/inputEmail.js"

// console.log(number)
// console.log(number2)


// form đăng ký 

// + ô input email
// + dòng chữ báo lỗi email
// + ô input password
// + dòng chữ báo lỗi password
// + button xác nhận
// + button đăng nhập



import EmailInput from "./java/EmailInput.js"
import PasswordInput from "./java/PasswordInput.js"
import SubmitButton from "./java/SubmitButton.js"
import CPassword from "./java/ComfirmPassword.js"


const emailInput = new EmailInput("Email hoặc số điện thoại", "email")
emailInput.render()

const passwordInput = new PasswordInput("Nhập password của bạn", "password")
passwordInput.render()

const CPasswordInput = new CPassword("Xác nhận mật khẩu của bạn", "pass")
CPasswordInput.render()

const submitBut = new SubmitButton("SignUp", "#c2c2c2")
submitBut.render()
