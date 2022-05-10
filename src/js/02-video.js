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
    localStorage.setItem(currentTimeKey, data.seconds);
  }, 1000),
);

const currentTimeInStorage = localStorage.getItem(currentTimeKey);
if (currentTimeInStorage) {
  player.setCurrentTime(currentTimeInStorage);
}
