	<footer>
		<div class="left">
			<h4><a href="<?= page('legal')->url() ?>">Impressum / Datenschutz</a></h4>
		</div>
		<div class="right">
			<h4>© <?= $site->title() ?> <?= date('Y') ?></h4>
		</div>
	</footer>
	<div class="lightbox-wrapper"></div>
	<canvas id="canvas"></canvas>

	<?= js([
		'assets/js/lib/three.min.js',
		'assets/js/lib/gsap.min.js',
		'assets/js/lib/TweenMax.min.js',
		'assets/js/lib/hover.js',
		'assets/js/script.js',
		'assets/js/canvas.js',
		'@auto'
	]) ?>

</body>
</html>