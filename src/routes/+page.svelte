<script>
	// import { onMount } from 'svelte';
	// 	import jq from 'jquery';
	// 	onMount(() => {
	// 		jq('section').wrapInner("<div class='inner-wrapper'></div>");
	// 	});

	import great_lengths from '$lib/images/logos/great-lengths-logo.png';
    	import sb_badge_2021 from '$lib/images/logos/sb-mag-badge-2021.png';
    	import sb_badge_2022 from '$lib/images/logos/sb-mag-badge-2022.png';
	import sb_badge_2023 from '$lib/images/logos/sb-mag-badge-2023.png';
	import girl_with_bangs from '$lib/images/backgrounds/home-hero-banner-girl-with-bangs.png';
	import girl_with_bangs_mobile from '$lib/images/photos/girl-with-bangs.png';
    	import girl_with_bangs_blurred from '$lib/images/photos/home/girl-with-bangs-blurred.png';
	import blonde_woman_hero from '$lib/images/photos/home/blonde-woman-hero.png';
	import blonde_woman_mobile from '$lib/images/photos/home/blonde-woman-mobile.png';
	import blonde_woman_blurred from '$lib/images/photos/home/blonde-woman-blurred.png';


	import Cta from './modules/sections/Call-us.svelte';

</script>

<!-- Responsive Hero banner -->
<!-- <section

	class="span2 pad-8 responsive-hero"
	style="background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5) 90%, rgba(0,0,0,1)), url({girl_with_bangs}); background-repeat: no-repeat; background-size: cover; background-position: center;"
>
	<div class="inner-wrapper">
		<div class="spacer" />
		<div class="">
			<h1 class="font-medium">
				When was the last time you <span class="font-bold font-xl all-caps clr-primary"
					>loved your hair?</span
				>
			</h1>
			<img
				class="hero-img"
				src={girl_with_bangs_mobile}
				alt="Woman with beautiful long black hair extensions"
			/>

			<h2 class="font-thin" />

			<p class="blockquote font-m font-thin">
				Expert hair stylists in Shreveport, Louisiana specializing in hair extensions and color.
			</p>
			<a class="button" href="/contact-us">Contact Us</a>
		</div>
	</div>
</section> -->

<!-- Responsive Hero banner -->
<section
id="one"
	class="span2 pad-8 responsive-hero"
	style:--bg-desktop-1="linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5) 90%, rgba(0,0,0,1)), url({girl_with_bangs})"
	style:--bg-mobile-1="linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({girl_with_bangs_blurred})"
>
	<div class="inner-wrapper">
		
		<div class="spacer" />
		
        <div class="">
			<h1 class="font-medium">
				When was the last time you <span class="font-bold font-xl all-caps clr-primary"
					>loved your hair?</span
				>
			</h1>
			
            <img
			class="hero-img img-mobile"
			src={girl_with_bangs_mobile}
			alt="Woman with beautiful long blonde hair extensions"
			data-aos="fade-up"
			data-aos-delay="100"
		/>


			<p class="blockquote font-m font-thin">
				Expert hair stylists in Shreveport, Louisiana specializing in hair extensions and color.
			</p>
			<a class="button" href="/contact-us">Contact Us</a>
		</div>
	</div>
</section>

<!-- Reviews -->

<section class="span1">
	<div class="inner-wrapper center" style="margin-bottom: 1rem; padding-bottom:0">
		<h2>Your Shreveport neighbors love their hair a lot</h2>

		<div>
			<h3 style="display: block">
				4.9 <div class="clr-primary" style="display: inline">
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
				</div>
			</h3>
			<p>
				<a
					href="https://www.google.com/search?q=cashmere+hair+salon+shreveport&sca_esv=589642725&ei=7lJ2ZeL3I4-nmtkPtvuFwAM&ved=0ahUKEwjipsTXi4aDAxWPkyYFHbZ9ATgQ4dUDCBA&uact=5&oq=cashmere+hair+salon+shreveport&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmNhc2htZXJlIGhhaXIgc2Fsb24gc2hyZXZlcG9ydDIREC4YgAQYxwEYrwEYpgMYqAMyIBAuGIAEGMcBGK8BGKYDGKgDGJcFGNwEGN4EGOAE2AEBSN4PUPkEWOMOcAF4AZABAJgBfaABnQqqAQQwLjExuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBRAAGIAEwgIGEAAYFhgewgIIEAAYFhgeGArCAgsQABiABBiKBRiGA8ICERAuGIAEGMcBGK8BGKgDGKYDwgIgEC4YgAQYxwEYrwEYqAMYpgMYlwUY3AQY3gQY4ATYAQHiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x8636d3777fd8f92f:0x45c6e264d84b25e6,1,,,,"
					>40 reviews</a
				>
			</p>
		</div>
        
	</div>

	<div class="inner-wrapper" style="padding-top:0">
		<div class="span3">
			<div class="inner-wrapper">
			<div class="card-gray">
				<div class="clr-primary">
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
				</div>
				<p>
					"Great <strong>QUALITY</strong>, great <strong>PRICING</strong>, great
					<strong>ATMOSPHERE</strong>
					and a great <strong>OVERALL EXPERIENCE</strong>."
				</p>
			</div>
			<div class="card-gray">
				<div class="clr-primary">
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
				</div>
				<p>"Great <strong>price</strong> and top notch <strong>quality</strong> of hair cut!!"</p>
			</div>
			<div class="card-gray">
				<div class="clr-primary">
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
					<span class="icon filled">star</span>
				</div>
				<p>"Tatiana is <strong>hands down</strong> the best there is in town!!"</p>
			</div>
			</div>
		</div>
	</div>

    <section class="span-center center" style="margin-top: 0; padding-top: 2rem; padding-bottom: 0;">

		<div class="span2">
			<div class="inner-wrapper" style="display: flex; align-items: center; flex-wrap: wrap; flex-direction: column;">
		
				<h2 style="text-align: center;">Winner of SB Magazine Best Salons, 3 years in a row.</h2>
				<div style="flex-grow: 1;">
			        <img src="{sb_badge_2021}" alt="Best of SB 2021" style="max-width: 150px">
			        <img src="{sb_badge_2022}" alt="Best of SB 2022" style="max-width: 150px">
				<img src="{sb_badge_2023}" alt="Best of SB 2023" style="max-width: 150px">
				</div>
			</div>    
		</div>
    
    </section>
</section>

<!-- Main Services -->
<section class="span4 stretch mini-menu-wrapper">
	<div class="mini-menu inner-wrapper">
		<h2 style="" class="">Browse Services</h2>
	</div>
	<div class="inner-wrapper">
		<div class="card clr-bg">
			<h3 ><a class="clr-bg" href="/hair-extensions">Hair extensions</a></h3>
			<p>If you're craving length and volume, contact us for Great Lengths hair extensions.</p>
			<a href="/hair-extensions" class="button">Learn More</a>
		</div>
		<div class="card">
			<h3 ><a href="/haircuts">Womens & Mens Haircuts</a></h3>
			<p>
				Reinvent your look with a flattering haircut that suits your hair type and frames your face
				well.
			</p>
			<a href="/haircuts" class="button">Learn More</a>
		</div>
		<div class="card">
			<h3 >Color & Highlights</h3>
			<p>
				From highlights to lowlights to full color and balayage, Cashmere offers a wide variety of
				hair coloring services.
			</p>
			<a href="/color-highlights" class="button">Learn More</a>
		</div>
		<div class="card">
			<h3 >Brazilian Blowout</h3>
			<p>If you weant a sleek, manageable mane, schedule a Brazilian blowout keratin treatment.</p>
		</div>
	</div>
</section>

<!-- Salon you can trust -->
<section
	class="span1 invert center"
	style="background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.1)), var(--clr-bg);"
>
	<div class="inner-wrapper">
		<div class="center">
			<h2 class="font-l">
				A salon you can trust for your
				<div class="font-xl font-light uppercase" style="">
					HAIR EXTENSIONS
				</div>
			</h2>
			<img
				class="center"
				src={great_lengths}
				alt="Great Lenghts Logo"
				style="width:300px; margin-inline: auto"
			/>
		</div>
	</div>
</section>

<!-- Responsive Hero banner -->
<section
    id="two"
	class="span2 pad-16 responsive-hero"
	style:--bg-desktop-2="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url({blonde_woman_hero})"
	style:--bg-mobile-2="linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8) 90%, rgba(0,0,0,1)), url({blonde_woman_blurred})"
>
	<div class="inner-wrapper">
		<img
			class="hero-img img-mobile"
			src={blonde_woman_mobile}
			alt="Woman with beautiful long blonde hair extensions"
			data-aos="fade-up"
			data-aos-delay="100"
		/>
		<div class="spacer" />
		<div>
			<div class="card-black">
				<h2 class="font-bold clr-primary">You Look Amazing</h2>
				<div>
					<p>
						At Cashmere, we're obsessed with bringing out your beauty, both inside and out. Our
						passion goes beyond giving you fabulous hair. We aim to boost your confidence, help you
						feel centered, and reduce your stress.
					</p>
					<p class="font-bold font-m">
						So please, make yourself at home and get ready to love your new look.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Gold card -->
<!-- <section class="span2" style="background-color: transparent; background-image: url({blonde_woman}); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: bottom right">
    <div>

    </div>
    <div>
        <div class="card">
            <h2 class="font-xl font-thin uppercase">A hair salon with a solution in Shreveport, Louisiana</h2>
            <p>
                Do you want long, gorgeous locks that enhance your everyday style? Is your dry, damaged hair begging for a deep-conditioning treatment?
            </p>
            <p>No matter what your mane needs, Cashmere Hair Salon can deliver. Our owner, Tatiana Garland, has been helping clients fall in love with their hair for more than a decade. Whether your hair is thick and curly or long and straight, she and her team can give you the look you’ve always wanted. Cashmere specializes in Great Lengths hair extensions, which are high-quality extensions that look natural. We also specialize in men’s & women’s haircuts, hair color & highlights, and Brazilian blowouts.</p>
            <p>Tatiana is an advanced hairstylist that always keeps up with the latest trends. In order to make sure she is always at the top of the hair game, she continuously does training in: Las Vegas, New York City, Dallas, Arkansas, and Austin. She works with Redken Products to make sure she can accommodate all hair types.</p>
        </div>
    </div>
</section> -->

<!-- LOOK YOU LOVE -->
<section class="span2 responsive-hero">
	<div class="inner-wrapper">
		<div class="card">
			<h2 class="font-l font-bold uppercase">We're obsessed with your glow up</h2>
			<p>
				Do you want long, gorgeous locks that enhance your everyday style? Is your dry, damaged hair
				begging for a deep-conditioning treatment?
			</p>
			<p>
				No matter what your mane needs, Cashmere Hair Salon can deliver. Our owner, Tatiana Soshina,
				has been helping clients fall in love with their hair for almost two decades. Whether your
				hair is thick and curly or long and straight, she and her team can give you the look you’ve
				always wanted. Cashmere specializes in Great Lengths hair extensions, which are high-quality
				extensions that look natural. We also specialize in men’s & women’s haircuts, hair color &
				highlights, and Brazilian blowouts.
			</p>
		</div>
		<div class="" style="margin: auto; padding-block: 2rem;">
			<div class="font-l font-thin">Leave the hair salon with a</div>
			<div class="font-xl font-bold">LOOK YOU LOVE</div>
		</div>
	</div>
</section>




<!-- Bottom bullets -->

<section class="span2 valign-center">
	<div class="inner-wrapper">
		<div>
			<h2>Shreveport, Louisiana</h2>
			<p>
				While Cashmere specializes in hair extensions, we also offer a variety of hair services to
				suit all your needs.
			</p>
		</div>
		<div>
			<ul class="checklist">
				<li>
					<h3 class="uppercase">Hair Extensions</h3>
					<p>Install great lengths hair extensions for an instant volume boost.</p>
				</li>
				<li>
					<h3 class="uppercase">Haircuts</h3>
					<p>Update your look with a chic haircut or routine trim.</p>
				</li>
				<li>
					<h3 class="uppercase">Hair Color</h3>
					<p>Try highlights, lowlights or balayage to add depth and drama.</p>
				</li>
				<li>
					<h3 class="uppercase">Brazilian Blowouts</h3>
					<p>Tame your frizzy mane with a blowout keratin treatment.</p>
				</li>
			</ul>
		</div>
	</div>
</section>


<Cta />

<style>

	.mini-menu-wrapper h3 {
		font-weight: 700;
	}

.mini-menu-wrapper .card {
	background-color: rgba(100, 50, 50, .2);
	box-shadow: inset 0px 0px 128px rgba(255, 193, 86, .1);
	box-shadow: unset;
	border: 2px solid rgba(207,187,130, .3);
}

	.mini-link {
		text-decoration: underline;
		text-underline-offset: 5px;
	}

    section#one.responsive-hero {
		background-image: var(--bg-desktop-1);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	section#two.responsive-hero {
		background-image: var(--bg-desktop-2);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	@media (max-width: 600px) {

        section#one.responsive-hero {
			background-image: var(--bg-mobile-1);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}

		section#two.responsive-hero {
			background-image: var(--bg-mobile-2);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}

		.no-mobile-bg {
			background: var(--clr-dark) !important;
		}
	}
</style>
