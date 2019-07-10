$(function() {
  /* Sliders */
  $('.main-carousel').flickity({
    initialIndex: 0,
    prevNextButtons: true,
    pageDots: true,
    freeScroll: false,
    wrapAround: true,
    autoPlay: 5000,
    selectedAttraction: 0.05,
    friction: 0.67
  });


  /* Modal window */
	$('.js-modal-trigger').on('click', function(e) {
    $(this).siblings('.modal__window').addClass('is-visible')
  });

  $('.js-modal-close').on('click', function(e) {
    $('.modal__window').removeClass('is-visible')
  });

  /* Hamburger animation */
  $('.js-hamburger').on('click', function(e) {
    $('.navbar__toggle-icon').toggleClass('active')
    $('.navbar__menu--mobile').slideToggle()
    console.log($('.navbar__menu--mobile'))
  })

  $('.navbar__link').on('click', function(e) {
    e.preventDefault()
    var destination = e.target.getAttribute('href')
		var section = $(destination)[0]
		section.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		})
  })

  $('.navbar__menu--mobile .navbar__link').on('click', function(e) {
    $('.navbar__toggle-icon').removeClass('active')
    $('.navbar__menu--mobile').slideToggle()
  })

  /* Dropdown animation */
  $('.js-dropdown__click-trigger').on('click', function(e) {
    $(this).find('.dropdown').toggleClass('active')
  })

  /* Accordion */
  $('.accordion__toggle').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.accordion__body').slideUp(200);
      $('.accordion__item > .accordion__toggle-icon').removeClass('fa-minus').addClass('fa-plus');
    } else {
      $('.accordion__toggle-icon').removeClass('fa-minus').addClass('fa-plus');
      $(this).find('.accordion__toggle-icon').removeClass('fa-plus').addClass('fa-minus');
      $('.accordion__toggle').removeClass('active');
      $(this).addClass('active');
      $('.accordion__body').slideUp(200);
      $(this).siblings('.accordion__body').slideDown(200);
    }
  });
});