<script>
	// import { onMount } from 'svelte';
	// import jq from 'jquery';
	// onMount(() => {
	// 	jq('section').wrapInner("<div class='inner-wrapper'></div>");
	// });

	import great_lengths from '$lib/images/logos/great-lengths-logo.png';
	import woman_black_hair from '$lib/images/photos/woman-long-black-hair-banner-right.png';
	// import woman_black_hair_mobile from '$lib/images/photos/woman-black-hair-mobile.png';

	
	import tatiana from '$lib/images/photos/staff/Tatiana.png';
	import skylar from '$lib/images/photos/staff/Skylar.png';
	import lizzie from '$lib/images/photos/staff/Elizabeth.png';
	
	import salon_storefront from '$lib/images/photos/salon/cashmere-storefront.jpg';
	import salon_storefront_bg from '$lib/images/photos/salon/cashmere-storefront-bg.jpg';

	import Cta from '../modules/sections/Call-us.svelte';
</script>

<!-- Responsive Hero banner -->
<section
	class="span2 pad-8 responsive-hero"


	style="
	background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({salon_storefront_bg}); 
	background-repeat: no-repeat; 
	background-size: cover; 
	background-position: left;"
>
	<div class="inner-wrapper">
		<!-- <div class="spacer"></div> -->
		<img class="" src={salon_storefront} alt="Woman with beautiful long black hair extensions" data-aos="fade-up"/>
		<div class="" style="" data-aos="fade-up" data-aos-delay="100">
			<h1 class="">
				Meet your new <br />
				<span class="font-huge all-caps font-bolder clr-primary">Happy Place</span>
			</h1>
			<p>
				Located across from Superior Grill on Line Avenue, Cashmere Salon is in the heart of
				Shreveport's Pierremont area.
			</p>
			<p>
				When you walk in, you'll be greeted to an inviting atmosphere where you can feel welcome.
				Enjoy refreshing beverages and snacks in the waiting area.
			</p>
			<div class="card-black font-m" data-aos="fade-up" data-aos-delay="200">
				<h3 class="font-bold underline">Location</h3>
				<p>
					6112 Line Ave.<br />
					Shreveport, LA 71106 <br /> <br />
					<a href="tel:+13187791960">(318) 779-1960</a>
				</p>
		<hr>
				<h3 class="font-bold underline">Hours</h3>
				<table style="border-collapse: separate;">
					<tr>
						<td>Sunday</td><td>Closed</td>
					</tr>
						<tr>
							<td>Monday</td><td>Closed</td>
						</tr>
						<tr>
							<td>Tuesday</td><td>10 AM - 6 PM</td>
						</tr>
						<tr>
							<td>Wednesday</td><td>10 AM - 6 PM</td>
						</tr>
						<tr>
							<td>Thursday</td><td>10 AM - 6 PM</td>
						</tr>
						<tr>
							<td>Friday</td><td>10 AM - 6 PM</td>
						</tr>
						<tr>
							<td>Saturday</td><td>10 AM - 6 PM</td>
						</tr>
		
				</table>
			</div>
		</div>
	</div>
</section>


<!-- Staff -->
<section class="header" style="padding-bottom: 0; margin-bottom: 0">
	<div class="inner-wrapper">
		<h2>Meet the team</h2>
	</div>
</section>
<section class="span3 staff-photos" style="padding-top: 0">
	<div class="inner-wrapper">
		<div data-aos="fade-left" data-aos-delay="100">
			<img class="rounded" src={tatiana} alt="Smiling young woman with classic bob haircut" />
			<h2 class="clr-primary">Tatiana</h2>
			<p>Great Lengths Certified, Brazilian Blowout Certified, Color Expert, Women's Haircuts</p>
		</div>
		<div data-aos="fade-left" data-aos-delay="200">
			<img src={skylar} alt="Smiling man with clean haircut" />
			<h2 class="clr-primary">Skylar</h2>
			<p>Color Expert, Brazilian Blowout Certified, Women's Haircuts, Men's Haircuts, Highlights, Curly Hair & Perms</p>
		</div>
		<div data-aos="fade-left" data-aos-delay="300">
			<img src={lizzie} alt="Smiling young woman with dark hair and full bangs" />
			<h2 class="clr-primary">Lizzie</h2>
			<p>
				Brazilian Blowout Certified, Color Expert, Women's Haircuts, Men's Haircuts, Highlights
			</p>
		</div>
		
	</div>
</section>

<!-- Call us Today -->
<Cta />

<style>
	.responsive-hero {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: right;
	}

	.responsive-hero .hero-img {
		display: none;
		margin-bottom: var(--block);
	}

	table td:first-child {
		padding-right: 2rem;
	}

	@media (max-width: 600px) {
		.responsive-hero {


		}
		.responsive-hero .hero-img {
			display: block;
			width: 100%;
			border-radius: 1rem;
			padding: 0;
		}
	}

	.staff-photos img {
		object-fit: cover;
		width: 100%;
		height: 400px;
	}
</style>
