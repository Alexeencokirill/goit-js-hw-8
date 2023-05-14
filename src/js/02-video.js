// import Player from '@vimeo/player';
// import { throttle } from 'lodash';


// const iframe = document.querySelector('iframe')
// const player = new Player('iframe');

// player.on('timeupdate', throttle( evt => {
//     localStorage.setItem('videoplayer-current-time', evt.seconds);
// }, 1000));

// player
// .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
// .catch(function (error) {
//     console.error(error)
// });




import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ duration, percent, seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:

        break;
    }
  });