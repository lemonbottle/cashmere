<script>
	import { onMount } from 'svelte';
	// import jq from 'jquery';
	// onMount(() => {
	// 	jq('section').wrapInner("<div class='inner-wrapper'></div>");
	// });

	import great_lengths from '$lib/images/logos/great-lengths-logo-white.webp';

	import woman_rainbow_highlights from '$lib/images/photos/color-highlights/hair-colors-rainbow-right.png';
	import rainbow_highlights_mobile from '$lib/images/photos/color-highlights/hair-colors-rainbow-mobile.png';
	import woman_black_hair_bg from '$lib/images/photos/hair-extensions/hair-extensions-bg-blurred.png';
	import hair_silver from '$lib/images/photos/color-highlights/hair-colors-silver.png';
	import hair_silver_mobile from '$lib/images/photos/color-highlights/hair-colors-silver.png';

    import red_hair from '$lib/images/photos/color-highlights/hair-color-red-hair.png';
    import highlights from '$lib/images/photos/color-highlights/hair-color-highlights.png';
    import balayage from '$lib/images/photos/color-highlights/hair-color-balayage-ombre.png'
    import correction from '$lib/images/photos/color-highlights/hair-color-correction.png';

	import Cta from '../modules/sections/Call-us.svelte';

</script>

<svelte:head>
    <title>Expert Hair Color & Highlights Services in Shreveport, Louisiana - Cashmere Hair Salon</title>
    <meta name="description" content="Transform your look with professional hair color and highlights at Cashmere Hair Salon in Shreveport, LA. Our expert stylists craft the perfect shade for you. Book now!">
</svelte:head>

<!-- Responsive Hero banner -->
<section
	class="span2 pad-4 responsive-hero" 
	style:--woman-black-hair="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.4) 90%, rgba(0,0,0,1)), url({woman_rainbow_highlights})"
	style:--woman-black-hair-mobile="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({woman_black_hair_bg})"
	style-disable="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({woman_rainbow_highlights}); "
>
	<div class="inner-wrapper">
		<img
			class="hero-img"
			src={rainbow_highlights_mobile}
			alt="Woman with beautiful long black hair extensions"
			data-aos="fade-up" data-aos-delay="100"
		/>
		<div class="pad-8" style="">
			<h1 class="font-light uppercase"  data-aos="fade-up" data-aos-delay="200"> 
				<span style="line-height: unset">Shreveport's Brightest</span><br /><span class="clr-primary font-light font-xxl" data-aos="fade-up" data-aos-delay="300">COLOR & HIGHLIGHTS</span><br
				/>
			</h1>
			
			
		</div>
	</div>
</section>

<!-- Great lengths Callout -->
<section class="span-center" style="background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.5)), var(--clr-bg);">

<div class="inner-wrapper" data-aos="fade-up" data-aos-delay="400">
	
	<h3 class="font" >Are you ready to <span class="clr-primary font-bold">refresh your HAIR COLOR?</span></h3>
    <hr>
		<p>At Cashmere Hair Salon, located in the heart of Shreveport, Louisiana, we specialize in bringing your hair color dreams to life. Our team of experienced and passionate stylists is dedicated to providing the best hair color and highlights services in the area. Whether you're looking for a subtle change or a bold new look, we are here to make it happen with our top-notch services and high-quality products.</p>
</div>
</section>

<!-- Benefits of extensions -->
<section
	class="span2 pad-8 responsive-hero no-mobile-bg"
	style="background-image: url({hair_silver}); background-position: center; background-size: cover;"
>
	<div class="inner-wrapper">
		<div class="spacer" />
		<img
			class="hero-img"
			src={hair_silver_mobile}
			alt="Woman with beautiful long black hair extensions"
			style="object-fit:cover; height: 400px; margin-bottom: 0;"
			data-aos="fade-up" data-aos-delay="100"
		/>
		<div class="card-black"
		data-aos="fade-up" data-aos-delay="0">
			<h2 class="all-caps" 
			data-aos="fade-up" data-aos-delay="200">
				Why choose <span class="clr-primary">Cashmere</span> to Color Your Hair?
			</h2>
			<hr />
			<br />
			<ol class="checklist"
			data-aos="fade-up" data-aos-delay="400">
				<li>
					<h3 class="uppercase">Expert Stylists</h3>
					<p>Our team is trained in the latest techniques and trends to provide you with a custom look that suits your style and complexion.</p>
				</li>
				<li>
					<h3 class="uppercase">Personalized Consultations</h3>
					<p>
						We believe in a personalized approach. Our stylists work closely with you to understand your preferences and provide recommendations tailored to your individual needs.
					</p>
				</li>
				<li>
					<h3 class="uppercase">Quality Products</h3>
					<p>
						We use only the best hair coloring products available, ensuring your hair is not only beautiful but also healthy and vibrant.
					</p>
				</li>
                <li>
					<h3 class="uppercase">Comfortable Atmosphere</h3>
					<p>
						Enjoy a welcoming and relaxing environment while our stylists work their magic.
					</p>
				</li>
			</ol>
		</div>
	</div>
</section>


<!-- Hair color explanation -->

<section class="span2" style="padding-bottom: 0;">
	<div class="inner-wrapper">
		<div style="margin-block: auto;">
			<h2 data-aos="fade-up" data-aos-delay="100"><span class="font-l clr-primary">Our <span>Hair Color & Highlights</span> Services Include:</h2>
		</div>
		
	</div>
</section>
<!-- Hair color styles grid -->
<section class="span4">
    <div class="inner-wrapper">
		<div data-aos="fade-left" data-aos-delay="100">
				<img class="rounded" src="{red_hair}" alt="Full color red hair on a young woman">
			<h2 class="clr-primary">Full Color</h2>
			<p>From rich brunettes to radiant reds and everything in between, we offer a full spectrum of color services.</p>
		</div>
		<div data-aos="fade-left" data-aos-delay="200">
				<img src="{highlights}" alt="Woman with blonde hair higlights">
			<h2 class="clr-primary">Highlights & Lowlights</h2>
			<p>Add dimension and depth to your hair with perfectly placed highlights or lowlights.</p>
		</div>
		
			<div data-aos="fade-left" data-aos-delay="300"> 
				<img src="{balayage}" alt="Beautiful long balayage hair that starts deep black at the top and ends in a brilliant light brown">
			<h2 class="clr-primary">Balayage & Ombre</h2>
			<p>Get the latest in hair color trends with a custom balayage or ombre look designed just for you.</p>
		</div>
		
			<div data-aos="fade-left" data-aos-delay="400">
				<img src="{correction}" alt="Before and after of hair color restoration. Before was fried split ends with long dark roots. After is a vibrant gradient or pink and orange.">
			<h2 class="clr-primary">Color Correction</h2>
			<p>Not happy with a previous coloring service? Our experts are here to correct and transform your look.</p>
		</div>
	</div>

</section>


<!-- Call: us Today -->
<Cta />

<style>
	section.responsive-hero {
		background-image: var(--woman-black-hair);
		background-repeat: no-repeat; 
		background-size: cover; 
		background-position: center;
	}

	@media (max-width: 600px) {
		section.responsive-hero {
			background-image: var(--woman-black-hair-mobile);
			background-repeat: no-repeat; 
		background-size: cover; 
		background-position: center;
		}

		.no-mobile-bg {
			background: var(--clr-dark) !important;
		}
	}
</style>
