<script>

	
	// import '../css/colors.css';

	import Header from './modules/header.svelte';
	import Footer from './modules/footer.svelte';

	import '../css/_variables.css';
	// import '../css/colors.css';
	// import '../css/styles.css';
	import '../css/layout.css';
	import '../css/typography.css';
	import '../css/animate.css';
	// import '../css/ui.css';
	import '../css/buttons.css';
	// import '../css/icons.css';
	import '../css/elements.css';
	import '../css/effects.css';
	// import '../css/accessibility.css';

	// import preview from '$lib/images/meta/preview.png';

</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Cashmere Hair Salon | Shreveport, LA</title>
	<meta name="title" content="Hair Extensions – Cashmere Hair Salon | Shreveport, LA" />
	<meta
		name="description"
		content="Looking for a professional hair salon in Shreveport, LA? Discover stunning haircuts, salon-grade Great Lengths hair extensions, and Brazilian Blowouts at our versatile hair salon. Schedule an appointment today for expert haircare and exceptional styling."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://cashmerehairsalon.com.com/" />
	<meta property="og:title" content="Hair Extensions – Cashmere Hair Salon | Shreveport, LA" />
	<meta
		property="og:description"
		content="Looking for a professional hair salon in Shreveport, LA? Discover stunning haircuts, salon-grade Great Lengths hair extensions, and Brazilian Blowouts at our versatile hair salon. Schedule an appointment today for expert haircare and exceptional styling."
	/>
	<!-- <meta property="og:image" content={preview}> -->

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://sashasosin.com/" />
	<meta property="twitter:title" content="Hair Extensions – Cashmere Hair Salon | Shreveport, LA" />
	<meta
		property="twitter:description"
		content="Looking for a professional hair salon in Shreveport, LA? Discover stunning haircuts, salon-grade Great Lengths hair extensions, and Brazilian Blowouts at our versatile hair salon. Schedule an appointment today for expert haircare and exceptional styling."
	/>
	<!-- <meta property="twitter:image" content={preview}> -->
</svelte:head>

<Header />
<div class="app">
	<!-- <div class="spacer"></div> -->

	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
</style>
