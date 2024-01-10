document.addEventListener("DOMContentLoaded", () => {
    const addContactForm = document.getElementById("contact-form");
    const [lastNameField, firstNameField, phoneNumberField] = document.querySelectorAll("input[placeholder^='Фамилия'], input[placeholder^='Имя'], input[placeholder^='Номер телефона']");
    const phoneBookTable = document.getElementById("phone-book-table").querySelector("tbody");

    addContactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newContact = document.createElement("tr");
        newContact.innerHTML = `
            <td>${lastNameField.value.trim()}</td>
            <td>${firstNameField.value.trim()}</td>
            <td>${phoneNumberField.value.trim()}</td>
            <td>
                <button class="btn btn-success me-1">Редактировать</button>
                <button class="btn btn-danger ms-1">Удалить</button>
            </td>
        `;

        const editBtn = newContact.querySelector(".btn-success");
        editBtn.addEventListener("click", handleEditClick);

        function handleEditClick() {
            const parentRow = this.parentNode.parentNode;
            const [lastNameCell, firstNameCell, phoneNumberCell] = parentRow.children;

            if (!this.classList.contains("editing")) {
                const lastNameInput = document.createElement("input");
                lastNameInput.value = lastNameCell.textContent.trim();
                const firstNameInput = document.createElement("input");
                firstNameInput.value = firstNameCell.textContent.trim();
                const phoneNumberInput = document.createElement("input");
                phoneNumberInput.value = phoneNumberCell.textContent.trim();
                phoneNumberInput.type = "number";

                lastNameCell.innerHTML = "";
                lastNameCell.appendChild(lastNameInput);
                firstNameCell.innerHTML = "";
                firstNameCell.appendChild(firstNameInput);
                phoneNumberCell.innerHTML = "";
                phoneNumberCell.appendChild(phoneNumberInput);

                this.textContent = "Сохранить";
                this.classList.add("editing");

                editBtn.removeEventListener("click", handleEditClick);

                this.addEventListener("click", function handleSaveClick() {
                    if (lastNameInput.value.trim() !== "" && firstNameInput.value.trim() !== "" && phoneNumberInput.value.trim() !== "") {
                        lastNameCell.textContent = lastNameInput.value.trim();
                        firstNameCell.textContent = firstNameInput.value.trim();
                        phoneNumberCell.textContent = phoneNumberInput.value.trim();

                        this.textContent = "Редактировать";
                        this.classList.remove("editing");
                    } else {
                        alert("Заполните все поля перед сохранением.");
                        return;
                    }

                    this.removeEventListener("click", handleSaveClick);

                    editBtn.addEventListener("click", handleEditClick);
                });
            } else {
                lastNameCell.textContent = lastNameInput.value.trim();
                firstNameCell.textContent = firstNameInput.value.trim();
                phoneNumberCell.textContent = phoneNumberInput.value.trim();

                this.textContent = "Редактировать";
                this.classList.remove("editing");

                editBtn.addEventListener("click", handleEditClick);
            }
        }

        const deleteBtn = newContact.querySelector(".btn-danger");
        deleteBtn.addEventListener("click", function () {
            const deleteConfirmationModal = new bootstrap.Modal(document.getElementById("delete-confirmation-modal"));
            const confirmationBtn = document.getElementById("confirmation-btn");
            confirmationBtn.addEventListener("click", () => {
                deleteConfirmationModal.hide();
                newContact.remove();
            });

            deleteConfirmationModal.show();
        });

        phoneBookTable.appendChild(newContact);

        addContactForm.reset();
    });
});