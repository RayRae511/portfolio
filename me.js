const overlay = document.getElementById ('overlay')
const sidebar = document.getElementById ('sidebar')
const bars = document.getElementById ('bars')
let menuOpen = false

function openMenu(){
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.width = '250px'
}
function closeMenu(){
    menuOpen = false
    overlay.style.display = 'none'
    sidebar.style.width = '0px'
}
bars.addEventListener('click', function(){
    if (!menuOpen){
        openMenu()
    }
})

overlay.addEventListener('click', function(){
    if (menuOpen){
        closeMenu
    }
})