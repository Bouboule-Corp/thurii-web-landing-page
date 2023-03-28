<script lang="ts">
    import navigation from "../navigation.json";

    function handleAnchorClick (event) {
      event.preventDefault();

      const link = event.currentTarget;
      const anchorId = new URL(link.href).hash.replace('#', '');
      const anchor = document.getElementById(anchorId);

      if (!anchor) {
        return;
      }
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      handleMobileNav(false);
    }

    let mobileNav = false;

    function handleMobileNav(status: boolean = false) {
      mobileNav = status;
      document.body.className = status ? 'mobile' : '';
    }
</script>

<header>
    <span class="title">thurii</span>
    <div class="menu-toggle {mobileNav ? 'open' : ''}" on:click={() => handleMobileNav(!mobileNav)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav class="{mobileNav ? 'mobile' : ''}">
        <span class="title">thurii</span>
        <ul>
            {#each navigation as nav}
                {#if nav.disabled}
                    <li class="disabled">{nav.name}</li>
                {:else if nav.separator}
                    <span class="separator"></span>
                {:else}
                    <li>
                        <a href="{nav.path}" on:click={handleAnchorClick}>
                            {nav.name}
                        </a>
                    </li>
                {/if}
            {/each}
        </ul>
    </nav>
</header>

<style>
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

        /* Disable text selection */
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        row-gap: .15rem;
        width: 1.5rem;
        cursor: pointer;
    }

    .menu-toggle span {
        width: 100%;
        height: .2rem;
        background-color: var(--primary-default);
        transition: 200ms ease-in-out;
    }
    .menu-toggle span:nth-child(1) {
        transform: translateY(-.2rem);
    }
    .menu-toggle span:nth-child(3) {
        transform: translateY(.2rem);
    }

    /* Navigation */
    nav .title {
        display: none;
    }

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

    @media (max-width: 768px) {
        header {
            padding: .4rem 1rem;
        }

        .menu-toggle {
            display: flex;
        }

        .menu-toggle.open {
            row-gap: 0;
        }

        .menu-toggle.open span:nth-child(1) {
            transform: translateY(.2rem) rotate(45deg);
        }

        .menu-toggle.open span:nth-child(2) {
            display: none;
        }

        .menu-toggle.open span:nth-child(3) {
            transform: translateY(0) rotate(-45deg);
        }

        nav {
            display: none;
        }

        nav.mobile {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 80%;
            height: 100%;
            background-color: var(--background-default);
            box-shadow: 0 0 10px rgba(0, 0, 0, .2);
            transition: 200ms ease-in-out;
        }

        nav.mobile .title {
            display: flex;
            justify-content: center;
            padding: 1rem 0rem;
        }

        nav.mobile ul {
            flex-direction: column;
            row-gap: 2rem;
            padding: 2rem 0rem;
        }

        nav.mobile .separator {
            height: .08rem;
            width: 10%;
            background-color: var(--text-default);
            opacity: .5;
        }
    }
</style>
