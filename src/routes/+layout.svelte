<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		const saved = localStorage.getItem('theme');
		const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (saved === 'dark' || (!saved && prefers)) document.documentElement.classList.add('dark');
	});

	let { children } = $props();
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<svelte:head>
	<title>Noah Gilkey - Software Engineer</title>
	<meta name="description" content="Portfolio, projects, and contact." />
</svelte:head>
<a href="#main-content" class="skip-link">Skip to content</a>
<Header />
<div class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 transition-colors">
	<main id="main-content" class="flex-1 pt-20" aria-label="Main content">
		{@render children?.()}
	</main>
	<Footer />
</div>
