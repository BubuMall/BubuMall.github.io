// 自动播放声音


$(document).ready(function () {
    let audioUrls = ["https://cdn.jsdelivr.net/gh/BubuMall/Image/audio/nahida_init.mp3","https://cdn.jsdelivr.net/gh/BubuMall/Image/audio/nahida_chat.mp3"];
    let currentAudioIndex = 0;

    let audioElement = $("<audio>").attr("src", audioUrls[currentAudioIndex]).attr("autoplay", true);
    let played = false; //初始状态
    let timer;
    let audio = audioElement[0];

    $("header").after(audioElement);

    function playAudio(){
        if (audio.paused) {
            audio.play();
            played = true
        } else {
            audio.pause();
            played = false
            currentAudioIndex = (currentAudioIndex + 1) % audioUrls.length;
        }
    }
    //   点击切换播放状态
    $("header").click(function () {
        playAudio()
    });
    //适配移动端
    $("header").on("touchstart click",(function () {
        playAudio()
    }));

    function startTimer() {
        timer = setTimeout(function () {
            if (!played) {
                played = true;
                audio.play();
            }
        }, 10000); // 300000ms（5min）不动就播放
    }

    function resetTimer() {
        clearTimeout(timer);
        played = false;
        audio.pause();
    }

    //   鼠标键盘动了就重新计时
    $(document).on("mousemove keydown", function () {
        resetTimer();
        startTimer();
        audio.currentTime = 0;
    });

    startTimer();
});