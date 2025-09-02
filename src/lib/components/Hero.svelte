<script>
	import Badge from "./Badge.svelte";

    export let title = "I build clean, fast apps and data tools.";
    export let subtitle = "Solo developer behind ChopChop and a Business Intelligence Developer for a healthcare network. I design pragmatic systems: Mobile frontends, backends, and CI/CD that just work.";
    export let image = "/hero-image.jpg";
</script>

<!--- Hero Section --->
<!--- Should be a card display with a available badge, Title, body paragraph, 3 buttons for resume, github, linkedin, contact and an image-->
<section class="hero">
    <div class="hero-content">
        <Badge />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <slot />
    </div>
    <div class="hero-image">
        <img src={image} alt="Hero image" />
    </div>
</section>
