function create_window(url,title,icon){
    let newwindow = document.createElement('div')
    id=`${Math.random()}`
    newwindow.innerHTML = `
        <div class="windowbar" id="${id}windowbar">
            <img style="position: absolute; width: 20px; height: 20px;" src="${icon}"><span style="position: absolute; left: 25px; font: menu; color: white;">${title}</span>
            <div class="windowbuttons">
                <button class="buttonhover windowbutton" id="${id}minimize"><img style="width: 10px; height: 10px" src="https://win11.blueedge.me/img/icon/ui/minimize.png"></button>
                <button class="buttonhover windowbutton" id="${id}maximize"><img style="width: 10px; height: 10px" src="https://win11.blueedge.me/img/icon/ui/maxmin.png"></button>
                <button class="windowclose" onclick="document.getElementById('${id}').remove()"><img style="width: 10px; height: 10px" src="https://win11.blueedge.me/img/icon/ui/close.png"></button>
            </div>
        </div>
        <iframe onclick="document.getElementById'(${id}').focus()" id="${id}iframe" class="windowiframe" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-top-navigation allow-top-navigation-by-user-activation allow-pointer-lock allow-scripts allow-same-origin" src="${url}"></iframe>
`
    newwindow.className = "popupwindows window"
    newwindow.id = id
    document.getElementById('windows').appendChild(newwindow)
    let bar = document.getElementById(`${id}windowbar`)
    bar.addEventListener('mouseover', ()=>{floatingwindow = newwindow})
    bar.addEventListener('mouseout', ()=>{floatingwindow = 0})
    let windowiframe = document.getElementById(`${id}iframe`)
    let maximizebutton = document.getElementById(`${id}maximize`)
    newwindow.style.width = "1000px"
    maximizebutton.addEventListener('click', ()=>{
        if (newwindow.style.width !== "1000px"){
            undofullscreenwindow(newwindow)
        }else{
            dofullscreenwindow(newwindow)
        }
    })
    windowiframe.click()
    newwindow.addEventListener('keydown',(event)=>{
        windowiframe.dispatchEvent(new KeyboardEvent(event))
    })
    newwindow.addEventListener('keyup',(event)=>{
        windowiframe.dispatchEvent(new KeyboardEvent(event))
    })
    newwindow.addEventListener('mousedown',(event)=>{
        windowiframe.dispatchEvent(new MouseEvent(event))
        windowiframe.focus()
    })
    newwindow.addEventListener('mouseup',(event)=>{
        windowiframe.dispatchEvent(new MouseEvent(event))
    })
    newwindow.addEventListener('mousemove',(event)=>{
        windowiframe.dispatchEvent(new MouseEvent(event))
    })


    windowiframe.style.cursor = "crosshair"


    movewindow({x:80,y:50},newwindow)

    bar.onmouseover = ()=>{
        hoveredbar = newwindow
    }
    bar.onmouseout = ()=>{
        hoveredbar = 0
    }
}



const storeinnerhtml = `<div class="store_objects store_games">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JiQbpiAt5l9Hv4pIWxaotOvj2NKV5CdbFHijtCsR5c5Cyr56UJI5&usqp=CAE&s" style="width: 45px; height: 45px; padding: 5px; border-radius: 20px;" onclick="store_load_games(io_games)">
</div>
<div id="store_games" class="store_objects store_games_list"></div>
`
const mocinnerhtml = `
<div class="pineapple_maindiv" id="pineapple_maindiv">
    <div class="mc_mousebody">
        <center>
            <img src="resources/cursor1.png" style="width: 40px; height: 40px;">
            <button class="mc_button" onclick="change_cursor('resources/cursor1.png')">Set</button>
        </center>
    </div>
    <div class="mc_mousebody">
        <center>
            <img src="resources/cursor2.png" style="width: 40px; height: 40px;">
            <button class="mc_button" onclick="change_cursor('resources/cursor2.png')">Set</button>
        </center>
    </div>
    <div class="mc_mousebody">
        <center>
            <img src="resources/cursor3.png" style="width: 40px; height: 40px;">
            <button class="mc_button" onclick="change_cursor('resources/cursor3.png')">Set</button>
        </center>
    </div>
    <div class="mc_mousebody">
        <center>
            <img src="resources/cursor4.png" style="width: 40px; height: 40px;">
            <button class="mc_button" onclick="change_cursor('resources/cursor4.png')">Set</button>
        </center>
    </div>
    <button class="mc_button" onclick="clear_cursor()">Clear</button>
</div>
`
function open_store(){
    create_app(storeinnerhtml,"Lemon Store","https://emojiisland.com/cdn/shop/products/Lemon_Emoji_large.png?v=1571606034",900,600)
}
function open_mouse_changer(){
    create_app(mocinnerhtml,'Pineapple Mouse Changer','resources/mousecursorchangericon.png',300,200)
}


function create_app(innerhtml,title,icon, width, height){
    let newwindow = document.createElement('div')
    newwindow.style
    id=`${Math.random()}`
    newwindow.innerHTML = `
        <div class="windowbar" id="${id}windowbar">
            <img style="position: absolute; width: 20px; height: 20px;" src="${icon}"><span style="position: absolute; left: 25px; font: menu; color: white;">${title}</span>
            <div class="windowbuttons">
                <button class="windowclose" onclick="document.getElementById('${id}').remove()"><img style="width: 10px; height: 10px" src="https://win11.blueedge.me/img/icon/ui/close.png"></button>
            </div>
        </div><br>
        <center>
            <div class="windowiframe" id="${id}winapp"></div>
        </center>`
    newwindow.className = "popupwindows window"
    newwindow.id = id
    document.getElementById('windows').appendChild(newwindow)
    document.getElementById(`${id}winapp`).innerHTML = innerhtml
    let bar = document.getElementById(`${id}windowbar`)

    newwindow.style.width = `${width}px`
    newwindow.style.height = `${height}px`


    movewindow({x:80,y:50},newwindow)

    bar.onmouseover = ()=>{
        hoveredbar = newwindow
    }
    bar.onmouseout = ()=>{
        hoveredbar = 0
    }

    try{
        retype_cursor()
    }catch{}
}


window.onmousemove = (e)=>{
    mousepos = detectmousemotion(e)
    if (mousebuttondown){
        movewindow(mousepos, hoveredbar)
    }
    try{
        let cursor = document.getElementById('cursor')
        cursor.style.left = `${e.clientX+5}px`
        cursor.style.top = `${e.clientY+5}px`
    }catch{}
}

var cursorurl = ""

function change_cursor(url){
    document.body.style.cursor = "none"
    let newstyle = document.createElement('style')
    newstyle.innerHTML = "button:hover{cursor:none;}.window:hover{cursor:none}"
    newstyle.id = "cursornewstyle"
    document.head.appendChild(newstyle)
    try{
        document.getElementById('cursor').remove()
    }catch{
        console.log('creating cursor object')
    }
    let cursor = document.createElement('img')
    cursor.src = url
    cursor.id = "cursor"
    cursorurl = url
    document.getElementById('windows').appendChild(cursor)
}
function clear_cursor(){
    try{
        document.getElementById('cursor').remove()
    }catch{
        console.log('cursor is cleared')
    }
    document.body.style.cursor = "default"
    cursorurl = ""
    document.getElementById('cursornewstyle').remove()
}
function retype_cursor(){
    curl = `${cursorurl}`
    clear_cursor()
    change_cursor(curl)
}


function movecursor(e){
    x = e.clientX-5
    y = e.clientY-5
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
}


function hidecursor(){
    cursor.style.zIndex = "-1"
}
function showcursor(){
    cursor.style.zIndex = "10"
}


function dofullscreenwindow(window){
    window.style.width = "100%"
    window.style.height = "92%"
    window.style.top = "0px"
    window.style.left = "0px"
}

function undofullscreenwindow(window){
    window.style.width = "1000px"
    window.style.height = "550px"
    window.style.top = "50px"
    window.style.left = "150px"
}



window.onmousedown = ()=>{
    mousebuttondown = true
}
window.onmouseup = ()=>{
    mousebuttondown = false
}


var startmenuup = false
var mousebuttondown = false



function getwindowposition(window){
    result = {}
    result.x = Number(window.style.left.replace("px",""))
    result.y = Number(window.style.top.replace("px",""))
    return result
}


function movewindow(motion,win){
    windowpos = getwindowposition(win)
    winx = windowpos.x
    winy = windowpos.y
    x = motion.x
    y = motion.y
    win.style.left = `${x+windowpos.x}px`
    win.style.top = `${y+windowpos.y}`
}


var oldy = 0
var oldx = 0


function detectmousemotion(e){
    x = e.clientX
    y = e.clientY
    result = {}
    result.x = -(oldx - x)
    result.y = -(oldy - y)
    oldy = y
    oldx = x
    return result
}



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


function set_datetime(){
    const now = new Date()
    const nowstring = now.toLocaleString()
    datetime = nowstring.split(', ')
    document.getElementById('date').innerHTML = datetime[0]
    document.getElementById('time').innerHTML = datetime[1]
}


function load(){

set_datetime()


setInterval(()=>{
    set_datetime()
},1000)


loginpage = document.getElementById('loginpage')
loginpage.addEventListener('keydown',(event)=>{
    if (event.key=="Enter"){
        enterpassword()
    }
})


let random_pass = document.getElementById('randompassword')
random_pass.innerHTML = get_random_pass()



let apps = [
    {
        icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/48px-Google_Chrome_icon_%28February_2022%29.svg.png",
        url:"chrome.html",
        title:"Google Chrome"
    },
    {
        icon:"https://maps.google.com/favicon.ico",
        url:"https://maps.google.com",
        title:"Google Maps"
    },
    {
        icon:"https://img.icons8.com/?size=50&id=19318&format=png",
        url:"https://www.youtube.com/embed",
        title:"YouTube Video"
    },
    {
        icon:"https://img.icons8.com/?size=512w&id=8bxn6PWqwThG&format=png",
        url:"https://glitch.com/edit/#!/remix/glitch-hello-website",
        title:"Glitch"
    },
    {
        icon:"https://maps.google.com/favicon.ico",
        url:"https://calendar.google.com",
        title:"Google Calendar"
    },
    {
        icon:"https://www.facebook.com/favicon.ico",
        url:"https://developers.facebook.com/docs/plugins",
        title:"Facebook Feed"
    },
    {
        icon:"https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png",
        url:"https://www.instagram.com/developer/embedding",
        title:"Instagram Feed"
    },
    {
        icon:"https://www.msn.com/favicon.ico",
        url:"https://www.msn.com",
        title:"News widget"
    },
    {
        icon:"https://download.logo.wine/logo/Pornhub/Pornhub-Logo.wine.png",
        url:"https://pornhub.com",
        title:"Pornhub"
    },
    {
        icon:"https://static-00.iconduck.com/assets.00/reddit-logo-icon-512x512-jv3e2p8i.png",
        url:"https://reddit.com",
        title:"Reddit"
    },
    {
        icon:"https://vscode.dev/static/stable/favicon.ico",
        url:"https://github1s.com/blueedgetechno/win11React",
        title:"VSCode"
    },
    {
        icon:"https://win11.blueedge.me/img/icon/terminal.png",
        url:"cm.html",
        title:"Terminal"
    }
]


desktop = document.getElementById('desktop')

desktop.addEventListener('click',()=>{
    startmenuup = false
    document.getElementById('startmenupage').className = "startmenupage closestartmenupage"
    setTimeout(()=>{document.getElementById('startmenupage').remove()},1000)
})


desktopapps = [
    {
        url:"https://eaglercraft.com/mc/1.8.8/",
        icon:"https://img.icons8.com/?size=512&id=XfjNd4vkhBBy&format=png",
        title:"Minecraft"
    },
    {
        url:"https://krunker.io",
        icon:"https://kevin.games/assets/images/games/krunker-io.jpg",
        title:"Krunker"
    },
    {
        url:"https://bloxd.io",
        icon:"https://upload.wikimedia.org/wikipedia/en/4/41/Bloxd.io_Logo.jpeg",
        title:"Bloxd io"
    }
]
desktoploadedapps = 0
var deskline = 0
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
        create_window(app.url,app.title,app.icon)
    })
    desktoploadedapps++
    if (desktoploadedapps==6){
        deskline += 70
        desktoploadedapps = 0
    }
}


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


for (let i = 0; i < desktopapps.length; i++){
    app = desktopapps[i]
    desktopicon(app)
}



let startmenubutton = document.getElementById('startmenubutton')
startmenubutton.addEventListener('click', ()=>{
    if (!startmenuup){
        startmenuup = true
        let startmenu = document.createElement('div')
        startmenu.className = "startmenupage popupwindows"
        startmenu.id = "startmenupage"
        let smsurface = document.getElementById('centerstartmenu')
        smsurface.appendChild(startmenu)
        for (let i = 0; i < apps.length; i++){
            app = apps[i]
            let newapp = document.createElement('div')
            const url = app.url
            const icon = app.icon
            const title = app.title
            newapp.innerHTML = `<center><br><img style="width: 48px; height: 48px;" src="${icon}"><p style="font: menu; color: white;">${title}</p></center>`
            newapp.className = "smapp buttonhover"
            startmenu.appendChild(newapp)
            newapp.addEventListener('click',()=>{
                create_window(url,title,icon)
            })
        }
        smline=document.createElement('div')
        smline.className="smline"
        startmenu.appendChild(smline)
        smprof = document.createElement('div')
        smprof.className = "smprof buttonhover"
        smprof.innerHTML = `<img style="width: 41; height: 41; padding: 2px; border-radius: 21px" src="resources/userprofile.png"><span style="position: relative; bottom: 20px; color: white; font: menu;">Hunter Zolomon</span>`
        startmenu.appendChild(smprof)
        shutdown = document.createElement('div')
        shutdown.className = "smshutdown buttonhover"
        shutdown.id = "shutdownbutton"
        shutdown.addEventListener('click',()=>{window.close()})
        startmenu.appendChild(shutdown)
        document.getElementById('shutdownbutton').addEventListener('click',()=>{
            window.close()
        })
    }
    else{
        startmenuup = false
        document.getElementById('startmenupage').className = "startmenupage closestartmenupage"
        setTimeout(()=>{
            document.getElementById('startmenupage').remove()
        },1000)
    }
})


}

window.onload = ()=>{
    load()
}