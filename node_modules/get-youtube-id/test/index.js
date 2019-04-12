var test = require('tape');
var getYouTubeID = require('../index.js');

// A bunch of youtube url formats collection from Stack Overflow. All of them
// should resolve to a specific video. Pull requests welcome if more example
// types can be found.
var tests = [
  { expectedID: '-wtIMTCHWuI', url: 'http://www.youtube.com/watch?v=-wtIMTCHWuI' },
  { expectedID: '-wtIMTCHWuI', url: 'http://www.youtube.com/v/-wtIMTCHWuI?version=3&autohide=1' },
  { expectedID: '-wtIMTCHWuI', url: 'http://youtu.be/-wtIMTCHWuI' },
  { expectedID: 'zc0s358b3Ys', url: 'http://www.youtube.com/embed/zc0s358b3Ys' },
  { expectedID: '-wtIMTCHWuI', url: ' http://www.youtube.com/watch?v=-wtIMTCHWuI ' },
  { expectedID: 'zc0s358b3Ys', url: 'http://youtu.be/zc0s358b3Ys' },
  { expectedID: 'u8nQa1cJyX8', url: 'http://www.youtube.com/watch?v=u8nQa1cJyX8&a=GxdCwVVULXctT2lYDEPllDR0LRTutYfW' },
  { expectedID: 'u8nQa1cJyX8', url: 'http://www.youtube.com/watch?v=u8nQa1cJyX8' },
  { expectedID: 'zc0s358b3Ys', url: 'http://youtu.be/zc0s358b3Ys' },
  { expectedID: 'zc0s358b3Ys', url: 'http://youtu.be/zc0s358b3Ys' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://youtu.be/0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://youtu.be/0zM3nApSvMg' },
  { expectedID: '0zM3nApSvMg', url: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s' },
  { expectedID: 'QdK8U-VIH_o', url: 'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o' },
  { expectedID: 'LXilEPmkoQY', url: 'http://www.youtube.com/embed/LXilEPmkoQY' },
  { expectedID: 'LXilEPmkoQY', url: 'http://www.youtube.com/v/LXilEPmkoQY' },
  { expectedID: 'u8nQa1cJyX8', url: 'http://www.youtube.com/watch?argv=xyzxyzxyzxy&v=u8nQa1cJyX8' },
  { expectedID: '0zM3nApSvMg', url: 'youtube.com/watch?feature=feedrec_grec_index&v=0zM3nApSvMg ' },
  { expectedID: 'y_Rd2hByRyc', url: 'http://www.youtube.com/watch?feature=player_embedded&v=y_Rd2hByRyc' }
];

test('match example cases', function(t) {
  t.plan(tests.length);

  tests.forEach(function(testCase) {
    t.equal(getYouTubeID(testCase.url), testCase.expectedID, 'URL: ' + testCase.url);
  });

});
