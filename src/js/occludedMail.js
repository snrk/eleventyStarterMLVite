export default () => {
    const encEmail = "YmFyYmFyYS5wcm9naW5AZTJpLWV4cGVydGlzZXMuY2g=";
    const contactLink = document.getElementById("contact");
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        const emailAddress = window.atob(encEmail);
        const mailtoLink = "mailto:" + emailAddress;
        window.open(mailtoLink);
    });

}