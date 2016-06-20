import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*/html": {
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Roboto,sans-serif",
        "fontSize": 20,
        "lineHeight": 1.42857143,
        "color": "#212121",
        "backgroundColor": "#fafafa"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "a": {
        "background": "0 0",
        "color": "#f50057",
        "textDecoration": "none",
        "transition": ".2s color ease,.2s background ease"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#f50057",
        "textDecoration": "underline"
    },
    "h1": {
        "fontSize": 2.1,
        "marginTop": 28,
        "marginRight": 0,
        "marginBottom": 14,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "inherit"
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle"
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Menlo,Monaco,Consolas,\"Courier New\",monospace",
        "fontSize": 20,
        "display": "block",
        "paddingTop": 13.5,
        "paddingRight": 13.5,
        "paddingBottom": 13.5,
        "paddingLeft": 13.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 14,
        "marginLeft": 0,
        "lineHeight": 1.42857143,
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "color": "#333",
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #ccc",
        "borderRadius": 4
    },
    "code": {
        "fontFamily": "monospace",
        "fontSize": 0.7,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "color": "#757575",
        "backgroundColor": "#fff",
        "borderRadius": 3,
        "border": "1px solid #e0e0e0",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "MozBackgroundClip": "padding",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "whiteSpace": "pre-wrap",
        "wordWrap": "break-word"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    ":before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    ":after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "html": {
        "fontSize": 10,
        "WebkitTapHighlightColor": "transparent"
    },
    "a:focus": {
        "color": "#f50057",
        "textDecoration": "underline",
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "h2": {
        "fontFamily": "inherit",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 1.7,
        "marginBottom": 14,
        "fontSize": 1.7
    },
    "h3": {
        "fontFamily": "inherit",
        "fontWeight": "400",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 28,
        "marginBottom": 14,
        "fontSize": 1
    },
    "p": {
        "marginTop": 1.5,
        "marginRight": 0,
        "marginBottom": 14,
        "marginLeft": 0,
        "lineHeight": 1.6
    },
    "ul": {
        "marginTop": 0,
        "marginBottom": 14
    },
    "list-unstyled": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-inline": {
        "paddingLeft": 0,
        "listStyle": "none",
        "marginLeft": -5
    },
    "list-inline>li": {
        "display": "inline-block",
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 0.8,
        "color": "inherit",
        "whiteSpace": "pre",
        "backgroundColor": "transparent",
        "borderRadius": 0,
        "fontFamily": "monospace",
        "overflow": "auto",
        "wordWrap": "normal",
        "border": "none"
    },
    "form-control::-moz-placeholder": {
        "color": "#777",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "#777"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "visible-md-block": {
        "display": "none!important"
    },
    "visible-lg-block": {
        "display": "none!important"
    },
    "fa": {
        "display": "inline-block",
        "font": "normal normal normal 14px/1 FontAwesome",
        "fontSize": "inherit",
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "fa-heart:before": {
        "content": "\\f004"
    },
    "fa-star:before": {
        "content": "\\f005"
    },
    "fa-github:before": {
        "content": "\\f09b"
    },
    "fa-angle-double-right:before": {
        "content": "\\f101"
    },
    "fa-code-fork:before": {
        "content": "\\f126"
    },
    "::selection": {
        "background": "#ff4081",
        "color": "#fff"
    },
    "::-moz-selection": {
        "background": "#ff4081",
        "color": "#fff"
    },
    "aside section ul": {
        "paddingLeft": 18,
        "marginBottom": 0
    },
    "aside section ul li": {
        "marginBottom": 15
    },
    "aside section ul li:last-child": {
        "marginBottom": 0
    },
    "aside section ul li spandisqus-author": {
        "color": "#757575",
        "fontSize": 0.8
    },
    "aside section ul li a": {
        "fontSize": 0.8
    },
    "aside recent-comments-section": {
        "marginTop": 58,
        "display": "none"
    },
    "page-content content": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": 710,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15
    },
    "highlight": {
        "background": "#fff"
    },
    "highlight c": {
        "color": "#998",
        "fontStyle": "italic"
    },
    "highlight err": {
        "color": "#a61717",
        "backgroundColor": "#e3d2d2"
    },
    "highlight k": {
        "fontWeight": "700"
    },
    "highlight o": {
        "fontWeight": "700"
    },
    "highlight cm": {
        "color": "#998",
        "fontStyle": "italic"
    },
    "highlight cp": {
        "color": "#999",
        "fontWeight": "700"
    },
    "highlight c1": {
        "color": "#998",
        "fontStyle": "italic"
    },
    "highlight cs": {
        "color": "#999",
        "fontWeight": "700",
        "fontStyle": "italic"
    },
    "highlight gd": {
        "color": "#000",
        "backgroundColor": "#fdd"
    },
    "highlight gd x": {
        "color": "#000",
        "backgroundColor": "#faa"
    },
    "highlight ge": {
        "fontStyle": "italic"
    },
    "highlight gr": {
        "color": "#a00"
    },
    "highlight gh": {
        "color": "#999"
    },
    "highlight gi": {
        "color": "#000",
        "backgroundColor": "#dfd"
    },
    "highlight gi x": {
        "color": "#000",
        "backgroundColor": "#afa"
    },
    "highlight go": {
        "color": "#888"
    },
    "highlight gp": {
        "color": "#555"
    },
    "highlight gs": {
        "fontWeight": "700"
    },
    "highlight gu": {
        "color": "#aaa"
    },
    "highlight gt": {
        "color": "#a00"
    },
    "highlight kc": {
        "fontWeight": "700"
    },
    "highlight kd": {
        "fontWeight": "700"
    },
    "highlight kp": {
        "fontWeight": "700"
    },
    "highlight kr": {
        "fontWeight": "700"
    },
    "highlight kt": {
        "color": "#458",
        "fontWeight": "700"
    },
    "highlight m": {
        "color": "#099"
    },
    "highlight s": {
        "color": "#d14"
    },
    "highlight na": {
        "color": "teal"
    },
    "highlight nb": {
        "color": "#0086b3"
    },
    "highlight nc": {
        "color": "#458",
        "fontWeight": "700"
    },
    "highlight no": {
        "color": "teal"
    },
    "highlight ni": {
        "color": "purple"
    },
    "highlight ne": {
        "color": "#900",
        "fontWeight": "700"
    },
    "highlight nf": {
        "color": "#900",
        "fontWeight": "700"
    },
    "highlight nn": {
        "color": "#555"
    },
    "highlight nt": {
        "color": "navy"
    },
    "highlight nv": {
        "color": "teal"
    },
    "highlight ow": {
        "fontWeight": "700"
    },
    "highlight w": {
        "color": "#bbb"
    },
    "highlight mf": {
        "color": "#099"
    },
    "highlight mh": {
        "color": "#099"
    },
    "highlight mi": {
        "color": "#099"
    },
    "highlight mo": {
        "color": "#099"
    },
    "highlight sb": {
        "color": "#d14"
    },
    "highlight sc": {
        "color": "#d14"
    },
    "highlight sd": {
        "color": "#d14"
    },
    "highlight s2": {
        "color": "#d14"
    },
    "highlight se": {
        "color": "#d14"
    },
    "highlight sh": {
        "color": "#d14"
    },
    "highlight si": {
        "color": "#d14"
    },
    "highlight sx": {
        "color": "#d14"
    },
    "highlight sr": {
        "color": "#009926"
    },
    "highlight s1": {
        "color": "#d14"
    },
    "highlight ss": {
        "color": "#990073"
    },
    "highlight bp": {
        "color": "#999"
    },
    "highlight vc": {
        "color": "teal"
    },
    "highlight vg": {
        "color": "teal"
    },
    "highlight vi": {
        "color": "teal"
    },
    "highlight il": {
        "color": "#099"
    },
    "post img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "post post-title a": {
        "color": "#212121",
        "textDecoration": "none"
    },
    "post post-meta": {
        "fontSize": 0.8,
        "color": "#757575"
    },
    "post post-meta a": {
        "color": "#757575"
    },
    "post post-content": {
        "color": "#212121"
    },
    "post post-reading-link": {
        "fontSize": 0.8,
        "fontWeight": "500",
        "textTransform": "uppercase",
        "marginTop": 1.9,
        "marginBottom": 3.6
    },
    "post post-footer": {
        "marginTop": 2.9
    },
    "post-share share-title": {
        "color": "#757575",
        "fontSize": 0.8,
        "fontWeight": "400"
    },
    "post-share share-social-medias": {
        "marginTop": 10,
        "marginBottom": 0
    },
    "post-share share-social-medias twitter-social-media": {
        "width": 100
    },
    "post-share share-social-medias facebook-social-media": {
        "width": 105,
        "marginTop": -6
    },
    "post-share share-social-medias google-plus-social-media": {
        "width": 80
    },
    "post-share share-social-medias linkedin-social-media": {
        "width": 120
    },
    "site-header": {
        "height": "100%",
        "position": "static",
        "width": "100%",
        "textAlign": "center",
        "borderBottom": "1px solid rgba(0,0,0,.14)"
    },
    "site-header avatar-container": {
        "minHeight": 215,
        "paddingTop": 22,
        "paddingRight": 22,
        "paddingBottom": 22,
        "paddingLeft": 22,
        "backgroundColor": "#212121"
    },
    "site-header avatar-container author-picture": {
        "width": 100,
        "borderRadius": 50
    },
    "site-header avatar-container author-name": {
        "color": "#f5f5f5",
        "fontSize": 24,
        "marginTop": 10,
        "marginBottom": 20,
        "fontFamily": "Oswald",
        "fontWeight": "300"
    },
    "site-header avatar-container nav": {
        "fontSize": 14
    },
    "site-header avatar-container nav a": {
        "color": "#919496",
        "textDecoration": "none"
    },
    "site-header avatar-container nav a:hover": {
        "color": "#f5f5f5"
    }
});