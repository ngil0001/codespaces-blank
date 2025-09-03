<script lang="ts">
  import Container from './Container.svelte';
  import { onMount } from 'svelte';

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' }
  ];

  let isScrolled = false;
  let isDark = false;
  let mobileMenuOpen = false;

  function toggleTheme() {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    root.classList.add('theme-transition');
    setTimeout(() => root.classList.remove('theme-transition'), 400);
    isDark = dark;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    mobileMenuOpen = false;
  }

  onMount(() => {
    isDark = document.documentElement.classList.contains('dark');

    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const iconSun = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v2m0 14v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2m14 0h2M6.64 17.36l-1.42 1.42M19.78 4.22l-1.42 1.42"/></svg>';
  const iconMoon = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21Z"/></svg>';
  const iconMenu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
  const iconClose = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>';
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:scrolled={isScrolled}
>
  <div class="bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm scrolled:shadow-md">
    <Container>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#about" class="flex items-center gap-3 group">
          <div class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-xs font-semibold shadow-lg group-hover:shadow-xl transition-shadow">
            NG
          </div>
          <span class="font-semibold text-neutral-900 dark:text-white hidden sm:block">
            Noah Gilkey
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          {#each navItems as item}
            <a
              href="#{item.id}"
              class="nav-link"
              on:click|preventDefault={() => scrollToSection(item.id)}
            >
              {item.label}
            </a>
          {/each}
        </nav>

        <!-- Actions -->
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
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            on:click={toggleMobileMenu}
          >
            {@html mobileMenuOpen ? iconClose : iconMenu}
          </button>
        </div>
      </div>
    </Container>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div id="mobile-nav" class="md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 animate-fade-in" role="dialog" aria-modal="true">
      <Container>
        <nav class="py-4">
          <ul class="space-y-2">
            {#each navItems as item}
              <li>
                <a
                  href="#{item.id}"
                  class="mobile-nav-link"
                  on:click|preventDefault={() => scrollToSection(item.id)}
                >
                  {item.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </Container>
    </div>
  {/if}
</header>

