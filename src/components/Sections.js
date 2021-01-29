export default function Sections(){
    return (
        <>
        <section className="secttion section--first"> 
            <img src="" alt="" className="section__image"/> 
            <h2 className="section__title">All your files in one secure location, accesible anywhere</h2>
            <p className="section__text">Fylo stores all your most important files in one secure location. 
            Acces them wherever you need, share and collaborate with friends, family, and co-workers</p>
            <button>Get Started</button>
        </section>    
        <section className="section section--second">
            <div className="cards">
                <div className="cards__item">
                    <img src="" alt="" className="cards__image"/>
                    <h2 className="cards__title">Access your files, anywhere</h2>
                    <p className="cards__text">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere</p>
                </div>
                <div className="cards__item">
                    <img src="" alt="" className="cards__image"/>
                    <h2 className="cards__title">Security you can trust</h2>
                    <p className="cards__text">2-factor authentication and user-controlled encryption are just a couple o the security features we allow to help secure your files</p>
                </div>
                <div className="cards__item">
                    <img src="" alt="" className="cards__image"/>
                    <h2 className="cards__title">Real-time collaboration</h2>
                    <p className="cards__text">Securely share files and folders with frinds, family and colleagues for live collaboration. No email attachments required</p>
                </div>
                <div className="cards__item">
                    <img src="" alt="" className="cards__image"/>
                    <h2 className="cards__title">Store any type of file</h2>
                    <p className="cards__text">Whether you're sharing holidays photos or work documents. Fylo has you covered allowing for all file types to be securely stored and shared</p>
                </div>
            </div>
        </section>
        <section className="section section--third">
            <img src="" alt="" className="section__image"/> 
            <h2 className="section__title">Stay productive, wherever you are </h2>
            <p className="section__text">
                Never let location be an issue when accessing your files, Fylo has you covered for all of your file storage needs.
                <br/> 
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required
            </p>
            <button>See how Fylo works</button>
        </section>
        </>
    )
}