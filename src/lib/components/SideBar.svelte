<script lang="ts">
    import { links } from '../data/links';
    const items = [
         {
            id: 'about', label: 'About' 
        },
        {
            id: 'projects', label: 'Projects' 
        },
        {
            id: 'Experience', label: 'Experience' 
        },
        {
            id: 'Skills', label: 'Skills' 
        },
        {
            id: 'Writing', label: 'Writing' 
        },
        {
            id: 'Contact', label: 'Contact' 
        },
    ];
    let open = false;
    function toggleTheme() {
        const root = document.documentElement;
        const dark = root.classList.toggle('dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light' );
    }
</script>

<aside class="sticky top-0 h-dvh border-r dark:border-neutral-900 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
    <div class="container-app py-6">
        <a href='#about' class='inline-flex'>
            <span class='inline-grid'>
                
            </span>
            <span class='hidden md:inline'>Noah Gilkey</span>
        </a>
        <div class='flex items-center gap-2 md:mt-6'>
            <button class='btn' aria-label="Toggle theme" on:click={toggleTheme}>Toggle Theme</button>
            <button class='btn' aria-label="Toggle menu" on:click={() => open = !open}>Menu</button>
        </div>
    </div>

    <nav class="mt-6" class:hidden={!open && true} >
        <ul class='grid gap-1 text-sm'>
            {#each items as item}
                <li>
                    <a href={'#' + item.id} class='block px-3 py-2 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800'>{item.label}</a>
                </li>
            {/each}
        </ul>
        <div class='mt-6 grid gap-2 text-sm'></div>
       <a href={links.github} class="btn-outline">GitHub</a>
       <a href={links.linkedin} class="btn-outline">LinkedIn</a>
       <a href={links.resume} class="btn-outline">Resume</a>
    </nav>
</aside>