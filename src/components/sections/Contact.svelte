<script lang="ts">
  import sections from "../../sections.json";
  import toast, { Toaster } from "svelte-french-toast";

  let formElement;

  const onSubmit = (e: SubmitEvent) => {
    const formData = new FormData(e.target);
    const plainFormData = Object.fromEntries(formData.entries());
	  const bodyJsonData = JSON.stringify(plainFormData);

    fetch("https://api.thurii.fr/api/contact-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyJsonData
    })
    .then(() => {
      formElement.reset();
      toast.success("Formulaire de contact soumis avec succés.");
    })
    .catch((error) => {
      console.error(error)
      toast.error("Erreur rencontrée lors de la soumission du formulaire.")
    });
  }
</script>

<section id="contact">
    <img id="leaf" class="background_img" src="/img/leaf.svg" alt="Leaf" />
    <div class="content">
        <h2>{ sections.contact.title }</h2>
        <form on:submit|preventDefault={onSubmit} bind:this={formElement}>
            <div class="col">
                <div class="input">
                    <label for="name">
                        Votre nom
                        <span class="required">*</span>
                    </label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div class="input">
                    <label for="email">
                        Votre email
                        <span class="required">*</span>
                    </label>
                    <input type="email" id="email" name="email" placeholder="john.doe@exemple.fr" required />
                </div>
            </div>
            <div class="input">
                <label for="message">
                    Votre message
                    <span class="required">*</span>
                </label>
                <textarea name="message" rows="4" id="message" placeholder="Merci de nous indiquer le motif de votre demande de contact." required></textarea>
            </div>
            <button type="submit">Soumettre</button>
        </form>
    </div>
    <Toaster />
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
            display: none;
            /*top: -5rem;*/
            /*width: 18rem;*/
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
