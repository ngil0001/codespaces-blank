<script lang="ts">
  import Badge from "./Badge.svelte";
  import Container from "./Container.svelte";

  export let title: string = "I build clean, fast apps and data tools.";
  export let subtitle: string = "Solo developer behind ChopChop and a Business Intelligence Developer for a healthcare network. I design pragmatic systems: Mobile frontends, backends, and CI/CD that just work.";
  export let image: string = "/hero-image.jpg";
  export let showBadge: boolean = true;
  export let badgeText: string = "Available for new opportunities";
  export let primaryAction: { text: string; href: string; external?: boolean } | null = null;
  export let secondaryAction: { text: string; href: string; external?: boolean } | null = null;
  export let showImage: boolean = false; // allow hiding placeholder image
</script>

<section class="hero-shell section">
  <Container>
  <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh]">
      <!-- Content -->
      <div class="order-2 lg:order-1 animate-fade-in">
        {#if showBadge}
          <div class="mb-6">
            <Badge variant="primary" animated={true} dot={true}>
              {badgeText}
            </Badge>
          </div>
        {/if}

        <h1 class="ft-h1 font-bold text-neutral-900 dark:text-white mb-6 text-balance">
          {title}
        </h1>

        <p class="ft-lead text-neutral-600 dark:text-neutral-400 mb-8 text-balance max-w-xl">
          {subtitle}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          {#if primaryAction}
            <a
              href={primaryAction.href}
              class="btn btn-primary btn-lg"
              target={primaryAction.external ? '_blank' : undefined}
              rel={primaryAction.external ? 'noopener noreferrer' : undefined}
            >
              {primaryAction.text}
            </a>
          {/if}

          {#if secondaryAction}
            <a
              href={secondaryAction.href}
              class="btn btn-outline btn-lg"
              target={secondaryAction.external ? '_blank' : undefined}
              rel={secondaryAction.external ? 'noopener noreferrer' : undefined}
            >
              {secondaryAction.text}
            </a>
          {/if}
        </div>

        <slot />
      </div>

      <!-- Image -->
  {#if showImage}
  <div class="order-1 lg:order-2 animate-scale-in">
        <div class="relative">
          <div class="hero-image-container">
            <img
              src={image}
              alt="Featured work visual"
              class="hero-image"
              loading="eager"
            />
          </div>

          <!-- Decorative elements -->
          <div class="hero-decoration-1"></div>
          <div class="hero-decoration-2"></div>
        </div>
      </div>
  {/if}
    </div>
  </Container>
</section>

