<script lang="ts">
  import sections from "../../sections.json";
</script>

<section>
    <div class="content">
        <img src="/img/mountains.svg" alt="Mountains">
        <div class="text">
            <h2>{ sections.project.title }</h2>
            <p>{@html sections.project.description }</p>
        </div>
    </div>
</section>

<style>
    @import "../../styles/globals.css";

    .content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 8rem;
        padding: 0 6rem;
    }

    .content img {
        width: 100%;
        max-width: 35rem;
    }

    .content .text {
        width: 35vw;
    }

    .content h2 {
        margin-bottom: 1rem;
        font-family: var(--font-title);
        font-weight: var(--semi-bold);
        font-size: 2rem;
        color: var(--primary-default);
    }

    .content p {
        width: 75%;
        font-family: var(--font-text);
        font-weight: var(--regular);
        font-size: 1rem;
    }
</style>
