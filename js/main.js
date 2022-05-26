const menu = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const body = document.querySelector('body');
const initialTheme = 'Light';
const toggleTheme = document.querySelector('#toggle-theme');

// Making the responsive menu

openMenu.addEventListener('click', () => {
    menu.classList.add('active');
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
})

// Making the dark/light theme

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
}

toggleTheme.addEventListener('click', () => {

    activeTheme = localStorage.getItem('theme');

    if (activeTheme === 'light') {
        setTheme('dark');
        toggleTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`
    } else {
        setTheme('light');
        toggleTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }
})

const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');

    activeTheme = localStorage.getItem('theme');

    if (activeTheme === 'light') {
        toggleTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`
    } else {
        toggleTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }

    savedTheme
        ? body.setAttribute('data-theme', savedTheme)
        : setTheme(initialTheme);
}

setThemeOnInit();