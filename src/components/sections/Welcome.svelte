<script lang="ts">
  import Header from '$components/Header.svelte';
</script>

<section>
    <Header />
    <img id="top-leaf" class="background_img" src="/img/top_leaf.svg" alt="Top Leaf" />
    <div class="content">
        <div>
            <h2>We’re here to bring the best OF YOU during your outdoor sessions.</h2>
            <p>Beta version coming soon, stay tuned!</p>
        </div>
        <button>Download now</button>
    </div>
    <img id="bottom-leaf" class="background_img" src="/img/bottom_leaf.svg" alt="Bottom Leaf" />
</section>

<style>
    @import "../../styles/globals.css";

    #top-leaf {
        top: 0;
        left: -1rem;
    }

    #bottom-leaf {
        bottom: -6rem;
        right: -1rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 1.6rem;
        width: 100%;
        height: 90%;
        padding: 0 1rem;
    }

    .content h2 {
        width: 45rem;
        margin-bottom: 1rem;
        font-family: var(--font-title);
        font-weight: var(--black);
        font-size: 2rem;
        text-align: center;
        color: var(--primary-default);
        text-transform: uppercase;
    }

    .content p {
        font-family: var(--font-title);
        font-weight: var(--semi-bold);
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
    }

    .content button {
        padding: .8rem 2rem;
        font-family: var(--font-text);
        font-weight: var(--semi-bold);
        font-size: .9rem;
        background-color: var(--primary-default);
        color: #FFF;
        border: none;
        border-radius: 2rem;
    }
    .content button:hover {
        opacity: .8;
    }

    @media (max-width: 768px) {
        .background_img {
            width: 20rem;
        }

        #top-leaf {
            top: 4rem;
        }

        #bottom-leaf {
            bottom: 0;
        }

        .content {
            height: 90%;
            padding-top: 4rem;
        }

        .content h2 {
            width: 100%;
            font-size: 1.6rem;
        }

        .content p {
            width: 100%;
            font-size: .8rem;
        }
    }
</style>
