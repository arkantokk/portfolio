import Header from "../components/Header"

const Contacts = () => {
    return (
        <>
            <Header />
            <h1>Contacts</h1>
            <main className="contacts">

                <section style={{ display: "flex", flexDirection: "column", gap: "25px", width: "100%" }}>
                     <h2>Davyd Stelmashchuk</h2>
                    <p>Email: arkantokbb@gmail.com</p>
                    <p>Phone: +47xxxxxxxx</p>
                    <p>LinkedIn: Url</p>
                    <p>GitHub: URL</p>
                </section>

            </main>
        </>
    )
}

export default Contacts