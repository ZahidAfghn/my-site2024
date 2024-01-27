const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const color = e.currentTarget.classList;
        if(color.contains("btn1")) {
            theme.style.setProperty("--theme-color", "#fff");
        }else{
            theme.style.("--theme-color", "#fff")
        }
    });
});