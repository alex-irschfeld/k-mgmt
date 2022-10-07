<?php snippet('header') ?>

	<!-- BEGIN: head images with hover effect -->
	<?php $counter = 1; foreach ($page->images() as $image): ?>
	<img id="intro-image-<?= $counter ?>" src="<?= $image->resize(1200, 1200)->url() ?>" alt="" hidden>
	<?php $counter ++; endforeach ?>
	<!-- END: head images with hover effect -->

	<main>

		<section class="hero">
			<div id="intro-image-wrapper" class="left"></div>
				<div class="right">
				<h1><?= $page->description() ?></h1>
				<div class="contact-wrapper contact-hidden">
					<p style="text-transform: uppercase;"><?= $site->title() ?></p>
					<p>Inhaberin: <?= $site->owner() ?></p>
					<p><?= $site->street() ?></p>
					<p><?= $site->postalcode() ?> <?= $site->city() ?></p>
					<br>
					<p>Tel: <?= $site->phone() ?></p>
					<p>E-Mail: <?= $site->email() ?></p>
				</div>
				<div id="button-wrapper">
					<button id="contact-button">Kontakt</button>
					<a href="#news"><button id="news-button">News</button></a>
				</div>
			</div>
		</section>

		<section id="news" class="grid">

			<div class="grid-card-wrapper grid-intro">
				<div class="grid-card grid-intro">
					<h2>News</h2>
				</div>
			</div>

			<?php foreach ($page->children()->listed()->limit(20) as $card): ?>

				<div class="grid-card-wrapper">
					<div class="grid-card grid-card-news">
						<?php if($image = $card->image()): ?>
							<?= $image->resize(500) ?>
						<?php endif ?>
						<h4><?= $card->sector() ?></h4>
						<h2><?= $card->newstitle() ?></h2>
						<p><?= $card->text()->excerpt(200) ?></p>
					</div>

					<div class="info-slider close-slider">
						<div class="info-container">

							<div class="image-container">
								<?php if($image = $card->image()): ?>
									<?= $image->resize(1200) ?>
								<?php endif ?>
							</div>

							<div class="text-container">

								<div class="exit">
									<div id="line1"></div>
									<div id="line2"></div>
								</div>

								<h4><?= $card->sector() ?></h4>
								<h2><?= $card->newstitle() ?></h2>
								<p><?= $card->text() ?></p>
								
							</div>

							<div class="buttons">
								<a href="<?= $card->link() ?>" target="_blank">
									<button class="infos">Weitere Infos</button>
								</a>
								<a href="<?= $site->url() ?>/<?= $card->button()->toLinkObject() ?>">
									<button class="vita">Profil</button>
								</a>
							</div>

						</div>
					</div>
				</div>
				
			<?php endforeach ?>

		</section>
	</main>

<?php snippet('footer') ?>	


