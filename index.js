document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('registerForm');
    const error = document.getElementById('error');
    const user = localStorage.getItem('user');
    if(user){
        window.location.href = 'app.html';
    }

    form.addEventListener('submit', e =>{
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const dob = document.getElementById('dob').value;
        const age = getAge(new Date(dob));

        if(!name || !dob){
            error.textContent = 'All fields are required.';
            return;
        }

        if(age <= 10){
            error.textContent = "You must be older than 10 years.";
            return;
        }

        localStorage.setItem('user', JSON.stringify({name, dob}));
        window.location.href = 'app.html';
    });
});

function getAge(dob){
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}