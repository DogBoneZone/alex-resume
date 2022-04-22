
function createContactElement() {
    let self = {
        name: 'Alex Hernandez',
        title: 'E-Commerce Specialist & Developer',
        portrait: 'images/shrek-portrait.webp',
        phone: '747-235-9300',
        email: 'alexrhern@gmail.com'
    }

    let portraitImage = document.createElement('img')
    portraitImage.id = 'self-portrait'
    portraitImage.src = self.portrait
    portraitImage.alt = 'Alex Hernandez'

    let contactElement = document.createElement('div')
    contactElement.classList.add('contact-info')
    contactElement.innerHTML = `<label class="title-name">${self.name}</label>
                                <label class="title-name">${self.title}</label>
                                <label>${self.email}</label>
                                <label>${self.phone}</label>`
    document.querySelector('.contact-container').append(portraitImage, contactElement)
}

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
createContactElement()
addListeners()