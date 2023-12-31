<script lang="ts">
    import sections from "../../sections.json";
    import { onMount } from "svelte";

    export let patchnotes: Array<Object> = [];
    const nbPatch = 3;
    onMount(async function () {
        const res = await fetch(
            "http://localhost:8000/api/patchnotes?nbPatch=" + nbPatch,
        );
        const data = await res.json();
        patchnotes = data.data;
    });
</script>

<section id="patchnote">
    <div class="content">
        <div class="text">
            <h2>{sections.patchnote.title}</h2>
            <!-- <p>{@html sections.patchnote.description }</p> -->
        </div>
        <ul>
            {#each patchnotes as p}
                <a href={"/patchnotes/" + p.id}>
                    <li>
                        <h3>Version {p.n_version} - {p.title}</h3>
                        <p>{p.description}</p>
                    </li>
                </a>
            {/each}
        </ul>
        <a href="/patchnotes">
            voir plus...
        </a>
    </div>
</section>

<style>
    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 6rem;
    }

    .content .text {
        width: 28vw;
    }

    .content h2 {
        margin-bottom: 1rem;
        font-family: var(--font-title);
        font-weight: var(--semi-bold);
        font-size: 2rem;
        color: var(--primary-default);
    }

    .content p {
        font-family: var(--font-text);
        font-weight: var(--regular);
        font-size: 1rem;
    }

    @media (max-width: 1024px) {
        .content {
            padding: 0 2rem;
        }

        .content .text {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            row-gap: 0;
            padding: 0 2rem;
        }

        .content ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 2rem;
            margin-top: 2rem;
            font-family: var(--font-text);
        }

        .content ul li {
            display: flex;
            column-gap: 0.6rem;
            list-style: none;
        }

        .content .text {
            height: 50%;
        }

        .content p {
            font-size: 0.8rem;
        }
    }
</style>
