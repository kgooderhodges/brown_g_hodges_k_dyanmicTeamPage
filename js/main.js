(() => {
    let members = document.querySelectorAll(".designDiv .effect"),
        extension = document.querySelector(".extension");

    //array for members description
    const memberDesc = [
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        "As the main workhorse of the Dev Team, Gavin tackles all those pesky 'parameter 1 is undefined' errors. When click and things do stuff, thats his handywork. Remember to hug you Dev friends when you get the chance because they are probably very frustrated at any given time",
        "The Development Supervisor keeps a very watchful eye on the workers. Caya makes sure they pay attention to their work, or her; whichever the situation calls for. She doesnt hestitate to take over at the keyboard and type her own version of code. "
    ];

    function highlightMember() {
        if (extension.children.length > 0) {
            extension.innerHTML = "";
        }
        //get elements for altering
        let memberPick = this.cloneNode(true);
        let memberInfo = memberPick.querySelector(".frost");
        let memberText = memberInfo.querySelector("p");

        console.log(memberPick.id);

        //change the css styling on them
        memberPick.classList.remove("effect-view", "effect");
        memberPick.classList.add("currentMember");
        memberInfo.classList.add("currentInfo");

        // Image Change to color
        let newImage = memberPick.querySelector("img");
        let imageSource = `images/${this.id}Color.jpg`;
        newImage.src = imageSource;

        console.log(newImage);

        //move cloned nodes into place
        extension.appendChild(memberPick);
        extension.appendChild(memberInfo);

        console.log(memberText);

        memberText.textContent = `${memberDesc[this.dataset.index]}`;
    }

    // listen for clicks on each member picture
    members.forEach(member => member.addEventListener("click", highlightMember));
})();
