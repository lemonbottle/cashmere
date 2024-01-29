<script>
	import { onMount } from 'svelte';
	// import jq from 'jquery';
	// onMount(() => {
	// 	jq('section').wrapInner("<div class='inner-wrapper'></div>");
	// });

	import great_lengths from '$lib/images/logos/great-lengths-logo-white.webp';

	import woman_black_hair from '$lib/images/photos/hair-extensions/woman-black-hair-extensions-flipped.png';
	import woman_black_hair_mobile from '$lib/images/photos/hair-extensions/woman-black-hair-extensions-cropped.png';
	import woman_black_hair_bg from '$lib/images/photos/hair-extensions/hair-extensions-bg-blurred.png';
	import woman_blonde_hair from '$lib/images/photos/hair-extensions/happy-blonde-girl-with-long-hair-bg-flipped.png';
	import woman_blonde_hair_mobile from '$lib/images/photos/hair-extensions/happy-blonde-girl-with-long-hair-mobile.png';

	import Cta from '../modules/sections/Call-us.svelte';

</script>

<!-- Responsive Hero banner -->
<section
	class="span2 pad-4 responsive-hero" 
	style:--woman-black-hair="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({woman_black_hair})"
	style:--woman-black-hair-mobile="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({woman_black_hair_bg})"
	style-disable="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({woman_black_hair}); "
>
	<div class="inner-wrapper">
		<img
			class="hero-img"
			src={woman_black_hair_mobile}
			alt="Woman with beautiful long black hair extensions"
			data-aos="fade-up" data-aos-delay="100"
		/>
		<div class="" style="">
			<h1 class="font-l font-light uppercase" data-aos="fade-up" data-aos-delay="200">
				Shreveport's<br /><span class="clr-primary font-bold font-xl" data-aos="fade-up" data-aos-delay="300">EXTENSION EXPERTS</span><br
				/>
			</h1>
			<h3 data-aos="fade-up" data-aos-delay="400">The best hair extensions you can find in Shreveport, Louisiana</h3>
			<div class="blockquote" data-aos="fade-up" data-aos-delay="500">
				<p>
					Do you want to add length and volume to your hair? You found the right place, because
					Cashmere offers the best hair extensions in Shreveport. Cashmere offers Great Lengths, which
					is a high-quality hair extension brand that offers natural results. You switch them out
					every four to six months, depending on how you take care of them and how fast your hair
					grows.
				</p>
				<p>
					It takes less than two hours to install your hair extensions, so call <a href="tel:+13187791960">(318) 779-1960</a> today to
					schedule your appointment at Cashmere Hair Salon in Shreveport, Louisiana.
				</p>
				<div class="button-wrapper"><a href="tel:+13187791960" class="button" style="margin-inline: auto;">Call Now</a></div>
				<br>
			</div>
		</div>
	</div>
</section>

<!-- Great lengths Callout -->
<section class="span2" style="background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.5)), var(--clr-bg);">

<div class="inner-wrapper">
	<div class="center">
		<img class="" src={great_lengths} alt="Great Lenghts Logo" style="width:300px;" 
		data-aos="fade-up" data-aos-delay="100"/>
		<h3 data-aos="fade-up" data-aos-delay="200">Great Lengths Certified</h3>
	</div>
	
		<p data-aos="fade-up" data-aos-delay="300"><a href="https://www.greatlengths.com/en-us/">Great Lengths<sup>®</sup> Hair Extensions</a> are known for their high quality and versatility. These extensions are made from ethiCtay-sourced human hair and are meticulously crafted to blend seamlessly with the wearer’s own hair. They are available in various lengths, colors, and textures, allowing individuals to achieve their desired hairstyle and enhance their natural appearance. Great Lengths Hair Extensions are applied using a keratin bond method, which ensures a durable and long-lasting hold.</p>
</div>
</section>

<!-- Benefits of extensions -->
<section
	class="span2 pad-8 responsive-hero no-mobile-bg"
	style="background-image: url({woman_blonde_hair}); background-position: center; background-size: cover;"
>
	<div class="inner-wrapper">
		<div class="spacer" />
		<img
			class="hero-img"
			src={woman_blonde_hair_mobile}
			alt="Woman with beautiful long black hair extensions"
			style="object-fit:cover; height: 400px; margin-bottom: 0;"
			data-aos="fade-up" data-aos-delay="100"
		/>
		<div class="card-black"
		data-aos="fade-up" data-aos-delay="0">
			<h2 class="all-caps" 
			data-aos="fade-up" data-aos-delay="200">
				3 Reasons to try <span class="clr-primary">Great Lengths</span> Hair extensions
			</h2>
			<hr />
			<br />
			<ol class="checklist"
			data-aos="fade-up" data-aos-delay="400">
				<li>
					<h3 class="uppercase">Natural look</h3>
					<p>Nobody will know that you’ve pumped up your look with hair extensions.</p>
				</li>
				<li>
					<h3 class="uppercase">Insanely high quality</h3>
					<p>
						Made with real human hair, Greath Lengths extensions blend seamlessly with your natural
						hair.
					</p>
				</li>
				<li>
					<h3 class="uppercase">Industry standard</h3>
					<p>
						Trusted by the best hair stylists and market for over two decades, you can be sure in your
						choice.
					</p>
				</li>
			</ol>
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
