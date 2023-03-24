<script lang="ts">
  import sections from "../../sections.json";
</script>

<section id="project">
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
        max-width: 38vw;
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
            padding: 0 4rem;
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

        .content img {
            max-width: 90%;
        }

        .content .text {
            height: 50%;
        }

        .content p {
            font-size: .8rem;
        }
    }
</style>
