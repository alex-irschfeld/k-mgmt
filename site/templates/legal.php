<?php snippet('header') ?>
<main>
	<section id="legal" class="hero">

		<div class="left">
			<h1><?= $page->imprint() ?></h1>
			<br>
			<p style="text-transform: uppercase;"><?= $site->title() ?></p>
			<p>Inhaberin: <?= $site->owner() ?></p>
			<p><?= $site->street() ?></p>
			<p><?= $site->postalcode() ?> <?= $site->city() ?></p>
			<br>
			<p>Tel: <?= $site->phone() ?></p>
			<p>E-Mail: <?= $site->email() ?></p>
		</div>

		<div class="right">
			<h1><?= $page->privacy() ?></h1>
			<br>
		</div>

	</section>
</main>
<?php snippet('footer') ?>	


