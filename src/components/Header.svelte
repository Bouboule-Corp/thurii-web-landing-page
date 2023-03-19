<script>
    import navigation from "../navigation.json";
</script>

<header>
    <span class="title">thurii</span>
    <nav>
        <ul>
            {#each navigation as nav}
                {#if nav.disabled}
                    <li class="disabled">{nav.name}</li>
                {:else if nav.separator}
                    <span class="separator"></span>
                {:else}
                    <li><a href="{nav.path}">{nav.name}</a></li>
                {/if}
            {/each}
        </ul>
    </nav>
</header>

<style>
    @import "../styles/globals.css";

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: .4rem 3rem;
    }

    .title {
        font-family: 'Urbanist', sans-serif;
        font-size: 2rem;
        font-weight: var(--bold);
        letter-spacing: .02rem;
        color: var(--primary-default);
    }

    /* Navigation */
    nav ul {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 2rem;
        list-style: none;
    }

    nav li {
        position: relative;
        padding: .5rem 0rem;
        font-family: 'Urbanist', sans-serif;
        font-size: 1rem;
        font-weight: var(--semi-bold);
        letter-spacing: .02rem;
        color: var(--primary-default);
        opacity: .8;
    }
    nav li:before {
        content: "";
        position: absolute;
        bottom: .3rem;
        width: 0%;
        height: 2px;
        background-color: var(--primary-default);
        transition: 200ms ease-in-out;
    }
    nav li:hover {
        opacity: 1;
    }
    nav li:hover::before {
        width: 100%;
    }

    nav .separator {
        width: .08rem;
        height: 1.4rem;
        background-color: var(--text-default);
        opacity: .5;
    }

    nav li a {
        text-decoration: none;
    }

    nav li.disabled {
        color: var(--text-default);
        opacity: .5;
        cursor: default;
    }
    nav li.disabled:hover {
        opacity: .5;
    }
    nav li.disabled::before {
        display: none;
    }
</style>
