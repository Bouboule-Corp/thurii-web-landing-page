/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const res = await fetch(`http://localhost:8000/api/patchnotes/${params.id}`);
    const dataraw = await res.json();
    return {
        patchnote: {
            version: dataraw.data.n_version,
            title: dataraw.data.title,
            description: dataraw.data.description,
            features: dataraw.data.features
        }
    };
}