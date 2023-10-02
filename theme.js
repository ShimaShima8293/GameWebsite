var theme = 0;
function changeTheme() {
    theme++;
    if (theme > 2) {
        theme = 0;
    }
    
    switch (theme) {
        case 0:
            document.documentElement.style.setProperty("--color1", "#112211");
            document.documentElement.style.setProperty("--color1-2", "#001100");
            document.documentElement.style.setProperty("--color2", "#003801");
            document.documentElement.style.setProperty("--color2-2", "#002701");
            document.documentElement.style.setProperty("--bgimage", 'url("images/bg.png")');
            break;

        case 1:
            document.documentElement.style.setProperty("--color1", "#002288");
            document.documentElement.style.setProperty("--color1-2", "#001155");
            document.documentElement.style.setProperty("--color2", "#2244dd");
            document.documentElement.style.setProperty("--color2-2", "#113399");
            document.documentElement.style.setProperty("--bgimage", 'url("images/beach.png")');
            break;


        case 2:
            document.documentElement.style.setProperty("--color1", "#444444");
            document.documentElement.style.setProperty("--color1-2", "#222222");
            document.documentElement.style.setProperty("--color2", "#444444");
            document.documentElement.style.setProperty("--color2-2", "#222222");
            document.documentElement.style.setProperty("--bgimage", 'url("")');
            break;
    }
}