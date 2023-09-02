<script lang="ts">
  import sections from "../../sections.json";
</script>

<section id="description">
    <div class="content">
        <div class="text">
            <h2>{ sections.description.title }</h2>
            <p>{@html sections.description.description }</p>
        </div>
        <img src="/img/mockup_trip.svg" alt="Mockup iOS Application">
    </div>
</section>

<style>
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
        max-width: 32vw;
    }

    .content .text {
        width: 38vw;
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
            display: none;
        }

        .content .text {
            height: auto;
        }

        .content p {
            font-size: .8rem;
        }
    }
</style>
