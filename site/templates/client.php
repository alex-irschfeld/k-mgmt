<?php snippet('header') ?>

<main>
	<section class="hero client">
		<div class="left">
			<h1><?= $page->name() ?></h1>
			<div class="hero-button-wrapper">
				<a href="#vita">
					<button class="vita-button">Vita</button>
				</a>

				<?php 
				$externallinks = $page->externallinks()->toStructure();
				foreach ($externallinks as $externallink): ?>
					<a class="btn" href="<?= $externallink->buttonlink() ?>" target="_blank">
						<button class="vita-button"><?= $externallink->buttontext() ?></button>
					</a>
				<?php endforeach ?>

			</div>
		</div>
		<div class="right" id="intro-image-wrapper">
			<?php if($image = $page->image()): ?>
				<img src="<?= $image->resize(1000)->url() ?>" alt="<?= $image->alt() ?>" title="© <?= $image->photographer() ?>">	
			<?php endif ?>
		</div>
	</section>

	<section id="client" class="grid">

		<?php foreach ($page->images()->sortBy('sort') as $image): ?>
		<div class="grid-card image-gallery">
			<a href="<?= $image->url() ?>" title="© <?= $image->photographer() ?>">
				<img src="<?= $image->resize(500)->url() ?>" alt="<?= $image->alt() ?>">		
			</a>
		</div>
		<?php endforeach ?>

	</section>

	<section id="vita" class="vita">
		<?php 
		$categories = $page->vita()->toStructure();
		foreach ($categories as $category): ?>
			<div class="vita-category">
				<div class="vita-category-header">
					<h2><?= $category->headline() ?></h2>
				</div>
			
			<?php 
			$entries = $category->entries()->toStructure();
			foreach ($entries as $entry): ?>
				<div class="vita-card">

					<div class="vita-panel left">
						<h4><?= $entry->key() ?></h4>
					</div>

					<div class="vita-panel right">
						<?= $entry->value() ?>
					</div>

				</div>
			<?php endforeach ?>

			</div>
		<?php endforeach ?>
	</section>

</main>

<?php snippet('footer') ?>