var btn = document.getElementById('gerar')
btn.addEventListener('click',inserir)

function inserir(){
    //ocultar pagina 1 e exibir a pagina 2
    let p1 = document.getElementById('page1')
    let p2 = document.getElementById('page2')

    p1.style.display = "none"
    p2.style.display = "flex"

    //inserir o codigo em html
    let codeHtml = document.getElementById('codeHtml').value 
    p2.innerHTML = codeHtml

    //inserir o codigo em js
    let codeJs = document.getElementById('codeJs').value 
    document.getElementById('jsUser').innerHTML = codeJs

    document.getElementById("link").setAttribute("href", "/CSS/style2.css")

}