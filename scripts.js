
fetch("https://catfact.ninja/fact")
.then(res => res.json())
.then(res => console.log(res))



fetchear()

async function fetchear(){

    let res = await(fetch("https://catfact.ninja/fact"))
    let res2 = await(fetch("https://api.thecatapi.com/v1/images/search"))
    let data2 = await(res2.json())
    let data = await(res.json())
    let imagen = data2[0].url

    document.getElementById("randomfact").innerText = data.fact
    document.getElementById("randomimage").src = data2[0].url
    document.getElementById("randomimagebg").src = data2[0].url
}