<script lang="ts">
  import sections from "../../sections.json";
</script>

<section id="timeline">
    <img id="leaf" class="background_img" src="/img/leaf.svg" alt="Leaf" />
    <div class="content">
        <div class="text">
            <h2>{ sections.timeline.title }</h2>
        </div>
        <img src="/img/timeline.png" alt="Timeline">
        <ul>
          {#each sections.timeline.milestones as milestone (milestone.date)}
            <li>
                <span class="date">{milestone.date} :</span>
                <p class="title">{milestone.title}</p>
            </li>
          {/each}
          <li></li>
        </ul>
    </div>
</section>

<style>
    #leaf {
        top: -10rem;
        object-position: -6rem 0;
        transform: rotate(-30deg);
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 6rem;
    }

    .content h2 {
        margin-bottom: 1rem;
        font-family: var(--font-title);
        font-weight: var(--semi-bold);
        font-size: 2rem;
        color: var(--primary-default);
    }

    .content img {
        width: 100%;
    }

    .content ul {
      display: none;
    }

    @media (max-width: 1024px) {
        .content {
            padding: 0 2rem;
        }
    }

    @media (max-width: 768px) {
        #leaf {
            width: 22rem;
            object-position: -6rem 0;
        }

        .content img {
            display: none;
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
            column-gap: .6rem;
            list-style: none;
        }
        .content ul li .date {
          font-weight: var(--semi-bold);
          color: var(--primary-default);
        }
        .content ul li .title {
          font-weight: var(--light);
        }
    }
</style>
