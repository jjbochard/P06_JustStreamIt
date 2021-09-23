
class Carousel {
    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()
        this.moveCallbacks.forEach(cb => cb(0))
    }

    setStyle() {
        let ratio = this.items.length / this.options.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%"
        )
    }
    createNavigation() {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true) {
            return
        }
        this.onMove(index => {
            if (index = 0) {
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.items[this.currentItem + this.options.slidesVisible] === undefined) {
                prevButton.classList.add('carousel__next--hidden')

            } else {
                prevButton.classList.remove('carousel__next--hidden')

            }
        })
    }

    next() {
        this.goToItem(this.currentItem + this.options.slidesToScroll)
    }
    prev() {
        this.goToItem(this.currentItem - this.options.slidesToScroll)

    }

    goToItem(index) {
        if (index < 0) {
            index = this.items.length - this.options.slidesVisible
        } else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index > this.currentItem)) {
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))

    }

    onMove(cb) {
        this.moveCallbacks.push(cb)
    }

    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div

    }
}

document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#carousel1'), {
        slidesVisible: 4,
        slidesToScroll: 1,
        loop: true
    })
})
document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#carousel2'), {
        slidesVisible: 4,
        slidesToScroll: 1,
        loop: true
    })
})
document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#carousel3'), {
        slidesVisible: 4,
        slidesToScroll: 1,
        loop: true
    })
})
