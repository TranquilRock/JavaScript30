const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
progressBar.style.flexBasis = '0.1%';

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {//Switch the play/pause button
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function skipTime() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function scrollerUpdateHandler() {
    video[this.name] = this.value;
}//volumn or speed

function progressHandler() {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
}


console.table(progress);
function scrubHandler(e) {
        video.currentTime = e.offsetX / progress.offsetWidth * video.duration;
}//Update currentTime when mouse scrub

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

skipButtons.forEach(skipBtn =>
    skipBtn.addEventListener("click", skipTime));

video.addEventListener("timeupdate", progressHandler);


let mousedown = false;
progress.addEventListener("click",scrubHandler);//Click without move should also work;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
progress.addEventListener("mousemove", (e) => mousedown && scrubHandler(e));

// ranges.forEach(range => range.addEventListener("change", scrollerUpdateHandler));
ranges.forEach(range => range.addEventListener("mousemove", scrollerUpdateHandler));