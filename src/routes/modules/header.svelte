<script>
	// import sasha from '../lib/images/ui/sasha-icon.png';

	let links = [
		// { text: 'subdir', href: '/dir' },
		{ text: 'Hair Extensions', href: '/hair-extensions' },
		{ text: 'Haircuts', href: '/haircuts' },
		{ text: 'Color', href: '/color-highlights' },
		{ text: 'The Salon', href: '/salon' },
		{ text: 'Book Now', href: '/contact-us' },
	];

	var menuON = 0;
	let menuState = 'hidden';
	function toggleMobileMenu() {
		// alert(menuON)

		if (menuON == 0) {
			// @ts-ignore
			// mobileMenu.style.display = "flex";
			menuON = 1;
			menuState = 'hidden';
		} else if (menuON == 1) {
			// @ts-ignore
			// mobileMenu.style.display = "none";
			menuON = 0;
			menuState = 'visible';
		}
	}

	function closeMenu() {
		menuON = 0;
		menuState = 'visible';
	}


	

	
	
</script>

<header>
	<div class="nav-wrapper blur">
		<nav class="">
			<div class="logo-wrapper-wrapper">
				<div class="logo-wrapper">
					<a class="logo remove-underline" title="Home" href="/">
						<!-- <span class=""><img src={sasha} alt="Home" /> </span> -->

						<span class="logo-name">Cashmere</span>
					</a>
				</div>
			</div>

			<ul class="links-wrapper desktop-menu">
				{#each links as { href, text }, i}
					<li>
						{#if i === links.length - 1}
							<a
								class="button signup shadow1 nav-link-item"
								tabindex="0"
								{href}
								data-sveltekit-reload>{text}</a
							>
						{:else}
							<a class="nav-link-item" tabindex="0" {href}>{text}</a>
						{/if}
					</li>
				{/each}
			</ul>

			{#if menuState === 'hidden'}
				<a
					class="hamburger-icon remove-underline hamburger-desktop"
					title="Menu"
					href={null}
					on:click={toggleMobileMenu}
				>
					<span class="material-symbols-outlined">menu</span>
				</a>
			{:else}
				<p />
			{/if}

			<div class={menuState}>
				<ul class="links-wrapper mobile-menu">
					<a
						class="hamburger-icon remove-underline"
						title="Menu"
						href={null}
						on:click={toggleMobileMenu}><span class="material-symbols-outlined">close</span></a
					>

					{#each links as { href, text }, i}
						{#if i === links.length - 1}
							<a class="signup shadow1 nav-link-item" tabindex="0" {href} on:click={closeMenu}>{text}</a>
						{:else}
							<a class="nav-link-item" tabindex="0" {href} on:click={closeMenu}>{text}</a>
						{/if}
					{/each}
				</ul>
			</div>

			<!-- menu is {menuState} -->
		</nav>
	</div>
</header>

<spacer></spacer>

<style>

	spacer {
		height: calc(var(--block) + 51px);
	}

	@media (max-width:600px) {
		spacer {
		height: calc(var(--block)/2 + 51px);
	}
	}

	.remove-underline:hover {
		text-decoration: none;
		cursor: pointer;
	}

	.blur {
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: saturate(3) blur(5px);
		background-color: rgba(1, 1, 1, 0.7);
		background-blend-mode: darken;
	}

	.nav-wrapper {
		position: fixed;
		z-index: 100;
		/* display:flex; */
		width: 100%;
	}

	/* nav {
		display: flex;
		flex-direction: row;
		margin: auto;
        width:auto;
		align-items: center;
		justify-content: space-between;
		max-width: 120ch;
        margin-block-start: 1em;

        inset:4em;
	} */
	nav {
		margin: auto;
		padding: calc(var(--block)/2) var(--inline);
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: var(--max-width, 1200px);
		/* border-bottom:1px solid rgba(160, 160, 160, 0.7); */
	}

	/* Logo */

	.logo-wrapper-wrapper {
		display: flex;
		flex-direction: columns;

		align-items: center;
	}

	.logo-wrapper {
		display: flex;
	}

	.logo {
		display: flex;
		align-items: center;

		gap: 0.5em;

		margin: 4px;
	}

	img {
		height: 30px;
		width: 30px;
	}

	.logo-name {
		font-family: Montserrat;
		font-weight: 500;
		font-size: 1.3rem;
		letter-spacing: 6px;
		text-transform: uppercase;
	}

	/* Links */



	.links-wrapper {
		display: flex;
		align-items: start;

		/* padding:1em; */
	}

	.links-wrapper a {
		white-space: nowrap;
		text-decoration: none;
	}


	.links-wrapper a, .links-wrapper a:visited {
    color: var(--clr-text);
}

.links-wrapper a.button, .links-wrapper a.button:visited {
    color: var(--clr-bg);
}

	ul {
		display: flex;
		gap: 1em;
		align-items: center;
		justify-content: flex-end;
		/* margin: 1em; */
	}

	li {
		list-style-type: none;
	}

	/* Mobile */
	.hamburger-icon {
		/* display:none; */
		display: flex;

		align-items: center;
		text-align: right;
		font-size: 1.5em;
		/* border:1px solid white; */
	}

	.desktop-menu {
		display: flex;
		gap: 3em;
		align-items: center;
		justify-content: flex-end;
		/* border:1px solid red; */
	}
	.mobile-hamburger {
		display: none;
	}

	.mobile-menu {
		flex-direction: column;
		align-items: flex-end;
		gap: 2em;
	}

	@media (width > 769px) {
		.mobile-menu {
			display: none;
			flex-direction: column;
			align-items: flex-end;
			gap: 2em;
		}
		.hamburger-desktop {
			display: none;
		}
	}

	.hidden {
		display: none;
	}
	.visible {
		display: visible;
	}

	@media (width < 768px) {
		.desktop-menu {
			display: none;
		}
		.hamburger-desktop {
			display: flex;
		}
		ul {
			margin: 1em 0;
		}
		.hamburger-icon {
			display: flex;
			margin-left: auto;
			margin-right: 0;
		}
		.mobile-hamburger {
			display: block;
		}

		.hidden {
			display: none;
		}
		.visible {
			display: visible;
		}
	}
</style>
