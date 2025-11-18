

function affichageHeure(){
    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let day = date.getDay()
    let numberDay = date.getDate()
    let month = date.getMonth()

    // console.log("date "+date)
    // console.log("heure "+hour)
    // console.log("min "+min)
    // console.log("sec "+sec)
    // console.log("day "+jours[day])
    // console.log("month "+month)
    // console.log("number Day "+numberDay)


    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0'+min : min;
    sec = sec < 10 ? '0' + sec : sec

    const clock = hour + ":" +min + ":" + sec
    const dateDay = jours[day] + " "+ numberDay + " " + mois[month]

    // console.log("clock"+ clock)
    const heure = document.getElementById("heure")
    heure.innerText = clock

    const dateJour = document.getElementById("dateJour")
    dateJour.innerText = dateDay
}

setInterval(() => {affichageHeure(); }, 1000)

// affichageHeure()

function deleteTask(button) {
    const taskElement = button.closest('.task');
    const taskId = taskElement.getAttribute('data-task-id');
    
    fetch(`/delete-task/${taskId}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            taskElement.remove();  // Suppression de l'élément DOM après suppression réussie
        }
    }).catch(error => console.error('Erreur lors de la suppression de la tâche :', error));
}
function deleteCourse(button) {
    const courseElement = button.closest('.purchase-item');
    const courseId = courseElement.getAttribute('data-course-id');
    
    fetch(`/delete-course/${courseId}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            courseElement.remove();
        }
    }).catch(error => console.error('Erreur lors de la suppression de la course :', error));
}

function modifyCourse(button) {
    const courseEl = button.closest('.purchase-item');
    const courseId = courseEl.getAttribute('data-course-id');

    const container = courseEl.querySelector('.course-container');
    const oldName = container.querySelector('.course').innerText;

    container.innerHTML = `
        <label>Course :</label>
        <input type="text" id="edit-course-name" value="${oldName}">

        <button onclick="saveModifyCourse('${courseId}', this)" class="button-submit">Enregistrer</button>
        <button onclick="cancelModifyCourse('${oldName}', '${courseId}', this)" class="button-delete">Annuler</button>
    `;
}
// ---------

// function modifyCourse(button) {
//     const courseEl = button.closest('.purchase-item');
//     const courseId = courseEl.getAttribute('data-course-id');
//     const oldName = courseEl.querySelector('.course').innerText;

//     courseEl.innerHTML = `
//         <label>Course :</label>
//         <input type="text" id="edit-course-name" value="${oldName}">
//         <button onclick="saveModifyCourse('${courseId}', this)" class="button-submit">Enregistrer</button>
//         <button onclick="cancelModifyCourse('${oldName}', '${courseId}', this)" class="button-delete">Annuler</button>
//     `;
// }

// function saveModifyCourse(courseId, button) {
//     const courseEl = button.closest('.purchase-item');
//     const input = courseEl.querySelector('#edit-course-name');

//     const data = { name: input.value };

//     fetch(`/modify-course/${courseId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(updated => {
//         // mettre à jour le HTML directement
//         courseEl.innerHTML = `
//             <h3 class="course">${updated.name}</h3>
//             <button type="button" onclick="modifyCourse(this)" class="button-submit">Modifier</button>
//             <button type="button" onclick="deleteCourse(this)" class="button-delete">Supprimer</button>
//         `;
//     })
//     .catch(err => console.error(err));
// }
// ---------

// function modifyCourse(button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     const oldName = container.querySelector('.course').innerText;

//     container.innerHTML = `
//         <input type="text" id="edit-course-name" value="${oldName}" />
//         <button onclick="saveModifyCourse('${courseEl.dataset.courseId}', this)" 
//     `;
// }

// function saveModifyCourse(courseId, button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     const input = container.querySelector('#edit-course-name');
//     const newName = input.value;

//     fetch(`/modify-course/${courseId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: newName })
//     })
//     .then(res => res.json())
//     .then(updated => {
//         container.innerHTML = `<h3 class="course">${updated.name}</h3>`;
//     })
//     .catch(err => console.error(err));
// }
// function modifyCourse(button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     const oldName = container.querySelector('.course').innerText;

//     container.innerHTML = `
//         <input type="text" id="edit-course-name" value="${oldName}" />
//         <button onclick="saveModifyCourse('${courseEl.dataset.courseId}', this)" class="button-submit">Enregistrer</button>
//     `;
// }

// function saveModifyCourse(courseId, button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     const input = container.querySelector('#edit-course-name');
//     const newName = input.value;

//     fetch(`/modify-course/${courseId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: newName })
//     })
//     .then(res => res.json())
//     .then(updated => {
//         container.innerHTML = `<h3 class="course">${updated.name}</h3>`;
//     })
//     .catch(err => console.error(err));
// }

// function modifyCourse(button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     const oldName = container.querySelector('.course').innerText;

//     // Remplacer le contenu par un input pour éditer
//     container.innerHTML = `
//         <input type="text" id="edit-course-name" value="${oldName}" />
//         <button onclick="saveModifyCourse('${courseEl.dataset.courseId}', this)" class="button-submit">Enregistrer</button>
//     `;
// }

// function saveModifyCourse(courseId, button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     const input = container.querySelector('#edit-course-name');
//     const newName = input.value;

//     fetch(`/modify-course/${courseId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: newName })
//     })
//     .then(res => res.json())
//     .then(updated => {
//         // Mettre à jour le HTML avec le nouveau nom et les boutons
//         container.innerHTML = `
//             <h3 class="course">${updated.name}</h3>
//             <div class="course-buttons">
//                 <button type="button" onclick="modifyCourse(this)" class="button-submit">Modifier</button>
//                 <button type="button" onclick="deleteCourse(this)" class="button-delete">Supprimer</button>
//             </div>
//         `;
//     })
//     .catch(err => console.error('Erreur lors de la mise à jour de la course :', err));
// }
function modifyCourse(button) {
    const courseEl = button.closest('.purchase-item');
    const oldNameEl = courseEl.querySelector('.course'); // directement
    const oldName = oldNameEl.innerText;

    courseEl.innerHTML = `
        <input type="text" id="edit-course-name" value="${oldName}" />
        <button onclick="saveModifyCourse('${courseEl.dataset.courseId}', this)" class="button-submit">Enregistrer</button>
    `;
}

function saveModifyCourse(courseId, button) {
    const courseEl = button.closest('.purchase-item');
    const input = courseEl.querySelector('#edit-course-name');
    const newName = input.value;

    fetch(`/modify-course/${courseId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
    })
    .then(res => res.json())
    .then(updated => {
        courseEl.innerHTML = `
            <h3 class="course">${updated.name}</h3>
            <button type="button" onclick="modifyCourse(this)" class="button-modify">Modifier</button>
            <button type="button" onclick="deleteCourse(this)" class="button-delete">Supprimer</button>
        `;
    })
    .catch(err => console.error(err));
}


// function cancelModifyCourse(oldName, button) {
//     const courseEl = button.closest('.purchase-item');
//     const container = courseEl.querySelector('.course-container');
//     container.innerHTML = `<h3 class="course">${oldName}</h3>`;
// }


function deletePhrase(button) {
    const phraseElement = button.closest('.purchase-item');
    const phraseId = phraseElement.getAttribute('data-phrase-id');
    
    fetch(`/delete-phrase/${phraseId}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            phraseElement.remove();
        }
    }).catch(error => console.error('Erreur lors de la suppression de la phrase :', error));
}