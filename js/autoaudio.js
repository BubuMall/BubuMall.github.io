$(document).ready(function () {
  // 获取音频对象
  const audioElement = $("<audio>")
    .addClass("nahida")
    .css("display", "none")
    .append(
      $("<source>")
        .attr(
          "src",
          "./sound/初次见面.mp3"
        )
        .attr("type", "audio/mpeg")
    );
  // .insertAfter('header');
  $("header").after(audioElement);

  var audio = $(".nahida")[0];

  // 定义音频链接数组和索引
  var audioLinks = [
    "./sound/初次见面.mp3",
    "./sound/nahida_wait.mp3",
    "https://cdn.jsdelivr.net/gh/BubuMall/Image/audio/nahida_wait.mp3",
  ];
  var audioIndex = 0;

  // 点击 header 播放/暂停音频
  $("header").on("click", function () {
    if (audio.paused) {
      audio.play(); // 播放音频
      audio.addEventListener("ended", (e) => {
        // 监听音频播放完毕事件，播放下一个音频链接
        playNext();
      });
    } else {
      audio.pause(); // 暂停音频
    }
  });

  // 定义播放下一个音频链接函数
  function playNext() {
    // 索引加 1，并对链接数量取余，实现循环播放
    audioIndex = (audioIndex + 1) % audioLinks.length;

    // 切换到下一个音频链接，并自动播放
    audio.src = audioLinks[audioIndex];
    // audio.play();
  }

  // 绑定鼠标移动事件，计时5分钟后重新播放音频
  var timeout = null;
  if (audio.playing) {
    return;
  } else {
    $(document).on("mousemove", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        audio.currentTime = 0;
        playNext();
        audio.play();
        timeout = null;
      }, 360000);
    });
  }

});
