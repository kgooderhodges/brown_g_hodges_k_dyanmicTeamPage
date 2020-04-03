(() => {
    let members = document.querySelectorAll(".designDiv .effect"),
        extension = document.querySelector(".extension"),
        grid = document.querySelector(".teamCon");

    //console.log(members);

    function highlightMember() {
        if (extension.children.length > 0) {
            toggleHighlight();
        }

        this.classList.remove("effect-view");
        this.classList.add("currentMember");

        extension.appendChild(this);

        let memberInfo = this.querySelector(".frost");
        memberInfo.classList.add("currentInfo");

        grid.appendChild(memberInfo);
    }

    function toggleHighlight() {
        let currentMember = document.querySelector(".currentMember");
        let designDiv = document.querySelector(".designDiv");
        let currentInfo = document.querySelector(".currentInfo");

        currentMember.classList.add("effect-view");
        currentMember.appendChild(currentInfo);

        console.log(currentMember);
        console.log(currentInfo);

        designDiv.appendChild(currentMember);

        currentMember.classList.remove("currentMember");
        currentInfo.classList.remove("currentInfo");
    }

    members.forEach(member => member.addEventListener("click", highlightMember));
})();
/*     const memberInfo = [
    [
      "Gavin",
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure debitis repellat, aperiam saepe dicta quidem accusamus. Commodi pariatur recusandae cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure debitis repellat, aperiam saepe dicta quidem accusamus. Commodi pariatur recusandae cupiditate.`
    ],
    [
      "Katie",
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure debitis repellat, aperiam saepe dicta quidem accusamus. Commodi pariatur recusandae cupiditate.`
    ]
  ]; */
