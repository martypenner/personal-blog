<script>
	import {
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		REPO_URL,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import FeatureCard from '../components/FeatureCard.svelte';
	export const prerender = true; // index page is most visited, lets prerender
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
			<h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
				This is

				<span
					class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"
				>
					<span class="relative skew-y-3 text-yellow-400">{SITE_TITLE}</span>
				</span>
				!
			</h1>
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				Because keystrokes shared publicly are not wasted.
			</h2>
			<p class="mb-16 text-gray-600 dark:text-gray-400">
				<a href={REPO_URL}>View source here!</a>
			</p>
		</div>

		<img
			class="relative mb-8 mr-auto rounded-full bg-cyan-300 bg-opacity-25 sm:mb-0 sm:h-[176px] sm:w-[176px]"
			src="/assets/profile-pic.jpg"
			alt="headshot of me against a light brick wall"
		/>
	</div>

	<section class="mb-16 w-full">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Featured Posts
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
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
			<FeatureCard
				title="Manipulating SVGs with CSS"
				href="/manipulating-svg-with-css"
				stringData="Mar 2019"
			/>
		</div>
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
