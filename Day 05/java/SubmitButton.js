class SubmitButton{
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
            const passInput = document.getElementById("pass")
            const account = JSON.parse(localStorage.getItem("account"))
            if (account?.length && passwordInput == passInput){
                account.push({
                    email: emailInput.value,
                    password: passwordInput.value
                })
                localStorage.setItem("account", JSON.stringify(account))
            }
            else {
                localStorage.setItem("account", JSON.stringify([{
                    email: emailInput.value ,
                    password: passwordInput.value
                }]))
            }
        }        
        const container = document.getElementById("container")
        container.appendChild(ButtonTag)
    }
}

export default SubmitButton