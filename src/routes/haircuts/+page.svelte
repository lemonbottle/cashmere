<script>


	import great_lengths from '$lib/images/logos/great-lengths-logo.png';
	import woman_black_hair from '$lib/images/photos/woman-long-black-hair-banner-right.png';
	// import woman_black_hair_mobile from '$lib/images/photos/woman-black-hair-mobile.png';

	import woman_black_hair_mobile from '$lib/images/photos/woman-kardashian-hair-cut-mobile.png';
	import classic_bob from '$lib/images/photos/woman-bob-haircut.png';
	import guy_tapered from '$lib/images/photos/man-tapered-layers.png';
	import girl_bangs from '$lib/images/photos/girl-with-bangs.png';
	import tapered_layers from '$lib/images/photos/woman-tapered-layers.png';

	import Cta from '../modules/sections/Call-us.svelte';
</script>

<svelte:head>
	<title>Haircuts 💇🏻‍♀️ Cashmere Hair Salon</title>
	<meta name="description" content="Explore our extensive menu of haircut services and let us help you achieve hair goals you’ve always dreamed of. Transform your look today at our top-rated hair salon in Shreveport.">
</svelte:head>

<!-- Responsive Hero banner -->
<section class="span1 pad-8 responsive-hero" 
style="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({woman_black_hair}); background-repeat: no-repeat; background-size: cover; background-position: center;"
>

		<div class="inner-wrapper">
			<img class="hero-img" src="{woman_black_hair_mobile}" alt="Woman with beautiful long black hair extensions">
			
				<div class="span-center" style="" >
			<h1 class="" data-aos="fade-up" data-aos-delay="0">
				Men's & Women's
			<span class="font-huge all-caps font-bolder clr-primary" data-aos="fade-up" data-aos-delay="200">Haircuts</span>
			</h1>
			<div class="blockquote" data-aos="fade-up" data-aos-delay="400">
				<p>
					Whether you want a quick trim or a dramatic style update, Cashmere Hair Salon can do it all. We style all kinds of hair and knows the best methods for maintaining and enhancing your hair type. If you want to try a new look or pick a low-maintenance hairstyle, we can help.
				</p>
				<p>
					Cashmere also offers men’s haircuts. Get in touch with us today to schedule your haircut appointment in Shreveport, Louisiana.
				</p>
			</div>
				</div>
		</div>
</section>

<!-- 4 hair cuts you may want to try -->

<section class="span2" style="padding-bottom: 0;">
	<div class="inner-wrapper">
		<div style="margin-block: auto;">
			<h2 data-aos="fade-up" data-aos-delay="100"><span class="font-l clr-primary">4 Modern Haircut Trends</span> <br><span>You May Want to Try</span></h2>
		</div>
		<div data-aos="fade-up" data-aos-delay="300"><p>Are you tired of your current hairstyle?</p>
			<p>Are you ready to shake up your style with a brand-new look?</p>
		
			<p>Your hairstylist can recommend which haircut is best for your hair type and face shape. Call Cashmere Hair Salon at (318) 779-1960 to schedule your haircut appointment in Shreveport, Louisiana.</p></div>
	</div>
</section>

<!-- Hair styles grid -->
<section class="span4">
    <div class="inner-wrapper">
		<div data-aos="fade-left" data-aos-delay="100">
				<img class="rounded" src="{classic_bob}" alt="Smiling young woman with classic bob haircut">
			<h2 class="clr-primary">Classic Bob</h2>
			<p>Shorten your hairdo with a classic bob for a sleek, chic look.</p>
		</div>
		<div data-aos="fade-left" data-aos-delay="200">
				<img src="{guy_tapered}" alt="Smiling man with clean haircut">
			<h2 class="clr-primary">Clean Cut</h2>
			<p>A fresh modern look so you can dress to impress.</p>
		</div>
		
			<div data-aos="fade-left" data-aos-delay="300"> 
				<img src="{girl_bangs}" alt="Smiling young woman with dark hair and full bangs">
			<h2 class="clr-primary">Full bangs</h2>
			<p>Instantly add glam to your hair with full bangs that frame your face and enhance the eyes.</p>
		</div>
		
			<div data-aos="fade-left" data-aos-delay="400">
				<img src="{tapered_layers}" alt="Young woman with full, thick, layered hair">
			<h2 class="clr-primary">Tapered layers</h2>
			<p>If you have thick hair, consider layers to lighten your look.</p>
		</div>
	</div>

</section>

<!-- Call us Today -->
<Cta />

<style>
	.responsive-hero {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.responsive-hero .hero-img {
		display: none;
		margin-bottom: var(--block);
	}
	
	@media (max-width: 600px) {
		.responsive-hero {
			background-image: none !important;
			background-color: var(--clr-dark) !important;
		}
		.responsive-hero .hero-img {
			display: block;
			width: 100%;
			border-radius: 1rem;
			padding: 0;
		}
	}
</style>
