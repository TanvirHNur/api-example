// const loadBuddy = () =>{
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayBuddy(data))
// }

// loadBuddy()
// const displayBuddy = (data) =>{
// const buddiesDiv = document.getElementById('buddy')
// const buddies  = data.results;
// for(const buddy of buddies){
//     const p = document.createElement('p');
//     p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  EmailL: ${buddy.email} Cell: ${buddy.cell} Address: ${buddy.location.city}, ${buddy.location.country}}`;
//     buddiesDiv.appendChild(p)

//     const img = document.createElement
// }

// console.log(buddies)
//  console.log(data)
// }


// console.log('buddy connnected')


const loadBuddy= () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayBuddy(data))
}

loadBuddy()

const displayBuddy = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddy');
    for(const buddy of buddies){
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}  Cell: ${buddy.cell} Address: ${buddy.location.city}, ${buddy.location.country}`;
        buddiesDiv.appendChild(p)
    }



    // console.log(buddies)
    // console.log(data)
}