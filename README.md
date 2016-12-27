# Magnifier
##原生js完成的放大镜插件
###1.首先要在要使用的HTML页面中引入css样式及js代码，再在要放入放大镜的地方添加如下代码：
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<!--建议将css引入放于此处-->
		<link rel="stylesheet" href="src/Magnifier.css" />
	</head>
	<body>
		<div id="box">
			 <div class="middle-img-box"><!--展示图片区域-->
			 	<!--默认为第一张图片-->
				<img src="images/1.jpg" class="middle-img"/>
				<!--遮罩层-->
				<div class="image-zoom"></div>
			</div>
			<div class="big-img-box"><!--放大的图片所在的盒子-->
				<!--默认放大第一张，与展示区域对应-->
				<img src="images/1.jpg" class="big-img"/>
			</div>
			<ul class="small-img-box"><!--小图片选项卡部分-->
				<!--让第一张小图片高亮显示，对应默认的第一张图-->
				<li><a href="##"><img src="images/1.jpg" alt="" class="active"/></a></li>
				<li><a href="##"><img src="images/2.jpg" alt=""/></a></li>
				<li><a href="##"><img src="images/3.jpg" alt=""/></a></li>
				<li><a href="##"><img src="images/4.jpg" alt=""/></a></li>
				<li><a href="##"><img src="images/5.jpg" alt=""/></a></li>
			</ul> 
		</div>
		<!--建议将js引入放于此处-->
		<script type="text/javascript" src="src/Magnifier.js"></script>
	</body>
```
###2.想要放置放大镜的位置可以单独设置，本插件样式如下，如果想要修改请参考以下代码：
```
#box{
	position: relative;
	margin: 10px;
	padding: 10px;
	width: 350px;
	height: auto;
	background: #eee;
}
```
###3.除此之外还要注意，此放大镜只能放5张照片不能增减。
###4.遮罩层为```<div class="image-zoom"></div>```的背景图片，路径为： url(../images/icon.png);如果要修改，可以到images文件夹中将icon.png的图片拿到目标文件夹，并到css中修改. image-zoom的background的属性值。
