var io_games = [
    {
        url:'https://1v1.lol/',
        icon:'https://myket.ir/app-icon/lol.onevone_9af21613-ea64-4987-a0dc-85266421ba0d.png',
        title:'1v1.LOL',
        description:"1v1.lol is a competitive online third-person shooter where you build your way around the map tactically. You can build platforms, ramps, and walls to aid your defenses and gain an advantage. The main game mode is 1v1 battle royale, where the winner is the last player standing."
    },
    {
        url:'http://slither.com/io',
        icon:'http://slither.io/s/favicon.png',
        title:'Slither io',
        description:"The objective of the game is to control a snake, also known as \"slithers\", around a wide area and eat pellets, defeating and consuming other players to gain mass to grow the largest and longest in the game. Once players are spawned into the virtual world, their avatar remains in constant motion."
    },
    {
        url:'https://paper-io.com/',
        icon:'https://paper-io.com/favicon.ico',
        title:'Paper io',
        description:'In the game, the player has to compete with other players to capture the entire arena. Players may defeat others by running their head into other tails; running into their own will kill them. The point of the game is to capture as much territory as possible by encircling it.'
    },
    {
        url:'https://warbrokers.io/game3d.php?nick=guest&autoJoin=true&classic=true',
        icon:'https://warbrokers.io/img/ui_logo_200.png',
        title:'WarBrokers',
        description:'War Brokers is a fast paced, first person, 3D shooter focused on fun and tactical choices. Players start on an equal footing with access to all weapons and vehicles. Fight with up to 15 other players on one of 9 unique maps. Choose from an arsenal of 17 weapons.'
    }
]
desktoploadedapps = 3
var deskline = 0
deletekeypressed = false
window.addEventListener('keydown',(e)=>{
    if (e.key=="Delete"){
        deletekeypressed = true
    }
})
window.addEventListener('keyup',(e)=>{
    if (e.key=="Delete"){
        deletekeypressed = false
    }
})
function notification(icon,text)
{
    notif = document.createElement('div')
    id=`${Math.random()}`
    notif.id = id
    notif.className = "notification"
    notif.innerHTML = `<img src="${icon}" class="notifitems" style="width: 70px; height: 70px"><span style="width: 150px; height: 100px; color: white" class="notifitems">${text}</span>`
    document.body.appendChild(notif)
    thenotif = document.getElementById(id)
    setTimeout(()=>{
        thenotif.className = "notification closednotif"
        setTimeout(()=>{
            thenotif.remove()
        },800)
    },3000)
    notif.addEventListener('click',()=>{
        notif.className = "notification closednotif"
        setTimeout(()=>{
            notif.remove()
        },800)
    })
}
function desktopicon(app){
    let desktop = document.getElementById('desktop')
    let desktopapp = document.createElement('div')
    desktopapp.className = "desktopicon buttonhover"
    desktopapp.innerHTML = `
    <center>
        <img class="desktopiconimage" src="${app.icon}">
        <p style="color: white; font: menu; font-size: 10px;">${app.title}</p>
    </center>
    `
    desktop.appendChild(desktopapp)
    desktopapp.style.left = `${deskline}px`
    desktopapp.style.top = `${desktoploadedapps*90}px`
    desktopapp.addEventListener('click', ()=>{
        if (!deletekeypressed){
            create_window(app.url,app.title,app.icon)
        }else{
            desktopapp.remove()
        }
    })
    desktoploadedapps++
    if (desktoploadedapps==6){
        deskline += 70
        desktoploadedapps = 0
    }
    notification(
        'https://static.vecteezy.com/system/resources/previews/022/493/595/large_2x/3d-question-mark-icon-or-ask-faq-answer-solution-isolated-on-transparent-background-file-png.png',
        'Successfully downloaded the game. hold "Delete" key and click on the game to uninstall'
    )
}
function create_game_element(url,icon,title,description){
    innerhtml = '<center><img src="${icon}" style="border-radius: 10px; width: 50px; height: 50px"><p style="font: menu; color: white;">${title}</p></center>'.replace('${title}',title).replace('${icon}',icon)
    let element = document.createElement('div')
    element.style.backgroundColor = "rgba(5,5,20,0.3)"
    element.innerHTML = innerhtml
    element.style.width = "70px"
    element.style.height = "90px"
    element.style.float = "left"
    element.className = "buttonhover"
    compresseddescription = description.replaceAll(' ','<span> </span>')
    element.addEventListener('click',()=>{
        document.getElementById('store_games').innerHTML = `<img style="padding: 40px; width: 100px; height: 100px; border-radius: 25px; float: left;" src="${icon}"><h1 style="float: left; font: menu; font-size: 20px; color: white;">${compresseddescription}</h1><br><br><br><button class="store_download_button" onclick="document.getElementById('downloadbuttongame').innerHTML ='Downloading...';setTimeout(()=>{desktopicon({url:'${url}',icon:'${icon}',title:'${title}'});document.getElementById('downloadbuttongame').innerHTML ='Downloaded'},5000)" id="downloadbuttongame">Download</button>`
    })
    return element
}
function store_load_games(games){
    document.getElementById('store_games').innerHTML = ""
    var elgames = []
    for (let i = 0; i < games.length; i++){
        elgames.push(create_game_element(games[i].url,games[i].icon,games[i].title,games[i].description))
    }
    for (let i = 0; i < elgames.length; i++){
        document.getElementById('store_games').appendChild(elgames[i])
    }
}