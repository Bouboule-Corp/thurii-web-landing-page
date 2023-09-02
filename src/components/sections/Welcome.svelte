<script lang="ts">
  import Header from '$components/Header.svelte';
  import sections from "../../sections.json";
</script>

<section id="welcome">
    <Header />
    <img id="top-leaf" class="background_img" src="/img/top_leaf.svg" alt="Top Leaf" />
    <div class="content">
        <div>
            <h2>{ sections.welcome.title }</h2>
            <p>{@html sections.welcome.description }</p>
        </div>
        <div class="badges">
            <div id="google-play">
                <a href={ sections.welcome.badges.googlePlayLink } target="_blank">
                    <img src="/img/google-play-badge.png" alt="Google Play Store" />
                </a>
                <span>Google Play et le logo Google Play sont des marques de Google LLC.</span>
            </div>
        </div>
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

    .content .badges {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 1rem;
    }

    .content #google-play {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content #google-play img {
        width: 8rem;
    }
    .content #google-play span {
        font-family: var(--font-text);
        font-size: .5rem;
        font-style: italic;
        text-align: center;
        width: 8rem;
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

    @media (max-width: 375px) {
        .background_img {
            width: 15rem;
        }

        #bottom-mockup {
            width: 18rem;
        }

        .content {
            padding-top: 1rem;
            row-gap: .8rem;
        }

        .content h2 {
            font-size: 1.2rem;
        }

        .content p {
            font-size: .6rem;
        }
    }
</style>
