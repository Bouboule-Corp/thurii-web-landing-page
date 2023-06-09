<script lang="ts">
  import Header from '$components/Header.svelte';
</script>

<section id="welcome">
    <Header />
    <img id="top-leaf" class="background_img" src="/img/top_leaf.svg" alt="Top Leaf" />
    <div class="content">
        <div>
            <h2>Nous sommes là pour apporter le meilleur de VOUS lors de vos sessions d'extérieures.</h2>
            <p>La version bêta arrive bientôt, restez à l'écoute !</p>
        </div>
        <button>Télécharger maintenant</button>
    </div>
    <img id="bottom-mockup" class="background_img" src="/img/mockup_map.svg" alt="Mockup iOS Application" />
</section>

<style>
    #top-leaf {
        top: 0;
        object-position: -2rem 0;
    }

    #bottom-mockup {
        bottom: 0;
        right: 0;
        object-position: 0 0;
        width: 44rem;
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

        /* Disable text selection */
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .content button:hover {
        opacity: .8;
    }

    @media (max-width: 1024px) {
        #bottom-mockup {
            width: 34rem;
        }
    }

    @media (max-width: 768px) {
        .background_img {
            width: 20rem;
        }

        #top-leaf {
            top: 1rem;
        }

        #bottom-mockup {
            bottom: 0;
            width: 24rem;
        }

        .content {
            height: 90%;
            padding-top: 4rem;
        }

        .content h2 {
            width: 100%;
            font-size: 1.4rem;
        }

        .content p {
            width: 100%;
            font-size: .8rem;
        }
    }
</style>
