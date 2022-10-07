<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $site->title() ?></title>
	<?= css('assets/css/style.css') ?>
</head>
<body onload="init()">

	<nav>
		<a href="<?= $site->url() ?>"><h3><?= $site->title() ?></h3></a>

		<div id="mobile-nav-icon">
			<span></span>
			<span></span>
			<span></span>
		</div>
		  
		<ul>
			<?php foreach ($site->children()->listed() as $item): ?>
				<!-- The following create a link (a-tag) with the title as link text and the page url as url. -->
				<li><?= $item->category()->toLink() ?></li>
			<?php endforeach ?>
		</ul>
	</nav>