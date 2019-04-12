Youtube videos in your book
==============

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add it to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["youtube"]
}
```

You can now add youtube vieo to your book:

```
take a look at this video:

{% youtube %}https://www.youtube.com/watch?v=9bZkp7q19f0{% endyoutube %}
```

The video will be replace by the embed iframe in the website and by a link in the ebook versions.
