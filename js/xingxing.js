$(document).ready(function () {
    // 获取音频对象
    const audioElement = $("<audio>")
      .css("display", "none")
      .append(
        $("<source>")
          .attr(
            "src",
            "./sound/nahida_chat.mp3"
          )
          .attr("type", "audio/mpeg")
      );
    $("header").after(audioElement);

    var audio = audioElement[0];

    // 定义音频链接数组和索引
    var audioLinks = [
      "./sound/nahida_init.mp3",
      "./sound/nahida_chat.mp3",
      "./sound/nahida_wait.mp3",
    ];
    var audioIndex = 0;
    var hasEnded = false;

    // 设置初始音频
    audio.src = audioLinks[audioIndex];

    // 监听音频播放完毕事件
    audio.addEventListener("ended", function() {
      hasEnded = true;
    });

    // 点击 header 播放/暂停音频
    $("header").on("click", function () {
      if (hasEnded && audioIndex < audioLinks.length - 1) {
        // 播放完毕，切换到下一个音频
        hasEnded = false;
        audioIndex++;
        audio.src = audioLinks[audioIndex];
        audio.play();
      } else if (audio.paused) {
        // 暂停状态，播放当前音频
        audio.play();
      } else {
        // 播放状态，暂停
        audio.pause();
      }
    });

    // 5 分钟无操作自动播放等待音频
    var timeout = null;
    function resetTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        // 如果当前不是等待音频，则切换到等待音频
        if (audioIndex < audioLinks.length - 1) {
          hasEnded = false;
          audioIndex = audioLinks.length - 1;
          audio.src = audioLinks[audioIndex];
          audio.play();
        }
      }, 5 * 60 * 1000); // 5 分钟
    }

    // 初始化并开始监听
    resetTimeout();
    $(document).on("mousemove keypress click scroll", function () {
      resetTimeout();
    });
  });
