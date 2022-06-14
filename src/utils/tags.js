// //  @see: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#elements
// const blockElements = ["address","article","aside","blockquote","details","dialog","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","ol","p","pre","section","table","ul"];

// // Trusted tags, will keep the tag name the same
// const trustedTags = ["a","abbr","ad","audio","b","blockquote","br","code","col","colgroup","dd","del","dl","dt","div","em","fieldset","h1","h2","h3","h4","h5","h6","hr","i","img","ins","label","legend","li","ol","p","q","source","span","strong","sub","sup","table","tbody","td","tfoot","th","thead","tr","title","u","ul","video"];

// // List of trusted properties, properties not in the list will be removed
// const trustAttrs = ["align","allowfullscreen","alt","app-id","appid","apid","author","autoplay","border","cellpadding","cellspacing","class","color","colspan","controls","data-src","dir","face","frameborder","height","href","id","ignore","loop","media","muted","name","path","poster","rowspan","size","span","src","start","style","type","unit-id","unitId","width","xmlns"];

// // block-level tags, which will be converted to div
// const blockTags = [ "address", "article", "aside", "body", "center", "cite", "footer", "header", "html", "nav", "pre", "section"];

// // @see: http://xahlee.info/js/html5_non-closing_tag.html
// const selfClosingTags = [ "area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"];

// // Removed tags (where svg series tags are converted to images)
// const ignoreTags = ["area","base","basefont","canvas","circle","command","ellipse","frame","head","input","isindex","keygen","line","link","map","meta","param","path","polygon","rect","script","source","svg","textarea","track","use","wbr"];

// // Labels that can only be displayed with rich-text (where images cannot be previewed, video, audio, etc. cannot be displayed)
// const richOnlyTags = ["a","colgroup","fieldset","legend","picture","table","tbody","td","tfoot","th","thead","tr"];

// // whitespace
// const blankChar = [" ","\u00A0","\t","\r","\n","\f"];