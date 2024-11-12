function checkPasswordStrength(){
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    const result= document.getElementById('result');

    const commonPasswords= ["password", "admin", "12345", "qwerty"]
    let score= 0;
    let feedback=  [];

    const conditions= [
    { test: password.length >=8, score: 2, message: "Password should be at least 8 characters long."},
    { test: /[a-z]/.test(password), score: 2,message: "Password should include at least one lowercase letter."},
    { test: /[A-Z]/.test(password), score: 2, message: "Password should include at least one uppercase letter." },
    { test: /\d/.test(password), score: 2, message: "Password should include at least one digit." },
    { test: /[!@#$%^&*,?".:{}|<>]/.test(password), score: 2, message: "Password should include at least one special character." },
    { test:!commonPasswords.includes(password.toLowerCase()), score: 2, message: "Password is too common."},
    { test:username.toLowerCase() !== password.toLowerCase(), score: 2, message: "Password should not be identical to the username."}

    ]


conditions.forEach(condition => {
    if(condition.test){
        score+= condition.score;
    }
    else{
        feedback.push(condition.message);
    }
    
});

const strength = score <= 4? "Weak" : score <= 8? "Moderate" : "Strong";

result.innerHTML = `<p><strong>Password Strength:</strong> ${strength}</p><p><strong>Score:</strong> ${score}/12</p>`;

if (feedback.length) {
    result.innerHTML += "<p><strong>Suggestions:</strong></p><ul>" + feedback.map(item => `<li>${item}</li>`).join('') + "</ul>";
}

}