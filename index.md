---
layout: default
title:
---
<script async defer src="https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js" integrity="sha256-xoh0y6ov0WULfXcLMoaA6nZfszdgI8w2CEJ/3k8NBIE=" crossorigin="anonymous"></script>
<script async defer src="js/slim_bookmarks.js"></script>

### Preamble:
So you exported your precious Firefox bookmarks to a html file.<br>
You expect there is nothing but links to the websites you collected, but nooooo, there are more things included in the file than links to websites.<br>
This tool will strip these meta data.

### Options:
The default checked ones are safe to remove without breaking user customized functions.<br>
For each bookmark, will do the following:

<input type="checkbox" id="idAddDate" checked>Remove `ADD_DATE` attribute<br>
    `ADD_DATE` attribute records the date when the bookmark is added.

<input type="checkbox" id="idLastModified" checked>Remove `LAST_MODIFIED` attribute<br>
    `LAST_MODIFIED` attribute records the latest date when the bookmark is modified.

<input type="checkbox" id="idLastCharset" checked>Remove `LAST_CHARSET` attribute<br>
    `LAST_CHARSET` attribute records the character encoding of the site the bookmark linked to.

<input type="checkbox" id="idIcon" checked>Remove `ICON` attribute<br>
    `ICON` attribute stores a copy of the site favicon.

<input type="checkbox" id="idIconUri" checked>Remove `ICON_URI` attribute<br>
    `ICON_URI` attribute records the URI of the site favicon.

<input type="checkbox" id="idDd" checked>Remove `DD` element<br>
    `DD` element maps to the "Description" field in bookmark properties dialog in Firefox.

<input type="checkbox" id="idTags">Remove `TAGS` attribute<br>
    `TAGS` attribute maps to the "Tags" field in bookmark properties dialog in Firefox.

<input type="checkbox" id="idShortcutUrl">Remove `SHORTCUTURL` attribute<br>
    `SHORTCUTURL` attribute maps to the "Keyword" field in bookmark properties dialog in Firefox.

<input type="checkbox" id="idWebPanel">Remove `WEB_PANEL` attribute<br>
    `WEB_PANEL` attribute maps to the "Load this bookmark in the sidebar" checkbox in bookmark properties dialog in Firefox.

### Process file:
Select bookmarks file to process (usually named `bookmarks.html`), then you will be prompted to save the processed file:

<input type="file" accept=".html,.htm" id="idInputFiles">

**This tool runs in your browser only, your bookmarks file is not transmitted over the internet, not even a bit!**

### Related links:
* [MSDN - Netscape Bookmark File Format](https://msdn.microsoft.com/en-us/library/aa753582(v=vs.85).aspx)
* [mozillaZine - Bookmarks.html](https://kb.mozillazine.org/Bookmarks.html)
* [fileformats - Netscape bookmarks](http://fileformats.archiveteam.org/wiki/Netscape_bookmarks)
