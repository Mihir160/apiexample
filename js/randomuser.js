const loadusers = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayerUsers(data.results))
}

const displayerUsers = users =>{
    const usersContainer = document.getElementById('users-container');
    for(let user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <img src="${user.picture.large} " >
        <h3>User Name: ${user.name.first} ${user.name.last}</h3>
        <h4>Gender: ${user.gender}</h4>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city} ${user.location.country}</p>
        <p>Phone Number: ${user.phone}</p>
        
        `
        usersContainer.appendChild(userDiv)
    }
}

loadusers();