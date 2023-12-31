<!-- <script lang="ts">
    import { onMount } from 'svelte';


    
// /** @type {import('./$types').PageLoad} */
//     export let data;

//     async function load({ page }) {
// 	console.log("world")
// 	console.log(page.params)
// 	const res = await fetch("http://localhost:8000/api/patchnotes/" + parseInt(params.id));
// 	const data = await res.json();
// 	const patchnote = data.data;

// 	if (patchnote) {
// 		return patchnote;
// 	}
// }
export let data
onMount(async function () {
        const id = 0
        const url = `http://localhost:8000/api/patchnotes/${id}`;
        const res = await fetch(url);
        const dataraw = await res.json();
        data = dataraw.data
    })
</script>



<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div> -->

<script>
	/** @type {import('./$types').PageData} */
	export let data;
    export const patchnote = data.patchnote
</script>

<section>
    <h2>Version {patchnote.version} - {patchnote.title}</h2>
    <p>{patchnote.description}</p>
    <h3>Features</h3>
    <ul>
        {#each patchnote.features as f}
            <li>
                <h4>{f.feature_name}</h4>
                <p>{f.feature_description}</p>
            </li>
        {/each}
    </ul>
</section>