# npmインストール

$ npm install bootstrap@next
$ npm install jquery
$ npm install popper.js

# <head>

<link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">

# <head>

# <body>

<script src="./node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="./node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

# <body>



# sass開発用
$sass --watch qiita.scss:qiita.css

# sass_上：圧縮なし-下：圧縮あり
$sass qiita.scss:qiita.css
$sass qiita.scss:qiita.css --style compressed

# sass監視オプション
$sass --watch qiita.scss:qiita.css