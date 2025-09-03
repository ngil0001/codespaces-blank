<script lang="ts">
  import { onMount } from 'svelte';
  import { links } from '../data/links';
  import Container from './Container.svelte';

  const items = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' }
  ];

  let open = false;
  let active = 'about';
  let isDark = false;

  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    root.classList.add('theme-transition');
    setTimeout(() => root.classList.remove('theme-transition'), 400);
    isDark = dark;
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMount(() => {
    isDark = document.documentElement.classList.contains('dark');

    const ids = items.map(i => i.id);
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) active = e.target.id;
        });
      },
      { rootMargin: '0px 0px -65% 0px', threshold: [0, 0.3, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  });

  const iconSun = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2m14 0h2M6.64 17.36l-1.42 1.42M19.78 4.22l-1.42 1.42"/></svg>';
  const iconMoon = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21Z"/></svg>';
  const iconMenu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
  const iconClose = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>';
</script>

<aside class="sidebar sticky top-0 h-14 md:h-screen border-b md:border-r border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md flex md:flex-col z-40">
  <div class="flex w-full items-center justify-between md:py-6">
    <a
      href="#about"
      class="sidebar-logo flex items-center gap-3 group"
      on:click|preventDefault={() => scrollToSection('about')}
    >
      <div class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-xs font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300">
        NG
      </div>
      <span class="font-semibold text-neutral-900 dark:text-white hidden md:inline">
        Noah Gilkey
      </span>
    </a>

    <div class="flex items-center gap-2">
      <button
        class="btn-outline btn-sm"
        aria-label="Toggle theme"
        aria-pressed={isDark}
        title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        on:click={toggleTheme}
      >
        {@html isDark ? iconSun : iconMoon}
      </button>

      <button
        class="btn-outline btn-sm md:hidden"
        aria-label="Toggle navigation"
        on:click={() => open = !open}
      >
        {@html open ? iconClose : iconMenu}
      </button>
    </div>

  </div>

  <nav class="sidebar-nav md:mt-4 overflow-y-auto px-4 md:px-0 pr-2 w-full md:flex-1" class:hidden={!open && 'md:block'} aria-label="Primary navigation">
    <ul class="relative grid md:gap-1 text-sm md:pt-2 md:pb-4 md:pr-2">
      {#each items as item}
        <li class="relative {active === item.id ? 'nav-item-active' : ''}">
          <span class="nav-indicator" aria-hidden="true"></span>
          <a
            href="#{item.id}"
            class="nav-link {active === item.id ? 'bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900' : ''}"
            on:click|preventDefault={() => scrollToSection(item.id)}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>

    <div class="hidden md:grid border-t border-neutral-200 dark:border-neutral-800 pt-4 mt-auto gap-2 text-sm mx-4 md:mx-0">
      {#if links.github}
        <a
          href={links.github}
          class="btn-outline btn-sm justify-start hover:bg-neutral-50 dark:hover:bg-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      {/if}

      {#if links.linkedin}
        <a
          href={links.linkedin}
          class="btn-outline btn-sm justify-start hover:bg-neutral-50 dark:hover:bg-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      {/if}

      {#if links.resume}
        <a
          href={links.resume}
          class="btn btn-primary btn-sm justify-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Resume
        </a>
      {/if}
    </div>
  </nav>
</aside>

