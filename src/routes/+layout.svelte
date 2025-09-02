<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';

	let { children } = $props();
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<svelte:head>
	<title>Noah Gilkey - Software Engineer</title>
	<meta name="description" content="Portfolio, projects, and contact." />
</svelte:head>
<div class="min-h-screen">
	<Header />
	<Hero />
	<Footer />
</div>
	



{@render children?.()}
