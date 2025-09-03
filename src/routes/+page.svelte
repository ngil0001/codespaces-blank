
<script lang="ts">
    import Container from '$lib/components/Container.svelte';
    import { links } from '$lib/data/links';
    import { experience } from '$lib/data/experience';
    import TimeLineItem from '$lib/components/TimeLineItem.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import { fade } from 'svelte/transition';
</script>

<main class="space-y-32 md:space-y-40 pt-2 md:pt-6">
    <section id="about" class="section !pt-10">
        <Hero
            title="I build clean, fast, reliable mobile apps"
            subtitle="Solo dev behind ChopChop and a former BI developer in healthcare. I design pragmatic systems: mobile frontends, GraphQL backends, and CI/CD that actually ship."
            badgeText="Available for new roles"
            primaryAction={{ text: 'Download résumé', href: links.resume, external: true }}
            secondaryAction={{ text: 'GitHub', href: links.github, external: true }}
            showImage={false}
        />
    </section>

    <!--Projects-->
    <section id="projects" class="section">
        <Container>
                <h2 class="h-section rule-accent" in:fade={{ duration: 300 }}>Projects</h2>
            <div class="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
                <a href="https://chopchopapp.com" class="group card card-hover p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5">
                    <div>
                        <h3 class="text-base font-semibold tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">ChopChop</h3>
                        <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">A recipe app that helps you cook at home. 100k+ downloads.</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        <span class="tag">Flutter</span>
                        <span class="tag">GraphQL</span>
                        <span class="tag">Firebase</span>
                    </div>
                </a>
                <a href="https://example.com" class="group card card-hover p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5">
                    <div>
                        <h3 class="text-base font-semibold tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Project 2</h3>
                        <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Description of project 2.</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        <span class="tag">Tech</span>
                        <span class="tag">Stack</span>
                    </div>
                </a>
            </div>
        </Container>
    </section>

    <!--Experience-->
        <section id="experience" class="section">
            <Container>
                <h2 class="h-section rule-accent" in:fade={{ duration: 300 }}>Experience</h2>
                <ol class="timeline mt-10">
                    {#each experience as e}
                        <TimeLineItem experience={e} />
                    {/each}
                </ol>
            </Container>
        </section>

    <!---Skills-->
    <section id="skills" class="section">
        <Container>
            <h2 class="h-section rule-accent" in:fade={{ duration: 300 }}>Skills</h2>
            <div class="mt-8 space-y-8">
                <div>
                    <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Frontend</h3>
                    <div class="mt-3 flex flex-wrap gap-2 text-sm">
                        <span class="tag">React</span>
                        <span class="tag">Vue</span>
                        <span class="tag">Svelte</span>
                    </div>
                </div>
                <div>
                    <h3 class="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Backend</h3>
                    <div class="mt-3 flex flex-wrap gap-2 text-sm">
                        <span class="tag">Node.js</span>
                        <span class="tag">Express</span>
                        <span class="tag">GraphQL</span>
                    </div>
                </div>
            </div>
        </Container>
    </section>

    <!--Writing-->
    <section id="writing" class="section">
        <Container>
            <h2 class="h-section rule-accent" in:fade={{ duration: 300 }}>Writing</h2>
            <div class="mt-8">
                <p class="text-neutral-600 dark:text-neutral-400 text-center">
                    Writing section coming soon...
                </p>
            </div>
        </Container>
    </section>

    <!--Contact-->
    <section id="contact" class="section">
        <Container>
            <h2 class="h-section rule-accent" in:fade={{ duration: 300 }}>Contact</h2>
            <div class="mt-8 text-center">
                <p class="text-neutral-600 dark:text-neutral-400 mb-6">
                    Get in touch with me
                </p>
                <div class="flex justify-center gap-4">
                    <a href={links.email} class="btn btn-primary">
                        Send Email
                    </a>
                    {#if links.linkedin}
                        <a href={links.linkedin} class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    {/if}
                </div>
            </div>
        </Container>
    </section>
</main>