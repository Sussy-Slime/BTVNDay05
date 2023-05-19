import EmailInput from "./java/EmailInput.js"
import PasswordInput from "./java/PasswordInput.js"
import SignInBut from "./java/SignIn.js"

const emailInput = new EmailInput("Email hoặc số điện thoại", "email")
emailInput.render()

const passwordInput = new PasswordInput("Nhập password của bạn", "password")
passwordInput.render()

const SignIButInput = new SignInBut("SignIn", "#c2c2c2")
SignIButInput.render()
