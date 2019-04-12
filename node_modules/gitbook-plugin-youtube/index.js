var getYouTubeID = require('get-youtube-id');

module.exports = {
    blocks: {
        youtube: {
            process: function(blk) {
                var videoId = getYouTubeID(blk.body) || blk.body;
                var url = "http://youtube.com/watch?v="+videoId;
                var videoThumb = 'http://img.youtube.com/vi/'+videoId+'/0.jpg' /* 0.jpg is default full resolution image. 1–3.jpg is thumbnails */

                if (this.generator != "website") {
                    return '<img src="'+videoThumb+'" alt="YouTube video thumbnail" /><p><a href="'+url+'">Video link</p></a>';
                }

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                +'<iframe frameborder="0" allowfullscreen style="border: none;position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="//www.youtube.com/embed/'+videoId+'"></iframe>'
                +'</div>';
            }
        }
    }
};
