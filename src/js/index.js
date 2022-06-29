// CSS
import "../scss/style.scss"


// HTML
import index from "./../index.html"
import sos1 from "./../sos1.html"
import sos2 from "./../sos2.html"
import sos3 from "./../sos3.html"
import sos4 from "./../sos4.html"
import codan1 from "./../codan1.html"
import codan2 from "./../codan2.html"
import codan3 from "./../codan3.html"
import codan4 from "./../codan4.html"


// https://getbootstrap.com/docs/5.0/getting-started/webpack/
// import { Collapse, Carousel, Modal } from 'bootstrap'
import { Modal } from 'bootstrap'




import flatpickr from "flatpickr"
import { Danish } from "flatpickr/dist/l10n/da.js"




// GSAP
import gsap from 'gsap';
// window.gsap = gsap; // So can be used from other files - like external draggable.js





const addLoadedClass = () => {
	const body = document.body
	body.classList.add("pageloaded")
}



const transitionIn = () => {
	const transitionElement = document.getElementsByTagName("main")

	gsap.to(transitionElement, {
		opacity: 1,
		duration: 0.25
	})
	
}








const flatpickrInit = () => {
	flatpickr.localize(Danish)

	const flatpickrElements = document.querySelectorAll('.js-flatpickr')
	
	flatpickrElements.forEach(element => {
		flatpickr(element, {
			altInput: true,
    		altFormat: "l, j. F, Y",
			dateFormat: "d-m-Y",
			allowInput: true,
			disableMobile: false			
		
		})
	})



	const flatpickrElementsNative = document.querySelectorAll('.js-flatpickr-native')
	
	flatpickrElementsNative.forEach(element => {
		flatpickr(element, {
			altInput: true,
    		altFormat: "l, j. F, Y",
			dateFormat: "d-m-Y",
			allowInput: true,
			disableMobile: true
		})
	})
}












// // Scrolling
// const initScrollListener = () => {
// 	document.addEventListener('scroll', (event) => {
// 	},{ passive: true })
// }


// Resize
// window.addEventListener('resize', () => {
// })


// DOM ready
window.addEventListener("DOMContentLoaded", () => {
	addLoadedClass()
	transitionIn()
	flatpickrInit()
})