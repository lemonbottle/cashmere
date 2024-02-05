<script>

import { onMount } from 'svelte';
	import jq from 'jquery';
	onMount(() => {
		jq('section').wrapInner("<div class='inner-wrapper'></div>");
	});


import great_lengths from '$lib/images/logos/great-lengths-logo.png';




</script>



<!-- Hero banner -->

<section class="span2 pad-4" style="background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(https://cashmerehairsalon.com/wp-content/uploads/2018/11/home-hero-bg.jpg);">
    <div class="">
      
    </div>
    
    <div class="">
        <h2 class='font-xl font-thin uppercase'>
            Hair Extensions in Shreveport, Louisiana
    </h2>
    <p class="blockquote font-m font-thin">Expert hair stylists in Shreveport, Louisiana specializing in hair extensions.</p>
    <a class="button" href="/contact-us">Contact Us</a>
    </div>
</section>

<!-- Grid 4 -->
<section class="span4 stretch">
    <div>
        <h2>Hair extensions</h2>
        <p>If you're craving length and volume, contact us for Great Lengths hair extensions.</p>
    </div>
    <div>
        <h2>Great Lengths Hair Extensions</h2>
        <p>Reinvent your look with a flattering haircut that suits your hair type and frames your face well.</p>
    </div>
    <div>
        <h2>My Work</h2>
        <p>From highlights to lowlights to full color and balayage, Cashmere offers a wide variety of hair coloring services.</p>
    </div>
    <div>
        <h2>Contact Us</h2>
        <p>If you weant a sleek, manageable mane, schedule a Brazilian blowout keratin treatment.</p>
    </div>
</section>

<!-- Salon trust -->
<section class="span1 invert center" style="background: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.5)), var(--clr-bg);">
    <div class="center"><h2 class="font-l">A salon you can trust for your<div class="font-xl font-light uppercase" style="color: var(--clr-gold)">highlights</div></h2>
<img class="center" src={great_lengths} alt="Great Lenghts Logo" style="width:300px; margin-inline: auto" /></div>
</section>

<!-- Gold card -->
<section class="span2" style="background-color: transparent; background-image: url('https://cashmerehairsalon.com/wp-content/uploads/2018/12/beautiful-woman-with-straight-hair-bg.jpg'); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: bottom right">
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
</section>

<!-- LOOK YOU LOVE -->
<section class="span2 invert">
    <div class="invert">
        <div class="font-l font-thin">Leave the hair salon with a
        </div>
        <div class="font-xl font-bold">LOOK YOU LOVE</div>
    </div>
    <div></div>
</section>

<!-- Bullets -->

<section class="span2 valign-center">
    <div>
        <h2>Shreveport, Louisiana</h2>
        <p>While Cashmere specializes in hair extensions, we also offer a variety of hair services for everyone.</p>
    </div>
    <div>
        <ul class="checklist">
            <li><h3 class="uppercase">Hair Extensions</h3><p>
                Install great lengths hair extensions for an instant volume boost.</p></li>
            <li><h3 class="uppercase">Haircuts</h3><p>Update your look with a chic haircut or routine trim.</p></li>
            <li><h3 class="uppercase">Hair Color</h3><p>Try highlights, lowlights or balayage to add depth and drama.</p></li>
            <li><h3 class="uppercase">Brazilian Blowouts</h3>
            <p>Tame your frizzy mane with a blowout keratin treatment.</p></li>
        </ul>
    </div>
</section>




<style>

   
</style>