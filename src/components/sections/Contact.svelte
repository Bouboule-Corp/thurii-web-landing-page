<script lang="ts">
  import sections from "../../sections.json";
</script>

<section id="contact">
    <img id="leaf" class="background_img" src="/img/leaf.svg" alt="Leaf" />
    <div class="content">
        <h2>{ sections.contact.title }</h2>
        <form action="#" method="POST">
            <div class="col">
                <div class="input">
                    <label for="name">
                        Your name
                        <span class="required">*</span>
                    </label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div class="input">
                    <label for="email">
                        Your email
                        <span class="required">*</span>
                    </label>
                    <input type="email" id="email" name="email" placeholder="john.doe@example.com" required />
                </div>
            </div>
            <div class="input">
                <label for="message">
                    Your message
                    <span class="required">*</span>
                </label>
                <textarea name="message" rows="4" id="message" placeholder="Please let us know the reason for your contact request." required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>

<style>
    #leaf {
        top: 4rem;
        object-position: -2rem 0;
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

    form {
        width: 60%;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }

    form .col {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        column-gap: 1.8rem;
    }

    form .col > div {
        width: 100%;
    }

    form .input {
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
    }

    form label {
        font-family: var(--font-text);
        font-weight: var(--medium);
        font-size: 1rem;
    }

    form .required {
        color: red;
    }

    form input,
    form textarea {
        padding: 0.6rem 1rem;
        border: none;
        border-radius: 0.4rem;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    }

    form textarea {
        max-height: 25vh;
        resize: vertical;
    }

    form button {
        width: 18rem;
        padding: .8rem 2rem;
        font-family: var(--font-text);
        font-weight: var(--semi-bold);
        font-size: .9rem;
        background-color: var(--primary-default);
        color: #FFF;
        border: none;
        border-radius: .7rem;

        /* Disable text selection */
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (max-width: 1024px) {
        #leaf {
            top: 2rem;
            width: 22rem;
        }

        form {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        #leaf {
            top: -5rem;
            width: 18rem;
        }

        .content {
            padding: 0 2rem;
        }

        form {
            row-gap: 1.4rem;
        }

        form .col {
            flex-direction: column;
            row-gap: 1.4rem;
        }

        form textarea {
            max-height: 15vh;
        }

        form button {
            width: 100%;
        }
    }
</style>
