<script>
	import {
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';

	/** @type {import('./$types').PageData} */
	export let data;

	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items.slice(0, 10);
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<div class="flex flex-col pr-8">
			<h1 class="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
				<span
					class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"
				>
					<span class="relative skew-y-3 text-yellow-400">{SITE_TITLE}!</span>
				</span>
			</h1>
			<h2 class="mb-6 text-gray-700 dark:text-gray-200">
				Because keystrokes shared publicly are not wasted.
			</h2>
			<p class="mb-16 flex flex-col text-gray-600 dark:text-gray-400">
				<a class="text-gray-600 dark:text-gray-400 mb-2" sveltekit:prefetch href="/about"
					>More about me</a>
				<a
					class="text-gray-600 dark:text-gray-400"
					sveltekit:prefetch
					href="https://marketplace.visualstudio.com/items?itemName=MartyPenner.vscode-css-autocomplete"
				>
					Looking for my VSCode extension called "CSS to Go"?
				</a>
			</p>
		</div>

		<img
			class="relative mx-auto mb-8 h-48 w-48 rounded-full bg-cyan-300 bg-opacity-25 sm:mb-0 sm:mr-auto sm:h-[170px] sm:w-[170px] md:h-[140px] md:w-[140px]"
			src="/assets/profile-pic.jpg"
			alt="headshot of me against a light brick wall"
		/>
	</div>

	<section class="mb-16 w-full">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Latest Posts
		</h3>
		<ul class="text-white">
			{#each items as item (item.slug)}
				<li>
					<a sveltekit:prefetch href={item.slug}>{item.title}</a>
					<span class="text-xs text-black dark:text-gray-400"
						>{new Date(item.date).toISOString().slice(0, 10)}</span
					>
				</li>
			{/each}
		</ul>

		<!-- <div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard
				title="Getting Tauri working in WSL"
				href="/getting-tauri-working-in-wsl"
				stringData="Oct 2022"
			/>
			<FeatureCard
				title="Sharing music with friends using fly.io, Azuracast, and Mopidy"
				href="/sharing-music-with-friends"
				stringData="Sept 2022"
			/>
			<FeatureCard
				title="Using NVM to enforce node versions"
				href="/using-nvm-to-enforce-node-versions"
				stringData="Feb 2020"
			/>
		</div> -->
		<a
			class="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200"
			href="/blog"
			>See all posts<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="ml-1 h-6 w-6"
				><path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
				/></svg
			></a
		>
	</section>
</div>
