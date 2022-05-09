import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTimeKey = 'videoplayer-current-time';

const player = new Player('handstick', {
  id: 236203659,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(data => {
    setVideoPlayerCurrentTime(data.seconds);
  }, 1000),
);

if (getVideoPlayerCurrentTime() !== null) {
  player.setCurrentTime(getVideoPlayerCurrentTime());
}

function setVideoPlayerCurrentTime(currentTime) {
  localStorage.setItem(currentTimeKey, currentTime);
}

function getVideoPlayerCurrentTime() {
  return localStorage.getItem(currentTimeKey);
}
