# gitbook-plugin-feed

[![npm](https://img.shields.io/npm/v/gitbook-plugin-feed.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-feed) [![npm](https://img.shields.io/npm/dm/gitbook-plugin-feed.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-feed) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-feed.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-feed)

This plugin will add feed(RSS 2.0/Atom 1.0) for your GitBook.

## Sample config

```
{
    "plugins": [
        "feed"
    ],
    "pluginsConfig": {
        "feed": {
            "hostname": "https://yuanbin.gitbooks.io/test/content",
            "title": "GitBook Test",
            "author": "billryan"
        }
    }
}
```

## License

MIT
