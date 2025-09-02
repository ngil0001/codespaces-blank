<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import Skills from '$lib/components/Skills.svelte';
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
<div class="min-h-screen grid md:grid-cols-[280px_1fr]">
	<SideBar />
	<div class="min-h-dvh flex flex-col">
		<Footer />
	</div>
</div>
	



{@render children?.()}
