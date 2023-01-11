const ContactUsPage = () => {
    return (
        <>

        <main>
            <h2>Contact Us!</h2>
            <p>Have a question? A suggestion? Want to Join the Downey Rose Float Association? Let us know!</p>

            <form action="mailto:chriscastillo15@hotmail.com" method="post" enctype="text/plain">
                <label for="name">Name: </label>
                <input type="text" id="name" required></input>
                <label for="subject">Subject: </label>
                <input type="text" id="text" required></input>
                <label for="message">Message:</label>
                <textarea type="text" id="message" rows="4" cols="50"></textarea>
                <input type="reset" value="Reset"></input>
                <input type="submit" value="Send"></input>
            </form>
        </main>

        </>
    );
}

export default ContactUsPage;  