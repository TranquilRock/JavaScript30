window.onload = function(){
    const sliderImages = document.querySelectorAll('.slide-in');
    function Scrolling(){
        sliderImages.forEach((img) => {
            // console.log(img);
            const screenBottom = window.scrollY + window.innerHeight;
            const scrollOvered = (screenBottom > img.height/4*3);
            const aboveBottom = (window.scrollY < img.offsetTop + img.height)
            if(scrollOvered && aboveBottom){
                img.classList.add('active');
            }else{
                img.classList.remove('active');
            }
            console.log(window.scrollY);
        });
    }
    window.addEventListener('scroll',debounce(Scrolling));
}