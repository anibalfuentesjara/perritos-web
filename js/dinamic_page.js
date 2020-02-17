//Selecciona todos los div con la clase portfolio-item-wrapper
const porftolioItems = document.querySelectorAll('.portfolio-item-wrapper');

//Para cada elemento seleccionado aplico la funcion
porftolioItems.forEach(portfolioItem => {
	portfolioItem.addEventListener('mouseover', () => {
		portfolioItem.childNodes[1].classList.add('img-darken');
	})
	portfolioItem.addEventListener('mouseout', () => {
		portfolioItem.childNodes[1].classList.remove('img-darken');
	})
})