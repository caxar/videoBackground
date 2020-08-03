const video = document.querySelector('.video-container'),
	  btn = document.querySelector('.switch-btn');

window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader');
	preloader.classList.add('hidden');
});

btn.addEventListener('click', e => {
	if(!btn.classList.contains('slide')) {
		btn.classList.add('slide')
		video.pause();
	} else {
		btn.classList.remove('slide');
		video.play();
	}
});

