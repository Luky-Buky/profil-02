fetch("profile.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Chyba při načítání JSON souboru.");
    }
    return response.json();
  })
  .then(data => {
    // Jméno
    const nameElement = document.querySelector("#name");
    nameElement.textContent = data.name;

    // Skills
    const skillsList = document.querySelector("#skills");
    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Interests
    const interestsSection = document.querySelector("#interests");
    data.interests.forEach(interest => {
      const p = document.createElement("p");
      p.textContent = interest;
      interestsSection.appendChild(p);
    });

    // Projects (bonus)
    const projectsSection = document.querySelector("#projects");
    data.projects.forEach(project => {
      const div = document.createElement("div");

      const title = document.createElement("h3");
      title.textContent = project.title;

      const description = document.createElement("p");
      description.textContent = project.description;

      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = "Zobrazit projekt";
      link.target = "_blank";

      div.appendChild(title);
      div.appendChild(description);
      div.appendChild(link);

      projectsSection.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Nastala chyba:", error);
    document.body.innerHTML += "<p style='color:red;'>Nepodařilo se načíst data.</p>";
  });