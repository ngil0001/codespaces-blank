<script lang="ts">
    import Container from './Container.svelte';
    import { onMount } from 'svelte';
    const navItems = [
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

<header>
    <Container>
        <div>
                <span>
                    NG
                </span>
                <span>
                    Noah Gilkey
                </span>
            <a href='#about'>
                <span>
                    About
                </span>
            </a>
            <a href='#projects'>
                <span>
                    Projects
                </span>
            </a>
            <a href='#experience'>
                <span>
                    Experience
                </span>
            </a>
            <a href='#skills'>
                <span>
                    Skills
                </span>
            </a>
            <a href='#writing'>
                <span>
                    Writing
                </span>
            </a>
            <a href='#contact'>
                <span>
                    Contact
                </span>
            </a>
            <button on:click={toggleTheme}>
                <span>
                    Toggle Theme
                </span>
            </button>
        </div>
    </Container>
</header>