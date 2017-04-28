/*
	Author	: Michael Janea (www.michaeljanea.com)
	Version	: 1.2
*/

var fontawesome = '';
var icons = [
    [
        "fa-glass",
        "Glass"
    ],
    [
        "fa-music",
        "Music"
    ],
    [
        "fa-search",
        "Search"
    ],
    [
        "fa-envelope-o",
        "Envelope Outlined"
    ],
    [
        "fa-heart",
        "Heart"
    ],
    [
        "fa-star",
        "Star"
    ],
    [
        "fa-star-o",
        "Star Outlined"
    ],
    [
        "fa-user",
        "User"
    ],
    [
        "fa-film",
        "Film"
    ],
    [
        "fa-th-large",
        "th-large"
    ],
    [
        "fa-th",
        "th"
    ],
    [
        "fa-th-list",
        "th-list"
    ],
    [
        "fa-check",
        "Check"
    ],
    [
        "fa-times",
        "Times"
    ],
    [
        "fa-search-plus",
        "Search Plus"
    ],
    [
        "fa-search-minus",
        "Search Minus"
    ],
    [
        "fa-power-off",
        "Power Off"
    ],
    [
        "fa-signal",
        "signal"
    ],
    [
        "fa-cog",
        "cog"
    ],
    [
        "fa-trash-o",
        "Trash Outlined"
    ],
    [
        "fa-home",
        "home"
    ],
    [
        "fa-file-o",
        "File Outlined"
    ],
    [
        "fa-clock-o",
        "Clock Outlined"
    ],
    [
        "fa-road",
        "road"
    ],
    [
        "fa-download",
        "Download"
    ],
    [
        "fa-arrow-circle-o-down",
        "Arrow Circle Outlined Down"
    ],
    [
        "fa-arrow-circle-o-up",
        "Arrow Circle Outlined Up"
    ],
    [
        "fa-inbox",
        "inbox"
    ],
    [
        "fa-play-circle-o",
        "Play Circle Outlined"
    ],
    [
        "fa-repeat",
        "Repeat"
    ],
    [
        "fa-refresh",
        "refresh"
    ],
    [
        "fa-list-alt",
        "list-alt"
    ],
    [
        "fa-lock",
        "lock"
    ],
    [
        "fa-flag",
        "flag"
    ],
    [
        "fa-headphones",
        "headphones"
    ],
    [
        "fa-volume-off",
        "volume-off"
    ],
    [
        "fa-volume-down",
        "volume-down"
    ],
    [
        "fa-volume-up",
        "volume-up"
    ],
    [
        "fa-qrcode",
        "qrcode"
    ],
    [
        "fa-barcode",
        "barcode"
    ],
    [
        "fa-tag",
        "tag"
    ],
    [
        "fa-tags",
        "tags"
    ],
    [
        "fa-book",
        "book"
    ],
    [
        "fa-bookmark",
        "bookmark"
    ],
    [
        "fa-print",
        "print"
    ],
    [
        "fa-camera",
        "camera"
    ],
    [
        "fa-font",
        "font"
    ],
    [
        "fa-bold",
        "bold"
    ],
    [
        "fa-italic",
        "italic"
    ],
    [
        "fa-text-height",
        "text-height"
    ],
    [
        "fa-text-width",
        "text-width"
    ],
    [
        "fa-align-left",
        "align-left"
    ],
    [
        "fa-align-center",
        "align-center"
    ],
    [
        "fa-align-right",
        "align-right"
    ],
    [
        "fa-align-justify",
        "align-justify"
    ],
    [
        "fa-list",
        "list"
    ],
    [
        "fa-outdent",
        "Outdent"
    ],
    [
        "fa-indent",
        "Indent"
    ],
    [
        "fa-video-camera",
        "Video Camera"
    ],
    [
        "fa-picture-o",
        "Picture Outlined"
    ],
    [
        "fa-pencil",
        "pencil"
    ],
    [
        "fa-map-marker",
        "map-marker"
    ],
    [
        "fa-adjust",
        "adjust"
    ],
    [
        "fa-tint",
        "tint"
    ],
    [
        "fa-pencil-square-o",
        "Pencil Square Outlined"
    ],
    [
        "fa-share-square-o",
        "Share Square Outlined"
    ],
    [
        "fa-check-square-o",
        "Check Square Outlined"
    ],
    [
        "fa-arrows",
        "Arrows"
    ],
    [
        "fa-step-backward",
        "step-backward"
    ],
    [
        "fa-fast-backward",
        "fast-backward"
    ],
    [
        "fa-backward",
        "backward"
    ],
    [
        "fa-play",
        "play"
    ],
    [
        "fa-pause",
        "pause"
    ],
    [
        "fa-stop",
        "stop"
    ],
    [
        "fa-forward",
        "forward"
    ],
    [
        "fa-fast-forward",
        "fast-forward"
    ],
    [
        "fa-step-forward",
        "step-forward"
    ],
    [
        "fa-eject",
        "eject"
    ],
    [
        "fa-chevron-left",
        "chevron-left"
    ],
    [
        "fa-chevron-right",
        "chevron-right"
    ],
    [
        "fa-plus-circle",
        "Plus Circle"
    ],
    [
        "fa-minus-circle",
        "Minus Circle"
    ],
    [
        "fa-times-circle",
        "Times Circle"
    ],
    [
        "fa-check-circle",
        "Check Circle"
    ],
    [
        "fa-question-circle",
        "Question Circle"
    ],
    [
        "fa-info-circle",
        "Info Circle"
    ],
    [
        "fa-crosshairs",
        "Crosshairs"
    ],
    [
        "fa-times-circle-o",
        "Times Circle Outlined"
    ],
    [
        "fa-check-circle-o",
        "Check Circle Outlined"
    ],
    [
        "fa-ban",
        "ban"
    ],
    [
        "fa-arrow-left",
        "arrow-left"
    ],
    [
        "fa-arrow-right",
        "arrow-right"
    ],
    [
        "fa-arrow-up",
        "arrow-up"
    ],
    [
        "fa-arrow-down",
        "arrow-down"
    ],
    [
        "fa-share",
        "Share"
    ],
    [
        "fa-expand",
        "Expand"
    ],
    [
        "fa-compress",
        "Compress"
    ],
    [
        "fa-plus",
        "plus"
    ],
    [
        "fa-minus",
        "minus"
    ],
    [
        "fa-asterisk",
        "asterisk"
    ],
    [
        "fa-exclamation-circle",
        "Exclamation Circle"
    ],
    [
        "fa-gift",
        "gift"
    ],
    [
        "fa-leaf",
        "leaf"
    ],
    [
        "fa-fire",
        "fire"
    ],
    [
        "fa-eye",
        "Eye"
    ],
    [
        "fa-eye-slash",
        "Eye Slash"
    ],
    [
        "fa-exclamation-triangle",
        "Exclamation Triangle"
    ],
    [
        "fa-plane",
        "plane"
    ],
    [
        "fa-calendar",
        "calendar"
    ],
    [
        "fa-random",
        "random"
    ],
    [
        "fa-comment",
        "comment"
    ],
    [
        "fa-magnet",
        "magnet"
    ],
    [
        "fa-chevron-up",
        "chevron-up"
    ],
    [
        "fa-chevron-down",
        "chevron-down"
    ],
    [
        "fa-retweet",
        "retweet"
    ],
    [
        "fa-shopping-cart",
        "shopping-cart"
    ],
    [
        "fa-folder",
        "Folder"
    ],
    [
        "fa-folder-open",
        "Folder Open"
    ],
    [
        "fa-arrows-v",
        "Arrows Vertical"
    ],
    [
        "fa-arrows-h",
        "Arrows Horizontal"
    ],
    [
        "fa-bar-chart",
        "Bar Chart"
    ],
    [
        "fa-twitter-square",
        "Twitter Square"
    ],
    [
        "fa-facebook-square",
        "Facebook Square"
    ],
    [
        "fa-camera-retro",
        "camera-retro"
    ],
    [
        "fa-key",
        "key"
    ],
    [
        "fa-cogs",
        "cogs"
    ],
    [
        "fa-comments",
        "comments"
    ],
    [
        "fa-thumbs-o-up",
        "Thumbs Up Outlined"
    ],
    [
        "fa-thumbs-o-down",
        "Thumbs Down Outlined"
    ],
    [
        "fa-star-half",
        "star-half"
    ],
    [
        "fa-heart-o",
        "Heart Outlined"
    ],
    [
        "fa-sign-out",
        "Sign Out"
    ],
    [
        "fa-linkedin-square",
        "LinkedIn Square"
    ],
    [
        "fa-thumb-tack",
        "Thumb Tack"
    ],
    [
        "fa-external-link",
        "External Link"
    ],
    [
        "fa-sign-in",
        "Sign In"
    ],
    [
        "fa-trophy",
        "trophy"
    ],
    [
        "fa-github-square",
        "GitHub Square"
    ],
    [
        "fa-upload",
        "Upload"
    ],
    [
        "fa-lemon-o",
        "Lemon Outlined"
    ],
    [
        "fa-phone",
        "Phone"
    ],
    [
        "fa-square-o",
        "Square Outlined"
    ],
    [
        "fa-bookmark-o",
        "Bookmark Outlined"
    ],
    [
        "fa-phone-square",
        "Phone Square"
    ],
    [
        "fa-twitter",
        "Twitter"
    ],
    [
        "fa-facebook",
        "Facebook"
    ],
    [
        "fa-github",
        "GitHub"
    ],
    [
        "fa-unlock",
        "unlock"
    ],
    [
        "fa-credit-card",
        "credit-card"
    ],
    [
        "fa-rss",
        "rss"
    ],
    [
        "fa-hdd-o",
        "HDD"
    ],
    [
        "fa-bullhorn",
        "bullhorn"
    ],
    [
        "fa-bell",
        "bell"
    ],
    [
        "fa-certificate",
        "certificate"
    ],
    [
        "fa-hand-o-right",
        "Hand Outlined Right"
    ],
    [
        "fa-hand-o-left",
        "Hand Outlined Left"
    ],
    [
        "fa-hand-o-up",
        "Hand Outlined Up"
    ],
    [
        "fa-hand-o-down",
        "Hand Outlined Down"
    ],
    [
        "fa-arrow-circle-left",
        "Arrow Circle Left"
    ],
    [
        "fa-arrow-circle-right",
        "Arrow Circle Right"
    ],
    [
        "fa-arrow-circle-up",
        "Arrow Circle Up"
    ],
    [
        "fa-arrow-circle-down",
        "Arrow Circle Down"
    ],
    [
        "fa-globe",
        "Globe"
    ],
    [
        "fa-wrench",
        "Wrench"
    ],
    [
        "fa-tasks",
        "Tasks"
    ],
    [
        "fa-filter",
        "Filter"
    ],
    [
        "fa-briefcase",
        "Briefcase"
    ],
    [
        "fa-arrows-alt",
        "Arrows Alt"
    ],
    [
        "fa-users",
        "Users"
    ],
    [
        "fa-link",
        "Link"
    ],
    [
        "fa-cloud",
        "Cloud"
    ],
    [
        "fa-flask",
        "Flask"
    ],
    [
        "fa-scissors",
        "Scissors"
    ],
    [
        "fa-files-o",
        "Files Outlined"
    ],
    [
        "fa-paperclip",
        "Paperclip"
    ],
    [
        "fa-floppy-o",
        "Floppy Outlined"
    ],
    [
        "fa-square",
        "Square"
    ],
    [
        "fa-bars",
        "Bars"
    ],
    [
        "fa-list-ul",
        "list-ul"
    ],
    [
        "fa-list-ol",
        "list-ol"
    ],
    [
        "fa-strikethrough",
        "Strikethrough"
    ],
    [
        "fa-underline",
        "Underline"
    ],
    [
        "fa-table",
        "table"
    ],
    [
        "fa-magic",
        "magic"
    ],
    [
        "fa-truck",
        "truck"
    ],
    [
        "fa-pinterest",
        "Pinterest"
    ],
    [
        "fa-pinterest-square",
        "Pinterest Square"
    ],
    [
        "fa-google-plus-square",
        "Google Plus Square"
    ],
    [
        "fa-google-plus",
        "Google Plus"
    ],
    [
        "fa-money",
        "Money"
    ],
    [
        "fa-caret-down",
        "Caret Down"
    ],
    [
        "fa-caret-up",
        "Caret Up"
    ],
    [
        "fa-caret-left",
        "Caret Left"
    ],
    [
        "fa-caret-right",
        "Caret Right"
    ],
    [
        "fa-columns",
        "Columns"
    ],
    [
        "fa-sort",
        "Sort"
    ],
    [
        "fa-sort-desc",
        "Sort Descending"
    ],
    [
        "fa-sort-asc",
        "Sort Ascending"
    ],
    [
        "fa-envelope",
        "Envelope"
    ],
    [
        "fa-linkedin",
        "LinkedIn"
    ],
    [
        "fa-undo",
        "Undo"
    ],
    [
        "fa-gavel",
        "Gavel"
    ],
    [
        "fa-tachometer",
        "Tachometer"
    ],
    [
        "fa-comment-o",
        "comment-o"
    ],
    [
        "fa-comments-o",
        "comments-o"
    ],
    [
        "fa-bolt",
        "Lightning Bolt"
    ],
    [
        "fa-sitemap",
        "Sitemap"
    ],
    [
        "fa-umbrella",
        "Umbrella"
    ],
    [
        "fa-clipboard",
        "Clipboard"
    ],
    [
        "fa-lightbulb-o",
        "Lightbulb Outlined"
    ],
    [
        "fa-exchange",
        "Exchange"
    ],
    [
        "fa-cloud-download",
        "Cloud Download"
    ],
    [
        "fa-cloud-upload",
        "Cloud Upload"
    ],
    [
        "fa-user-md",
        "user-md"
    ],
    [
        "fa-stethoscope",
        "Stethoscope"
    ],
    [
        "fa-suitcase",
        "Suitcase"
    ],
    [
        "fa-bell-o",
        "Bell Outlined"
    ],
    [
        "fa-coffee",
        "Coffee"
    ],
    [
        "fa-cutlery",
        "Cutlery"
    ],
    [
        "fa-file-text-o",
        "File Text Outlined"
    ],
    [
        "fa-building-o",
        "Building Outlined"
    ],
    [
        "fa-hospital-o",
        "hospital Outlined"
    ],
    [
        "fa-ambulance",
        "ambulance"
    ],
    [
        "fa-medkit",
        "medkit"
    ],
    [
        "fa-fighter-jet",
        "fighter-jet"
    ],
    [
        "fa-beer",
        "beer"
    ],
    [
        "fa-h-square",
        "H Square"
    ],
    [
        "fa-plus-square",
        "Plus Square"
    ],
    [
        "fa-angle-double-left",
        "Angle Double Left"
    ],
    [
        "fa-angle-double-right",
        "Angle Double Right"
    ],
    [
        "fa-angle-double-up",
        "Angle Double Up"
    ],
    [
        "fa-angle-double-down",
        "Angle Double Down"
    ],
    [
        "fa-angle-left",
        "angle-left"
    ],
    [
        "fa-angle-right",
        "angle-right"
    ],
    [
        "fa-angle-up",
        "angle-up"
    ],
    [
        "fa-angle-down",
        "angle-down"
    ],
    [
        "fa-desktop",
        "Desktop"
    ],
    [
        "fa-laptop",
        "Laptop"
    ],
    [
        "fa-tablet",
        "tablet"
    ],
    [
        "fa-mobile",
        "Mobile Phone"
    ],
    [
        "fa-circle-o",
        "Circle Outlined"
    ],
    [
        "fa-quote-left",
        "quote-left"
    ],
    [
        "fa-quote-right",
        "quote-right"
    ],
    [
        "fa-spinner",
        "Spinner"
    ],
    [
        "fa-circle",
        "Circle"
    ],
    [
        "fa-reply",
        "Reply"
    ],
    [
        "fa-github-alt",
        "GitHub Alt"
    ],
    [
        "fa-folder-o",
        "Folder Outlined"
    ],
    [
        "fa-folder-open-o",
        "Folder Open Outlined"
    ],
    [
        "fa-smile-o",
        "Smile Outlined"
    ],
    [
        "fa-frown-o",
        "Frown Outlined"
    ],
    [
        "fa-meh-o",
        "Meh Outlined"
    ],
    [
        "fa-gamepad",
        "Gamepad"
    ],
    [
        "fa-keyboard-o",
        "Keyboard Outlined"
    ],
    [
        "fa-flag-o",
        "Flag Outlined"
    ],
    [
        "fa-flag-checkered",
        "flag-checkered"
    ],
    [
        "fa-terminal",
        "Terminal"
    ],
    [
        "fa-code",
        "Code"
    ],
    [
        "fa-reply-all",
        "reply-all"
    ],
    [
        "fa-star-half-o",
        "Star Half Outlined"
    ],
    [
        "fa-location-arrow",
        "location-arrow"
    ],
    [
        "fa-crop",
        "crop"
    ],
    [
        "fa-code-fork",
        "code-fork"
    ],
    [
        "fa-chain-broken",
        "Chain Broken"
    ],
    [
        "fa-question",
        "Question"
    ],
    [
        "fa-info",
        "Info"
    ],
    [
        "fa-exclamation",
        "exclamation"
    ],
    [
        "fa-superscript",
        "superscript"
    ],
    [
        "fa-subscript",
        "subscript"
    ],
    [
        "fa-eraser",
        "eraser"
    ],
    [
        "fa-puzzle-piece",
        "Puzzle Piece"
    ],
    [
        "fa-microphone",
        "microphone"
    ],
    [
        "fa-microphone-slash",
        "Microphone Slash"
    ],
    [
        "fa-shield",
        "shield"
    ],
    [
        "fa-calendar-o",
        "calendar-o"
    ],
    [
        "fa-fire-extinguisher",
        "fire-extinguisher"
    ],
    [
        "fa-rocket",
        "rocket"
    ],
    [
        "fa-maxcdn",
        "MaxCDN"
    ],
    [
        "fa-chevron-circle-left",
        "Chevron Circle Left"
    ],
    [
        "fa-chevron-circle-right",
        "Chevron Circle Right"
    ],
    [
        "fa-chevron-circle-up",
        "Chevron Circle Up"
    ],
    [
        "fa-chevron-circle-down",
        "Chevron Circle Down"
    ],
    [
        "fa-html5",
        "HTML 5 Logo"
    ],
    [
        "fa-css3",
        "CSS 3 Logo"
    ],
    [
        "fa-anchor",
        "Anchor"
    ],
    [
        "fa-unlock-alt",
        "Unlock Alt"
    ],
    [
        "fa-bullseye",
        "Bullseye"
    ],
    [
        "fa-ellipsis-h",
        "Ellipsis Horizontal"
    ],
    [
        "fa-ellipsis-v",
        "Ellipsis Vertical"
    ],
    [
        "fa-rss-square",
        "RSS Square"
    ],
    [
        "fa-play-circle",
        "Play Circle"
    ],
    [
        "fa-ticket",
        "Ticket"
    ],
    [
        "fa-minus-square",
        "Minus Square"
    ],
    [
        "fa-minus-square-o",
        "Minus Square Outlined"
    ],
    [
        "fa-level-up",
        "Level Up"
    ],
    [
        "fa-level-down",
        "Level Down"
    ],
    [
        "fa-check-square",
        "Check Square"
    ],
    [
        "fa-pencil-square",
        "Pencil Square"
    ],
    [
        "fa-external-link-square",
        "External Link Square"
    ],
    [
        "fa-share-square",
        "Share Square"
    ],
    [
        "fa-compass",
        "Compass"
    ],
    [
        "fa-caret-square-o-down",
        "Caret Square Outlined Down"
    ],
    [
        "fa-caret-square-o-up",
        "Caret Square Outlined Up"
    ],
    [
        "fa-caret-square-o-right",
        "Caret Square Outlined Right"
    ],
    [
        "fa-eur",
        "Euro (EUR)"
    ],
    [
        "fa-gbp",
        "GBP"
    ],
    [
        "fa-usd",
        "US Dollar"
    ],
    [
        "fa-inr",
        "Indian Rupee (INR)"
    ],
    [
        "fa-jpy",
        "Japanese Yen (JPY)"
    ],
    [
        "fa-rub",
        "Russian Ruble (RUB)"
    ],
    [
        "fa-krw",
        "Korean Won (KRW)"
    ],
    [
        "fa-btc",
        "Bitcoin (BTC)"
    ],
    [
        "fa-file",
        "File"
    ],
    [
        "fa-file-text",
        "File Text"
    ],
    [
        "fa-sort-alpha-asc",
        "Sort Alpha Ascending"
    ],
    [
        "fa-sort-alpha-desc",
        "Sort Alpha Descending"
    ],
    [
        "fa-sort-amount-asc",
        "Sort Amount Ascending"
    ],
    [
        "fa-sort-amount-desc",
        "Sort Amount Descending"
    ],
    [
        "fa-sort-numeric-asc",
        "Sort Numeric Ascending"
    ],
    [
        "fa-sort-numeric-desc",
        "Sort Numeric Descending"
    ],
    [
        "fa-thumbs-up",
        "thumbs-up"
    ],
    [
        "fa-thumbs-down",
        "thumbs-down"
    ],
    [
        "fa-youtube-square",
        "YouTube Square"
    ],
    [
        "fa-youtube",
        "YouTube"
    ],
    [
        "fa-xing",
        "Xing"
    ],
    [
        "fa-xing-square",
        "Xing Square"
    ],
    [
        "fa-youtube-play",
        "YouTube Play"
    ],
    [
        "fa-dropbox",
        "Dropbox"
    ],
    [
        "fa-stack-overflow",
        "Stack Overflow"
    ],
    [
        "fa-instagram",
        "Instagram"
    ],
    [
        "fa-flickr",
        "Flickr"
    ],
    [
        "fa-adn",
        "App.net"
    ],
    [
        "fa-bitbucket",
        "Bitbucket"
    ],
    [
        "fa-bitbucket-square",
        "Bitbucket Square"
    ],
    [
        "fa-tumblr",
        "Tumblr"
    ],
    [
        "fa-tumblr-square",
        "Tumblr Square"
    ],
    [
        "fa-long-arrow-down",
        "Long Arrow Down"
    ],
    [
        "fa-long-arrow-up",
        "Long Arrow Up"
    ],
    [
        "fa-long-arrow-left",
        "Long Arrow Left"
    ],
    [
        "fa-long-arrow-right",
        "Long Arrow Right"
    ],
    [
        "fa-apple",
        "Apple"
    ],
    [
        "fa-windows",
        "Windows"
    ],
    [
        "fa-android",
        "Android"
    ],
    [
        "fa-linux",
        "Linux"
    ],
    [
        "fa-dribbble",
        "Dribbble"
    ],
    [
        "fa-skype",
        "Skype"
    ],
    [
        "fa-foursquare",
        "Foursquare"
    ],
    [
        "fa-trello",
        "Trello"
    ],
    [
        "fa-female",
        "Female"
    ],
    [
        "fa-male",
        "Male"
    ],
    [
        "fa-gratipay",
        "Gratipay (Gittip)"
    ],
    [
        "fa-sun-o",
        "Sun Outlined"
    ],
    [
        "fa-moon-o",
        "Moon Outlined"
    ],
    [
        "fa-archive",
        "Archive"
    ],
    [
        "fa-bug",
        "Bug"
    ],
    [
        "fa-vk",
        "VK"
    ],
    [
        "fa-weibo",
        "Weibo"
    ],
    [
        "fa-renren",
        "Renren"
    ],
    [
        "fa-pagelines",
        "Pagelines"
    ],
    [
        "fa-stack-exchange",
        "Stack Exchange"
    ],
    [
        "fa-arrow-circle-o-right",
        "Arrow Circle Outlined Right"
    ],
    [
        "fa-arrow-circle-o-left",
        "Arrow Circle Outlined Left"
    ],
    [
        "fa-caret-square-o-left",
        "Caret Square Outlined Left"
    ],
    [
        "fa-dot-circle-o",
        "Dot Circle Outlined"
    ],
    [
        "fa-wheelchair",
        "Wheelchair"
    ],
    [
        "fa-vimeo-square",
        "Vimeo Square"
    ],
    [
        "fa-try",
        "Turkish Lira (TRY)"
    ],
    [
        "fa-plus-square-o",
        "Plus Square Outlined"
    ],
    [
        "fa-space-shuttle",
        "Space Shuttle"
    ],
    [
        "fa-slack",
        "Slack Logo"
    ],
    [
        "fa-envelope-square",
        "Envelope Square"
    ],
    [
        "fa-wordpress",
        "WordPress Logo"
    ],
    [
        "fa-openid",
        "OpenID"
    ],
    [
        "fa-university",
        "University"
    ],
    [
        "fa-graduation-cap",
        "Graduation Cap"
    ],
    [
        "fa-yahoo",
        "Yahoo Logo"
    ],
    [
        "fa-google",
        "Google Logo"
    ],
    [
        "fa-reddit",
        "reddit Logo"
    ],
    [
        "fa-reddit-square",
        "reddit Square"
    ],
    [
        "fa-stumbleupon-circle",
        "StumbleUpon Circle"
    ],
    [
        "fa-stumbleupon",
        "StumbleUpon Logo"
    ],
    [
        "fa-delicious",
        "Delicious Logo"
    ],
    [
        "fa-digg",
        "Digg Logo"
    ],
    [
        "fa-pied-piper-pp",
        "Pied Piper PP Logo (Old)"
    ],
    [
        "fa-pied-piper-alt",
        "Pied Piper Alternate Logo"
    ],
    [
        "fa-drupal",
        "Drupal Logo"
    ],
    [
        "fa-joomla",
        "Joomla Logo"
    ],
    [
        "fa-language",
        "Language"
    ],
    [
        "fa-fax",
        "Fax"
    ],
    [
        "fa-building",
        "Building"
    ],
    [
        "fa-child",
        "Child"
    ],
    [
        "fa-paw",
        "Paw"
    ],
    [
        "fa-spoon",
        "spoon"
    ],
    [
        "fa-cube",
        "Cube"
    ],
    [
        "fa-cubes",
        "Cubes"
    ],
    [
        "fa-behance",
        "Behance"
    ],
    [
        "fa-behance-square",
        "Behance Square"
    ],
    [
        "fa-steam",
        "Steam"
    ],
    [
        "fa-steam-square",
        "Steam Square"
    ],
    [
        "fa-recycle",
        "Recycle"
    ],
    [
        "fa-car",
        "Car"
    ],
    [
        "fa-taxi",
        "Taxi"
    ],
    [
        "fa-tree",
        "Tree"
    ],
    [
        "fa-spotify",
        "Spotify"
    ],
    [
        "fa-deviantart",
        "deviantART"
    ],
    [
        "fa-soundcloud",
        "SoundCloud"
    ],
    [
        "fa-database",
        "Database"
    ],
    [
        "fa-file-pdf-o",
        "PDF File Outlined"
    ],
    [
        "fa-file-word-o",
        "Word File Outlined"
    ],
    [
        "fa-file-excel-o",
        "Excel File Outlined"
    ],
    [
        "fa-file-powerpoint-o",
        "Powerpoint File Outlined"
    ],
    [
        "fa-file-image-o",
        "Image File Outlined"
    ],
    [
        "fa-file-archive-o",
        "Archive File Outlined"
    ],
    [
        "fa-file-audio-o",
        "Audio File Outlined"
    ],
    [
        "fa-file-video-o",
        "Video File Outlined"
    ],
    [
        "fa-file-code-o",
        "Code File Outlined"
    ],
    [
        "fa-vine",
        "Vine"
    ],
    [
        "fa-codepen",
        "Codepen"
    ],
    [
        "fa-jsfiddle",
        "jsFiddle"
    ],
    [
        "fa-life-ring",
        "Life Ring"
    ],
    [
        "fa-circle-o-notch",
        "Circle Outlined Notched"
    ],
    [
        "fa-rebel",
        "Rebel Alliance"
    ],
    [
        "fa-empire",
        "Galactic Empire"
    ],
    [
        "fa-git-square",
        "Git Square"
    ],
    [
        "fa-git",
        "Git"
    ],
    [
        "fa-hacker-news",
        "Hacker News"
    ],
    [
        "fa-tencent-weibo",
        "Tencent Weibo"
    ],
    [
        "fa-qq",
        "QQ"
    ],
    [
        "fa-weixin",
        "Weixin (WeChat)"
    ],
    [
        "fa-paper-plane",
        "Paper Plane"
    ],
    [
        "fa-paper-plane-o",
        "Paper Plane Outlined"
    ],
    [
        "fa-history",
        "History"
    ],
    [
        "fa-circle-thin",
        "Circle Outlined Thin"
    ],
    [
        "fa-header",
        "header"
    ],
    [
        "fa-paragraph",
        "paragraph"
    ],
    [
        "fa-sliders",
        "Sliders"
    ],
    [
        "fa-share-alt",
        "Share Alt"
    ],
    [
        "fa-share-alt-square",
        "Share Alt Square"
    ],
    [
        "fa-bomb",
        "Bomb"
    ],
    [
        "fa-futbol-o",
        "Futbol Outlined"
    ],
    [
        "fa-tty",
        "TTY"
    ],
    [
        "fa-binoculars",
        "Binoculars"
    ],
    [
        "fa-plug",
        "Plug"
    ],
    [
        "fa-slideshare",
        "Slideshare"
    ],
    [
        "fa-twitch",
        "Twitch"
    ],
    [
        "fa-yelp",
        "Yelp"
    ],
    [
        "fa-newspaper-o",
        "Newspaper Outlined"
    ],
    [
        "fa-wifi",
        "WiFi"
    ],
    [
        "fa-calculator",
        "Calculator"
    ],
    [
        "fa-paypal",
        "Paypal"
    ],
    [
        "fa-google-wallet",
        "Google Wallet"
    ],
    [
        "fa-cc-visa",
        "Visa Credit Card"
    ],
    [
        "fa-cc-mastercard",
        "MasterCard Credit Card"
    ],
    [
        "fa-cc-discover",
        "Discover Credit Card"
    ],
    [
        "fa-cc-amex",
        "American Express Credit Card"
    ],
    [
        "fa-cc-paypal",
        "Paypal Credit Card"
    ],
    [
        "fa-cc-stripe",
        "Stripe Credit Card"
    ],
    [
        "fa-bell-slash",
        "Bell Slash"
    ],
    [
        "fa-bell-slash-o",
        "Bell Slash Outlined"
    ],
    [
        "fa-trash",
        "Trash"
    ],
    [
        "fa-copyright",
        "Copyright"
    ],
    [
        "fa-at",
        "At"
    ],
    [
        "fa-eyedropper",
        "Eyedropper"
    ],
    [
        "fa-paint-brush",
        "Paint Brush"
    ],
    [
        "fa-birthday-cake",
        "Birthday Cake"
    ],
    [
        "fa-area-chart",
        "Area Chart"
    ],
    [
        "fa-pie-chart",
        "Pie Chart"
    ],
    [
        "fa-line-chart",
        "Line Chart"
    ],
    [
        "fa-lastfm",
        "last.fm"
    ],
    [
        "fa-lastfm-square",
        "last.fm Square"
    ],
    [
        "fa-toggle-off",
        "Toggle Off"
    ],
    [
        "fa-toggle-on",
        "Toggle On"
    ],
    [
        "fa-bicycle",
        "Bicycle"
    ],
    [
        "fa-bus",
        "Bus"
    ],
    [
        "fa-ioxhost",
        "ioxhost"
    ],
    [
        "fa-angellist",
        "AngelList"
    ],
    [
        "fa-cc",
        "Closed Captions"
    ],
    [
        "fa-ils",
        "Shekel (ILS)"
    ],
    [
        "fa-meanpath",
        "meanpath"
    ],
    [
        "fa-buysellads",
        "BuySellAds"
    ],
    [
        "fa-connectdevelop",
        "Connect Develop"
    ],
    [
        "fa-dashcube",
        "DashCube"
    ],
    [
        "fa-forumbee",
        "Forumbee"
    ],
    [
        "fa-leanpub",
        "Leanpub"
    ],
    [
        "fa-sellsy",
        "Sellsy"
    ],
    [
        "fa-shirtsinbulk",
        "Shirts in Bulk"
    ],
    [
        "fa-simplybuilt",
        "SimplyBuilt"
    ],
    [
        "fa-skyatlas",
        "skyatlas"
    ],
    [
        "fa-cart-plus",
        "Add to Shopping Cart"
    ],
    [
        "fa-cart-arrow-down",
        "Shopping Cart Arrow Down"
    ],
    [
        "fa-diamond",
        "Diamond"
    ],
    [
        "fa-ship",
        "Ship"
    ],
    [
        "fa-user-secret",
        "User Secret"
    ],
    [
        "fa-motorcycle",
        "Motorcycle"
    ],
    [
        "fa-street-view",
        "Street View"
    ],
    [
        "fa-heartbeat",
        "Heartbeat"
    ],
    [
        "fa-venus",
        "Venus"
    ],
    [
        "fa-mars",
        "Mars"
    ],
    [
        "fa-mercury",
        "Mercury"
    ],
    [
        "fa-transgender",
        "Transgender"
    ],
    [
        "fa-transgender-alt",
        "Transgender Alt"
    ],
    [
        "fa-venus-double",
        "Venus Double"
    ],
    [
        "fa-mars-double",
        "Mars Double"
    ],
    [
        "fa-venus-mars",
        "Venus Mars"
    ],
    [
        "fa-mars-stroke",
        "Mars Stroke"
    ],
    [
        "fa-mars-stroke-v",
        "Mars Stroke Vertical"
    ],
    [
        "fa-mars-stroke-h",
        "Mars Stroke Horizontal"
    ],
    [
        "fa-neuter",
        "Neuter"
    ],
    [
        "fa-genderless",
        "Genderless"
    ],
    [
        "fa-facebook-official",
        "Facebook Official"
    ],
    [
        "fa-pinterest-p",
        "Pinterest P"
    ],
    [
        "fa-whatsapp",
        "What's App"
    ],
    [
        "fa-server",
        "Server"
    ],
    [
        "fa-user-plus",
        "Add User"
    ],
    [
        "fa-user-times",
        "Remove User"
    ],
    [
        "fa-bed",
        "Bed"
    ],
    [
        "fa-viacoin",
        "Viacoin"
    ],
    [
        "fa-train",
        "Train"
    ],
    [
        "fa-subway",
        "Subway"
    ],
    [
        "fa-medium",
        "Medium"
    ],
    [
        "fa-y-combinator",
        "Y Combinator"
    ],
    [
        "fa-optin-monster",
        "Optin Monster"
    ],
    [
        "fa-opencart",
        "OpenCart"
    ],
    [
        "fa-expeditedssl",
        "ExpeditedSSL"
    ],
    [
        "fa-battery-full",
        "Battery Full"
    ],
    [
        "fa-battery-three-quarters",
        "Battery 3\/4 Full"
    ],
    [
        "fa-battery-half",
        "Battery 1\/2 Full"
    ],
    [
        "fa-battery-quarter",
        "Battery 1\/4 Full"
    ],
    [
        "fa-battery-empty",
        "Battery Empty"
    ],
    [
        "fa-mouse-pointer",
        "Mouse Pointer"
    ],
    [
        "fa-i-cursor",
        "I Beam Cursor"
    ],
    [
        "fa-object-group",
        "Object Group"
    ],
    [
        "fa-object-ungroup",
        "Object Ungroup"
    ],
    [
        "fa-sticky-note",
        "Sticky Note"
    ],
    [
        "fa-sticky-note-o",
        "Sticky Note Outlined"
    ],
    [
        "fa-cc-jcb",
        "JCB Credit Card"
    ],
    [
        "fa-cc-diners-club",
        "Diner's Club Credit Card"
    ],
    [
        "fa-clone",
        "Clone"
    ],
    [
        "fa-balance-scale",
        "Balance Scale"
    ],
    [
        "fa-hourglass-o",
        "Hourglass Outlined"
    ],
    [
        "fa-hourglass-start",
        "Hourglass Start"
    ],
    [
        "fa-hourglass-half",
        "Hourglass Half"
    ],
    [
        "fa-hourglass-end",
        "Hourglass End"
    ],
    [
        "fa-hourglass",
        "Hourglass"
    ],
    [
        "fa-hand-rock-o",
        "Rock (Hand)"
    ],
    [
        "fa-hand-paper-o",
        "Paper (Hand)"
    ],
    [
        "fa-hand-scissors-o",
        "Scissors (Hand)"
    ],
    [
        "fa-hand-lizard-o",
        "Lizard (Hand)"
    ],
    [
        "fa-hand-spock-o",
        "Spock (Hand)"
    ],
    [
        "fa-hand-pointer-o",
        "Hand Pointer"
    ],
    [
        "fa-hand-peace-o",
        "Hand Peace"
    ],
    [
        "fa-trademark",
        "Trademark"
    ],
    [
        "fa-registered",
        "Registered Trademark"
    ],
    [
        "fa-creative-commons",
        "Creative Commons"
    ],
    [
        "fa-gg",
        "GG Currency"
    ],
    [
        "fa-gg-circle",
        "GG Currency Circle"
    ],
    [
        "fa-tripadvisor",
        "TripAdvisor"
    ],
    [
        "fa-odnoklassniki",
        "Odnoklassniki"
    ],
    [
        "fa-odnoklassniki-square",
        "Odnoklassniki Square"
    ],
    [
        "fa-get-pocket",
        "Get Pocket"
    ],
    [
        "fa-wikipedia-w",
        "Wikipedia W"
    ],
    [
        "fa-safari",
        "Safari"
    ],
    [
        "fa-chrome",
        "Chrome"
    ],
    [
        "fa-firefox",
        "Firefox"
    ],
    [
        "fa-opera",
        "Opera"
    ],
    [
        "fa-internet-explorer",
        "Internet-explorer"
    ],
    [
        "fa-television",
        "Television"
    ],
    [
        "fa-contao",
        "Contao"
    ],
    [
        "fa-500px",
        "500px"
    ],
    [
        "fa-amazon",
        "Amazon"
    ],
    [
        "fa-calendar-plus-o",
        "Calendar Plus Outlined"
    ],
    [
        "fa-calendar-minus-o",
        "Calendar Minus Outlined"
    ],
    [
        "fa-calendar-times-o",
        "Calendar Times Outlined"
    ],
    [
        "fa-calendar-check-o",
        "Calendar Check Outlined"
    ],
    [
        "fa-industry",
        "Industry"
    ],
    [
        "fa-map-pin",
        "Map Pin"
    ],
    [
        "fa-map-signs",
        "Map Signs"
    ],
    [
        "fa-map-o",
        "Map Outlined"
    ],
    [
        "fa-map",
        "Map"
    ],
    [
        "fa-commenting",
        "Commenting"
    ],
    [
        "fa-commenting-o",
        "Commenting Outlined"
    ],
    [
        "fa-houzz",
        "Houzz"
    ],
    [
        "fa-vimeo",
        "Vimeo"
    ],
    [
        "fa-black-tie",
        "Font Awesome Black Tie"
    ],
    [
        "fa-fonticons",
        "Fonticons"
    ],
    [
        "fa-reddit-alien",
        "reddit Alien"
    ],
    [
        "fa-edge",
        "Edge Browser"
    ],
    [
        "fa-credit-card-alt",
        "Credit Card"
    ],
    [
        "fa-codiepie",
        "Codie Pie"
    ],
    [
        "fa-modx",
        "MODX"
    ],
    [
        "fa-fort-awesome",
        "Fort Awesome"
    ],
    [
        "fa-usb",
        "USB"
    ],
    [
        "fa-product-hunt",
        "Product Hunt"
    ],
    [
        "fa-mixcloud",
        "Mixcloud"
    ],
    [
        "fa-scribd",
        "Scribd"
    ],
    [
        "fa-pause-circle",
        "Pause Circle"
    ],
    [
        "fa-pause-circle-o",
        "Pause Circle Outlined"
    ],
    [
        "fa-stop-circle",
        "Stop Circle"
    ],
    [
        "fa-stop-circle-o",
        "Stop Circle Outlined"
    ],
    [
        "fa-shopping-bag",
        "Shopping Bag"
    ],
    [
        "fa-shopping-basket",
        "Shopping Basket"
    ],
    [
        "fa-hashtag",
        "Hashtag"
    ],
    [
        "fa-bluetooth",
        "Bluetooth"
    ],
    [
        "fa-bluetooth-b",
        "Bluetooth"
    ],
    [
        "fa-percent",
        "Percent"
    ],
    [
        "fa-gitlab",
        "GitLab"
    ],
    [
        "fa-wpbeginner",
        "WPBeginner"
    ],
    [
        "fa-wpforms",
        "WPForms"
    ],
    [
        "fa-envira",
        "Envira Gallery"
    ],
    [
        "fa-universal-access",
        "Universal Access"
    ],
    [
        "fa-wheelchair-alt",
        "Wheelchair Alt"
    ],
    [
        "fa-question-circle-o",
        "Question Circle Outlined"
    ],
    [
        "fa-blind",
        "Blind"
    ],
    [
        "fa-audio-description",
        "Audio Description"
    ],
    [
        "fa-volume-control-phone",
        "Volume Control Phone"
    ],
    [
        "fa-braille",
        "Braille"
    ],
    [
        "fa-assistive-listening-systems",
        "Assistive Listening Systems"
    ],
    [
        "fa-american-sign-language-interpreting",
        "American Sign Language Interpreting"
    ],
    [
        "fa-deaf",
        "Deaf"
    ],
    [
        "fa-glide",
        "Glide"
    ],
    [
        "fa-glide-g",
        "Glide G"
    ],
    [
        "fa-sign-language",
        "Sign Language"
    ],
    [
        "fa-low-vision",
        "Low Vision"
    ],
    [
        "fa-viadeo",
        "Viadeo"
    ],
    [
        "fa-viadeo-square",
        "Viadeo Square"
    ],
    [
        "fa-snapchat",
        "Snapchat"
    ],
    [
        "fa-snapchat-ghost",
        "Snapchat Ghost"
    ],
    [
        "fa-snapchat-square",
        "Snapchat Square"
    ],
    [
        "fa-pied-piper",
        "Pied Piper Logo"
    ],
    [
        "fa-first-order",
        "First Order"
    ],
    [
        "fa-yoast",
        "Yoast"
    ],
    [
        "fa-themeisle",
        "ThemeIsle"
    ],
    [
        "fa-google-plus-official",
        "Google Plus Official"
    ],
    [
        "fa-font-awesome",
        "Font Awesome"
    ],
    [
        "fa-handshake-o",
        "Handshake Outlined"
    ],
    [
        "fa-envelope-open",
        "Envelope Open"
    ],
    [
        "fa-envelope-open-o",
        "Envelope Open Outlined"
    ],
    [
        "fa-linode",
        "Linode"
    ],
    [
        "fa-address-book",
        "Address Book"
    ],
    [
        "fa-address-book-o",
        "Address Book Outlined"
    ],
    [
        "fa-address-card",
        "Address Card"
    ],
    [
        "fa-address-card-o",
        "Address Card Outlined"
    ],
    [
        "fa-user-circle",
        "User Circle"
    ],
    [
        "fa-user-circle-o",
        "User Circle Outlined"
    ],
    [
        "fa-user-o",
        "User Outlined"
    ],
    [
        "fa-id-badge",
        "Identification Badge"
    ],
    [
        "fa-id-card",
        "Identification Card"
    ],
    [
        "fa-id-card-o",
        "Identification Card Outlined"
    ],
    [
        "fa-quora",
        "Quora"
    ],
    [
        "fa-free-code-camp",
        "Free Code Camp"
    ],
    [
        "fa-telegram",
        "Telegram"
    ],
    [
        "fa-thermometer-full",
        "Thermometer Full"
    ],
    [
        "fa-thermometer-three-quarters",
        "Thermometer 3\/4 Full"
    ],
    [
        "fa-thermometer-half",
        "Thermometer 1\/2 Full"
    ],
    [
        "fa-thermometer-quarter",
        "Thermometer 1\/4 Full"
    ],
    [
        "fa-thermometer-empty",
        "Thermometer Empty"
    ],
    [
        "fa-shower",
        "Shower"
    ],
    [
        "fa-bath",
        "Bath"
    ],
    [
        "fa-podcast",
        "Podcast"
    ],
    [
        "fa-window-maximize",
        "Window Maximize"
    ],
    [
        "fa-window-minimize",
        "Window Minimize"
    ],
    [
        "fa-window-restore",
        "Window Restore"
    ],
    [
        "fa-window-close",
        "Window Close"
    ],
    [
        "fa-window-close-o",
        "Window Close Outline"
    ],
    [
        "fa-bandcamp",
        "Bandcamp"
    ],
    [
        "fa-grav",
        "Grav"
    ],
    [
        "fa-etsy",
        "Etsy"
    ],
    [
        "fa-imdb",
        "IMDB"
    ],
    [
        "fa-ravelry",
        "Ravelry"
    ],
    [
        "fa-eercast",
        "Eercast"
    ],
    [
        "fa-microchip",
        "Microchip"
    ],
    [
        "fa-snowflake-o",
        "Snowflake Outlined"
    ],
    [
        "fa-superpowers",
        "Superpowers"
    ],
    [
        "fa-wpexplorer",
        "WPExplorer"
    ],
    [
        "fa-meetup",
        "Meetup"
    ]
];
icons.sort();
var fontawesomeIcons = '';
for (var i = 0; i < icons.length; i++) {
    var newTitle = '';
    var ctr = 0;
    var title = icons[i][1];
    title = title.split(' ');
    for (var x = 0; x < title.length; x++) {
        ctr++;
        newTitle += ctr == 3 ? '<br />' : '';
        newTitle += title[x] + ' ';
        ctr = ctr == 3 ? 0 : ctr;
    }
    fontawesomeIcons += '<a href="#" onclick="klik(this);return false;" title="fa ' + icons[i][0] + '"><span class="fa ' + icons[i][0] + '"></span><div>' + newTitle + '</div></a>';
};

function klik(el) {
    document.getElementsByClassName('fontawesomeClass')[0].getElementsByTagName('input')[0].value = el.getAttribute('title');
    a = document.getElementById('fontawesome');
    a = a.getElementsByTagName('a');
    for (i = 0; i < a.length; i++) {
        a[i].className = '';
    }
    el.className += 'active';
};

function searchIcon(val) {
    var aydi = document.getElementById('fontawesome');
    var klases = aydi.getElementsByTagName('a');
    for (var i = 0, len = klases.length, klas, klasNeym; i < len; i++) {
        klas = klases[i];
        klasNeym = klas.getAttribute('title');
        if (klasNeym && klasNeym.indexOf(val) >= 0) {
            klas.style.display = 'block';
        } else {
            klas.style.display = 'none';
        }
    }
};

function setSpanColor(color) {
    el = document.getElementById('fontawesome');
    el = el.getElementsByTagName('span');
    for (i = 0; i < el.length; i++) {
        el[i].setAttribute('style', 'color:' + color)
    }
};

function setCheckboxes() {
    klases = '';
    klases += document.getElementsByClassName('spinning')[0].getElementsByTagName('input')[0].checked ? ' fa-spin' : klases;
    klases += document.getElementsByClassName('fixedWidth')[0].getElementsByTagName('input')[0].checked ? ' fa-fw' : klases;
    klases += document.getElementsByClassName('bordered')[0].getElementsByTagName('input')[0].checked ? ' fa-border' : klases;
    klases += ' ' + document.getElementsByClassName('flippedRotation')[0].getElementsByTagName('select')[0].value;
    el = document.getElementById('fontawesome');
    el = el.getElementsByTagName('span');
    for (i = 0; i < el.length; i++) {
        el[i].className = el[i].parentNode.getAttribute('title') + klases;
    }
};

function in_array(needle, haystack) {
    for (var i in haystack) {
        if (haystack[i] == needle) return true;
    }
    return false;
};
CKEDITOR.dialog.add('fontawesomeDialog', function(editor) {
    return {
        title: editor.lang.fontawesome.title,
        minWidth: 600,
        minHeight: 400,
        resizable: false,
        contents: [{
            id: 'insertFontawesome',
            label: 'insertFontawesome',
            elements: [{
                type: 'hbox',
                widths: ['50%', '50%'],
                children: [{
                    type: 'hbox',
                    widths: ['75%', '25%'],
                    children: [{
                        type: 'text',
                        id: 'colorChooser',
                        className: 'colorChooser',
                        label: 'Color',
                        onKeyUp: function(e) {
                            setSpanColor(e.sender.$.value);
                        },
                        setup: function(widget) {
                            color = widget.data.color != '' ? widget.data.color : '#000000';
                            this.setValue(color);
                            setSpanColor(color);
                        },
                        commit: function(widget) {
                            widget.setData('color', this.getValue());
                        }
                    }, {
                        type: 'button',
                        label: 'Select',
                        style: 'margin-top:1.35em',
                        onClick: function() {
                            editor.getColorFromDialog(function(color) {
                                document.getElementsByClassName('colorChooser')[0].getElementsByTagName('input')[0].value = color;
                                setSpanColor(color);
                            }, this);
                        }
                    }]
                }, {
                    type: 'text',
                    id: 'size',
                    className: 'size',
                    label: 'Size',
                    setup: function(widget) {
                        this.setValue(widget.data.size);
                    },
                    commit: function(widget) {
                        widget.setData('size', this.getValue());
                    }
                }]
            }, {
                type: 'hbox',
                widths: ['25%', '25%', '25%', '25%'],
                children: [{
                    type: 'checkbox',
                    id: 'spinning',
                    className: 'spinning cke_dialog_ui_checkbox_input',
                    label: 'Spinning',
                    value: 'true',
                    setup: function(widget) {
                        var klases = widget.data.class;
                        klases = klases.split(' ');
                        document.getElementsByClassName('spinning')[0].getElementsByTagName('input')[0].checked = in_array('fa-spin', klases) ? true : false;
                        setCheckboxes();
                    },
                    onClick: function() {
                        setCheckboxes();
                    }
                }, {
                    type: 'checkbox',
                    id: 'fixedWidth',
                    className: 'fixedWidth cke_dialog_ui_checkbox_input',
                    label: 'Fixed Width',
                    value: 'true',
                    setup: function(widget) {
                        var klases = widget.data.class;
                        klases = klases.split(' ');
                        document.getElementsByClassName('fixedWidth')[0].getElementsByTagName('input')[0].checked = in_array('fa-fw', klases) ? true : false;
                        setCheckboxes();
                    },
                    onClick: function() {
                        setCheckboxes();
                    }
                }, {
                    type: 'checkbox',
                    id: 'bordered',
                    className: 'bordered cke_dialog_ui_checkbox_input',
                    label: 'Bordered',
                    value: 'true',
                    setup: function(widget) {
                        var klases = widget.data.class;
                        klases = klases.split(' ');
                        document.getElementsByClassName('bordered')[0].getElementsByTagName('input')[0].checked = in_array('fa-border', klases) ? true : false;
                        setCheckboxes();
                    },
                    onClick: function() {
                        setCheckboxes();
                    }
                }, {
                    type: 'select',
                    id: 'flippedRotation',
                    className: 'flippedRotation cke_dialog_ui_checkbox_input',
                    label: 'Flipping and Rotating',
                    items: [
                        ['Normal', ''],
                        ['Rotate 90', 'fa-rotate-90'],
                        ['Rotate 180', 'fa-rotate-180'],
                        ['Rotate 270', 'fa-rotate-270'],
                        ['Flip Horizontal', 'fa-flip-horizontal'],
                        ['Flip Vertical', 'fa-flip-vertical']
                    ],
                    setup: function(widget) {
                        this.setValue(widget.data.flippedRotation ? widget.data.flippedRotation : '');
                    },
                    commit: function(widget) {
                        widget.setData('flippedRotation', this.getValue());
                    },
                    onClick: function() {
                        setCheckboxes();
                    }
                }]
            }, {
                type: 'text',
                id: 'fontawesomeSearch',
                className: 'fontawesomeSearch cke_dialog_ui_input_text',
                label: 'Search',
                onKeyUp: function(e) {
                    searchIcon(e.sender.$.value);
                }
            }, {
                type: 'text',
                id: 'fontawesomeClass',
                className: 'fontawesomeClass',
                style: 'display:none',
                setup: function(widget) {
                    var klases = '';
                    if (widget.data.class != '') {
                        klases = widget.data.class;
                        klases = klases.split(' ');
                        in_array('fa-border', klases) ? klases.splice(klases.indexOf('fa-border'), 1) : '';
                        in_array('fa-fw', klases) ? klases.splice(klases.indexOf('fa-fw'), 1) : '';
                        in_array('fa-spin', klases) ? klases.splice(klases.indexOf('fa-spin'), 1) : '';
                        in_array('fa-rotate-90', klases) ? klases.splice(klases.indexOf('fa-rotate-90'), 1) : '';
                        in_array('fa-rotate-180', klases) ? klases.splice(klases.indexOf('fa-rotate-180'), 1) : '';
                        in_array('fa-rotate-270', klases) ? klases.splice(klases.indexOf('fa-rotate-270'), 1) : '';
                        in_array('fa-flip-horizontal', klases) ? klases.splice(klases.indexOf('fa-flip-horizontal'), 1) : '';
                        in_array('fa-flip-vertical', klases) ? klases.splice(klases.indexOf('fa-flip-vertical'), 1) : '';
                        klases = klases.join(' ');
                    }
                    this.setValue(klases);
                },
                commit: function(widget) {
                    var klases = '';
                    klases += document.getElementsByClassName('spinning')[0].getElementsByTagName('input')[0].checked ? ' fa-spin' : klases;
                    klases += document.getElementsByClassName('fixedWidth')[0].getElementsByTagName('input')[0].checked ? ' fa-fw' : klases;
                    klases += document.getElementsByClassName('bordered')[0].getElementsByTagName('input')[0].checked ? ' fa-border' : klases;
                    klases += ' ' + document.getElementsByClassName('flippedRotation')[0].getElementsByTagName('select')[0].value;
                    widget.setData('class', this.getValue() + klases);
                }
            }, {
                type: 'html',
                html: '<div id="fontawesome">' + fontawesomeIcons + '</div>'
            }]
        }],
        onOk: function() {
            glyphs = document.getElementById('fontawesome');
            glyphs = glyphs.getElementsByTagName('a');
            for (i = 0; i < glyphs.length; i++) {
                glyphs[i].firstChild.className = glyphs[i].getAttribute('title');
                glyphs[i].className = '';
                glyphs[i].style.display = '';
                glyphs[i].getElementsByTagName('span')[0].style.color = '';
            }
        }
    }
});