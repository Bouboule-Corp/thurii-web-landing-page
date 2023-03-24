<script lang="ts">
  import sections from "../../sections.json";
</script>

<section id="team">
    <img id="leaf-fruit" class="background_img" src="/img/leaf_fruit.svg" alt="Leaf with fruit" />
    <div class="content">
        <h2>{ sections.team.title }</h2>
        <div class="members">
            {#each sections.team.members as member}
                <div class="member">
                    <img src={member.img ? "/img/members/" + member.img : "/img/user.png"} alt="{member.name}" />
                    <div class="text">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    @import "../../styles/globals.css";

    #leaf-fruit {
        top: -10rem;
        right: 0;
        object-position: 4rem 0;
        width: 35rem;
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        column-gap: 8rem;
        padding: 0 6rem;
    }

    .content h2 {
        margin-bottom: 4rem;
        font-family: var(--font-title);
        font-weight: var(--semi-bold);
        font-size: 2rem;
        text-align: center;
        color: var(--primary-default);
    }

    .members {
        display: grid;
        grid-template-columns: repeat(3, minmax(25vw, 1fr));
        grid-gap: 2.5rem;
        justify-items: center;
        align-items: center;
    }

    .members .member {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1rem;
    }

    .member img {
        width: 16vw;
        height: 16vw;
        object-fit: cover;
        border-radius: .8rem;
    }

    .member .text {
        display: flex;
        flex-direction: column;
        align-self: baseline;
        row-gap: .2rem;
        padding: 0 .4rem;
    }

    .member .text h3 {
        font-family: var(--font-text);
        font-weight: var(--medium);
        font-size: 1rem;
    }

    .member .text p {
        font-family: var(--font-text);
        font-weight: var(--light);
        font-size: .8rem;
        font-style: italic;
    }

    @media (max-width: 1024px) {
        #leaf-fruit {
            top: -9rem;
            width: 28rem;
        }

        .members {
            grid-template-columns: repeat(2, minmax(15rem, 1fr));
        }

        .member img {
            width: 8rem;
            height: 8rem;
        }

        .member .text h3 {
            font-size: .8rem;
            text-align: center
        }

        .member .text p {
            font-size: .6rem;
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        #leaf-fruit {
            top: -6rem;
            object-position: 3rem 0;
            width: 18rem;
        }

        .members {
            grid-template-columns: repeat(2, minmax(8rem, 1fr));
        }

        .member img {
            width: 5rem;
            height: 5rem;
        }

        .member .text h3 {
            font-size: .8rem;
            text-align: center
        }

        .member .text p {
            font-size: .6rem;
            text-align: center;
        }
    }
</style>
