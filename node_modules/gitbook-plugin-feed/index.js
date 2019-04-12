var url = require('url');
var Feed = require('feed');

var feed = null;
var feed_cfg = null;

module.exports = {
  book: {
    assets: './assets',
    js: [
      "plugin.js"
    ]
  },
  hooks: {
    // Get and init RSS configuration
    'init': function () {
      if (this.output.name != 'website') return;
      var lang = this.isLanguageBook()? this.config.values.language : '';
      if (lang) lang = lang + '/';
      feed_cfg = this.config.get('pluginsConfig.feed');
      feed_cfg.description = feed_cfg.description || feed_cfg.title;
      feed_cfg.hostname = url.resolve(feed_cfg.hostname, '/') + lang;
      feed_cfg.id = feed_cfg.id || feed_cfg.hostname;
      feed_cfg.format = feed_cfg.format || 'atom';
      feed_cfg.feed_format = 'atom-1.0';
      if (feed_cfg.format === 'rss') feed_cfg.feed_format = 'rss-2.0';

      feed_cfg.link = feed_cfg.link || feed_cfg.hostname;
      feed_cfg.author.name = feed_cfg.author;
      feed_cfg.author.link = feed_cfg.author;
      feed_cfg.author.email = feed_cfg.author;
      feed = new Feed(feed_cfg);
    },

    "page": function (page) {
      if (this.output.name != 'website') return page;
      if (typeof page.title === 'undefined') return page;
      var _title = page.title;
      var _desc = page.content || 'page description';
      var _content = page.content || 'page content';
      var page_path = this.output.toURL(page.path);
      if (page_path === './') page_path = '';
      var _url = feed_cfg.hostname + page_path;
      var _id = _url;

      var _date = page.date || new Date();

      feed.addItem({
        title: _title,
        description: _desc,
        content: _content,
        link: _url,
        id: _url,
        date: _date
      });

      return page;
    },

    "finish": function () {
      if (this.output.name != 'website') return;
      // var lang = this.isLanguageBook()? this.config.values.language : '';
      feed.categories = feed_cfg.categories;
      var feed_content = feed.render(feed_cfg.feed_format);
      return this.output.writeFile('feed.xml', feed_content);
    }
  }
};
