export default function Projects(){
    return(
        <section id="projects" className="flex flex-col justify-center items-center text-slate-50">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-xl">Here are some of my projects:</p>
            <ul className="flex flex-col items-center w-15/16">
                <li className="text-center"><a className="text-xl underline" href="https://final-project-630f3.web.app">WishLily</a>
                <p className="text-xl">WishLily is a full-stack application that allows users to create and share wishlists with friends and family. It was built using React, Next.js, Express, PostGreSQL, Node, Firebase, and Tailwind CSS.</p>
                </li>
            </ul>
        </section>
    )
}