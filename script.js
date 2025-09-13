window.onload = ()=>{
    let sideopener = document.getElementById("side1opener")
    let side1 = document.getElementById("side1")
    function setup_side1_event_listeners(){
        sideopener.onclick = ()=>{
            sideopener.style.transform = "rotatez(90deg)"
            side1.style.opacity = "100%"
            if (window.innerWidth<600){
                side1.style.width = `450px`
            }
            else {
                side1.style.width = `200px`
            }
            side1.style.pointerEvents = "all"
            sideopener.onclick = ()=>{
                side1.style.width = "0px"
                sideopener.style.transform = "rotatez(0deg)"
                side1.style.opacity = "0%"
                side1.style.pointerEvents = "none"
                setup_side1_event_listeners()
            }
        }
    }
    setup_side1_event_listeners()

    setInterval(()=>{
        search_juice()
    },50)
}




let juices = [
    {
        name:"Apple juice",
        src:"src/juices/apple juice.png",
        tags:"apple",
    },
    {
        name:"Watermelon juice",
        src:"src/juices/watermelon juice.png",
        tags:"watermelon",
    },
    {
        name:"Pineapple juice",
        src:"src/juices/pineapple juice.png",
        tags:"pineapple",
    },
    {
        name:"Berry juice",
        src:"src/juices/berry juice.png",
        tags:"berry",
    },
    {
        name:"Carrot juice",
        src:"src/juices/carrot juice.png",
        tags:"carrot",
    },
    {
        name:"Cherry juice",
        src:"src/juices/cherry juice.png",
        tags:"cherry",
    },
    {
        name:"Grapefruit juice",
        src:"src/juices/grapefruit juice.png",
        tags:"grapefruit grape fruit",
    },
    {
        name:"Kiwi juice",
        src:"src/juices/kiwi juice.png",
        tags:"kiwi",
    },
    {
        name:"Lemon juice",
        src:"src/juices/lemon juice.png",
        tags:"lemon",
    },
    {
        name:"Mango juice",
        src:"src/juices/mango juice.png",
        tags:"mango",
    },
    {
        name:"Multiflavor juice",
        src:"src/juices/multiflavor juice.png",
        tags:"multi apple mango lemon orange kiwi watermelon grapefruit berry carrot pineapple",
    }
]


function navigate(page){
    try{
        for (let i = 0; i < 3; i++){
            document.getElementById(`welcomeitem${i}`).remove()
        }
    }catch{}
    let pages = ["home", "search", "profile", "about"]
    for (let i = 0; i < 4; i++){
        let hidpage = document.getElementById(pages[i])
        hidpage.style.display = "none"
    }
    let shownpage = document.getElementById(page)
    shownpage.style.display = "block"
}


function show_juice(keyword){
    let juicespage = document.getElementById("juicesbox")
    juicespage.innerHTML =""
    for (let i = 0 ; i < juices.length;i++){
        if (keyword!=""){
            if (juices[i].tags.includes(keyword)){
                let newdom = document.createElement("div")
                newdom.className = "juicebox"
                newdom.innerHTML = `<img src="${juices[i].src}" class="juiceicon"><p class="juicename">${juices[i].name}</p><button class="buybutton">0.1$ Buy</button>`
                juicespage.appendChild(newdom)
            }
        }else{
            let newdom = document.createElement("div")
            newdom.className = "juicebox"
            newdom.innerHTML = `<img src="${juices[i].src}" class="juiceicon"><p class="juicename">${juices[i].name}</p><button class="buybutton">0.1$ Buy</button>`
            juicespage.appendChild(newdom)
        }
    }
}


function search_juice(){
    let keywords = document.getElementById("searchbox").value
    
    show_juice(keywords)
}