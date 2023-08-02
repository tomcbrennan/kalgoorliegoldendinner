import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper from 'swiper/bundle'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {

	if (document.querySelector('.reviews-slider')) {
		const reviewsSlider = new Swiper('.reviews-slider', {
			direction: 'horizontal',
			loop: false,
			speed: 1000,
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
			  },
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		})
	}



	// ANIMATIONS

	const fadeDown = document.querySelectorAll('[data-animate]')
	const fadeLeft = document.querySelectorAll('[data-animate-left]')
	const fadeRight = document.querySelectorAll('[data-animate-right]')

	fadeDown.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=25%',
			},
			y: -24,
			opacity: 0,
			duration: 1,
		}

		// Animation time
		gsap.from(element, settings)
	})

	fadeLeft.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=25%',
			},
			x: 24,
			opacity: 0,
			duration: 1,
		}

		// Animation time
		gsap.from(element, settings)
	})

	fadeRight.forEach((element) => {
		const settings = {
			scrollTrigger: {
				trigger: element,
				start: 'top bottom-=25%',
			},
			x: -24,
			opacity: 0,
			duration: 1,
		}

		// Animation time
		gsap.from(element, settings)
	})
})
