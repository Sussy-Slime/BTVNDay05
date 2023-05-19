class SignInBut{
    constructor(text, backgroundColor){
        this.text = text;
        this.backgroundColor = backgroundColor;
    }

    render(){
        const ButtonTag = document.createElement("button")
        ButtonTag.innerText = this.text;
        ButtonTag.style.backgroundColor = this.backgroundColor;
        
        ButtonTag.onclick = () => {
            const emailInput = document.getElementById("email")
            const passwordInput = document.getElementById("password")
            const acc = localStorage.getItem("account")
            const accountI = [{
                email: emailInput.value ,
                password: passwordInput.value
            }]
            if (accountI == acc){
                alert("Đăng nhập thành công");
            }
        }        
        const container = document.getElementById("container")
        container.appendChild(ButtonTag)
    }
}

export default SignInBut