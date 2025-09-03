<script lang="ts">
  export let experience: {
    company: string;
    role: string;
    period: string;
    bullets: string[];
    current?: boolean;
    featured?: boolean;
  };

  export let showConnector: boolean = true;
  export let animated: boolean = true;
</script>

<li class="timeline-item animate-fade-in" role="listitem" aria-label={experience.role + ' at ' + experience.company}>
  {#if showConnector}
    <div class="timeline-connector" aria-hidden="true">
      <div class="timeline-dot" class:timeline-dot-current={experience.current}></div>
    </div>
  {/if}

  <div class="timeline-content card" class:timeline-featured={experience.featured} aria-describedby={experience.featured ? 'featured-'+experience.company.replace(/\s+/g,'-').toLowerCase() : undefined}>
    <div class="timeline-header flex flex-wrap items-start justify-between gap-4 mb-2">
      <div class="timeline-role">
        <h3 class="text-[15px] font-semibold text-neutral-900 dark:text-white mb-1 flex items-center gap-2">
          {experience.role}
          {#if experience.featured}
            <span id={'featured-'+experience.company.replace(/\s+/g,'-').toLowerCase()} class="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
              <svg class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Featured
            </span>
          {/if}
        </h3>
        <p class="text-[13px] text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
          {experience.company}
        </p>
      </div>

      <div class="timeline-period">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
          {experience.period}
        </span>
      </div>
    </div>

    {#if experience.bullets && experience.bullets.length > 0}
      <ul class="timeline-bullets space-y-1.5">
        {#each experience.bullets as bullet, index}
          <li
            class="timeline-bullet flex items-start gap-2.5 text-neutral-700 dark:text-neutral-300"
            class:animate-stagger-1={animated && index % 3 === 0}
            class:animate-stagger-2={animated && index % 3 === 1}
            class:animate-stagger-3={animated && index % 3 === 2}
          >
            <span class="timeline-bullet-icon flex-shrink-0 mt-0.5" aria-hidden="true">
              <svg class="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </span>
            <span class="text-[13px] leading-relaxed">{bullet}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</li>

