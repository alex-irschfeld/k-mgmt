<?php snippet('header') ?>
	
	<main>
		<section class="grid clients">

			<div class="grid-card grid-intro">
				<h1><?= $page->category() ?></h1>
			</div>

			<?php foreach ($page->children() as $item): ?>
				<a href="<?= $item->url() ?>">
					<div class="grid-card">
						<?php if($image = $item->image()->resize(500)): ?>
						<img src="<?= $image->url() ?>" alt="<?= $item->name() ?>">
						<?php endif ?>
						<h2><?= $item->name() ?></h2>
					</div>
				</a>
			<?php endforeach ?>
			
		</section>
	</main>

<?php snippet('footer') ?>	


