<script lang="ts">
    import Welcome from '$components/sections/Welcome.svelte';
    import Project from '../components/sections/Project.svelte';
    import Description from '../components/sections/Description.svelte';
    import Timeline from '../components/sections/Timeline.svelte';
    import Team from '../components/sections/Team.svelte';
    import Contact from '../components/sections/Contact.svelte';
</script>

<div>
    <div class="Page">
        <Welcome />
        <Project />
        <Description />
        <Timeline />
        <Team />
        <Contact />
    </div>
    <div class="Landscape">
        <h1>This website was only visible on screen with a height of 500px or more.</h1>
    </div>
</div>

<style>
    .Landscape {
        display: none;
    }

    @media only screen and (max-height: 500px) and (orientation: landscape) {
        .Page {
            display: none;
        }

        .Landscape {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .Landscape h1 {
            font-size: 1.2rem;
            text-align: center;
        }
    }
</style>
