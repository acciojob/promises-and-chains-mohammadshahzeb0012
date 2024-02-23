//your JS code here. If required.
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const age = form["age"].value;
  const name = form["name"].value;

  const prmosieCreator = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`)
        return;
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`)
        return;
      }
    }, 4000)
  })

  prmosieCreator
  .then((data) => {
    alert(data)
  })
  .catch((err)=>{
    alert(err)
  })
})