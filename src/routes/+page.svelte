<script type="ts">
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="card w-96 bg-base-100 shadow-xl">
		<figure>
			<img
				src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
				alt="Shoes"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">Shoes!</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
	</div>

	<button class="btn">Button</button>
	<button class="btn btn-neutral">Neutral</button>
	<button class="btn btn-primary">Primary</button>
	<button class="btn btn-secondary">Secondary</button>
	<button class="btn btn-accent">Accent</button>
	<button class="btn btn-ghost">Ghost</button>
	<button class="btn btn-link">Link</button>
</section>

<style>
</style>
