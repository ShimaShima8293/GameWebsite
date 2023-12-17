var theme = 0;
function changeTheme() {
    theme++;
    if (theme > 2) {
        theme = 0;
    }
    
    switch (theme) {
        case 0:
            document.documentElement.style.setProperty("--color1", "#fffae8");
            document.documentElement.style.setProperty("--color2", "#fff2c9");
            document.documentElement.style.setProperty("--color3", "#ffea9f");
            break;

        case 1:
            document.documentElement.style.setProperty("--color1", "#e8fdff");
            document.documentElement.style.setProperty("--color2", "#c9fbff");
            document.documentElement.style.setProperty("--color3", "#9ff5ff");
            break;


        case 2:
            document.documentElement.style.setProperty("--color1", "#e9ffe8");
            document.documentElement.style.setProperty("--color2", "#c9ffd2");
            document.documentElement.style.setProperty("--color3", "#9fffb2");
            break;
    }
}