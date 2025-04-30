
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeader = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link")


function changeTheme () {

    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

//function accordion
accordionHeader.forEach(header => {

    header.addEventListener("click", () => {

        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})

menuLinks.forEach(item => { 
    item.addEventListener("click", () =>{ 
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})

const form =document.querySelector(".form contato");

form.addEventListener("submit", async function (event){
    event.preventDefault();/* impede o natualização da página. */

    const formData = formData(form);
    const action =form.getAttribute("action")

    try{
        let response = await fetch(action, {
            method: "Post",
            body:formData,
            header:{"accept" : "application/json"}
        });

        if(response.ok){
            alert("mensagem enviada com susesso");
            form.reset();         
        }
        else {
            alert("erro ao enviar a mensagem. tente novamente.")
        }        
    }

    catch (erro){
        alert("erro de conexão. Verifique sua internet ");
    }
});
window.addEventListener('load', () => {
    addEventListener.init({ /* instancia */
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,

    })
});