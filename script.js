function createLinks() {
    document.querySelectorAll('.fa-brands').forEach((element) => {
        if (element.classList.contains('fa-linkedin')) {
            element.setAttribute('href', 'https://www.linkedin.com/in/alex-hernandez-885851b1/')
        }
        if (element.classList.contains('fa-gitlab')) {
            element.setAttribute('href', 'https://gitlab.com/DogBoneZone')
        }
        if (element.classList.contains('fa-github')) {
            element.setAttribute('href', 'https://github.com/DogBoneZone')
        }
        if (element.classList.contains('fa-patreon')) {
            element.setAttribute('href', 'https://www.patreon.com/swordsandstones')
        }
    })
}

function addListeners() {
    document.querySelectorAll('.toggle-sidebar').forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelector('#main-sidebar').classList.toggle('active')
        })
    })

    document.querySelector('.main-segment').addEventListener('click', () => {
        if (document.querySelector('#main-sidebar').classList.contains('active')) {
            document.querySelector('#main-sidebar').classList.remove('active')
        }
    })
}

createLinks()
addListeners()