
<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { links } from "$lib/data/links";
	import { fade, fly } from "svelte/transition";


</script>

<main class="space-y-24 py-12">
    <!---<Hero />--->
    <section id="about" class="section">
        <Container>
            <div class="aurora-bg card p-8 md:p-12 lg:p-16">
                <div in:fade={{ duration: 300}} class="inline-flex items-center gap-2 badge">Available for new roles</div>
                <h1 in:fly={{ y: 100, duration: 300 }} class="text-4xl font-bold">I build clean, fast, reliable mobile apps</h1>
                <p class="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl" in:fade={{ delay: 100 }}>Solo dev behind <strong>ChopChop</strong> and a former BI developer in healthcare. I design pragmatic systems: mobile frontends, GraphQL backends, and CI/CD that actually ship.</p>
                <div class="mt-6 flex flex-wrap gap-3" in:fade={{ delay: 150 }}>
                    <a href={links.resume} class="btn-primary">⬇️ Download résumé</a>
                    <a href={links.github} class="btn-outline">GitHub</a>
                    <a href={links.linkedin} class="btn-outline">LinkedIn</a>
                </div>
            </div>
        </Container>
    </section>

    <!--Projects-->
    <section id="projects" class="section">
        <Container>
            <h2 class="section-title">Projects</h2>
            <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a href="https://chopchopapp.com" class="group card p-6 hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-colors">ChopChop</h3>
                    <p class="mt-2 text-neutral-700 dark:text-neutral-300">A recipe app that helps you cook at home. 100k+ downloads.</p>
                </a>
                <a href="https://example.com" class="group card p-6 hover:shadow-lg transition-shadow">
                    <h3 class="text-xl font-semibold group-hover:text-blue-500 transition-colors">Project 2</h3>
                    <p class="mt-2 text-neutral-700 dark:text-neutral-300">Description of project 2.</p>
                </a>
            </div>
        </Container>
    </section>

    <!--Experience-->
    <section id="experience" class="section">
        <Container>

        </Container>
    </section>

    <!---Skills-->
    <section id="skills" class="section">
        <Container>
            <h2 class="section-title">Skills</h2>
            <div class="mt-12 grid grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-semibold">Frontend</h3>
                    <ul class="mt-2 list-disc list-inside text-neutral-700 dark:text-neutral-300">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Svelte</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold">Backend</h3>
                    <ul class="mt-2 list-disc list-inside text-neutral-700 dark:text-neutral-300">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
</main>