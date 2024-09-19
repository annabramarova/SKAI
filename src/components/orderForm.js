import "../styles/orderForm.css";

export function createOrderForm() {
  const form = document.createElement("form");
  form.className = "orderForm";
  form.autocomplete = "off";
  form.setAttribute("novalidate", true);

  // Create Address input
  const addressGroup = document.createElement("div");
  addressGroup.className = "formGroup";
  const addressLabel = document.createElement("label");
  addressLabel.textContent = "Address";
  addressLabel.setAttribute("for", "address");
  const addressInput = document.createElement("input");
  addressInput.id = "address";
  addressInput.name = "address";
  addressInput.type = "text";
  addressInput.placeholder = "Enter your address";
  addressInput.required = true;

  // Add link to open map modal
  const mapLink = document.createElement("button");
  mapLink.type = "button";
  mapLink.className = "mapLink";
  mapLink.textContent = "View Map";
  mapLink.addEventListener("click", () => {
    openMapModal("40.748817,-73.985428"); // Replace with your coordinates
  });

  addressGroup.appendChild(addressLabel);
  addressGroup.appendChild(addressInput);
  addressGroup.appendChild(mapLink);

  // Create Duration input
  const durationGroup = document.createElement("div");
  durationGroup.className = "formGroup";
  const durationLabel = document.createElement("label");
  durationLabel.textContent = "Duration";
  durationLabel.setAttribute("for", "duration");
  const durationInput = document.createElement("input");
  durationInput.id = "duration";
  durationInput.name = "duration";
  durationInput.type = "text";
  durationInput.placeholder = "Enter duration";
  durationInput.required = true;
  durationGroup.appendChild(durationLabel);
  durationGroup.appendChild(durationInput);

  // Create Date & Time input
  const dateTimeGroup = document.createElement("div");
  dateTimeGroup.className = "formGroup";
  const dateTimeLabel = document.createElement("label");
  dateTimeLabel.textContent = "Date & Time";
  dateTimeLabel.setAttribute("for", "dateTime");
  const dateTimeInput = document.createElement("input");
  dateTimeInput.id = "dateTime";
  dateTimeInput.name = "dateTime";
  dateTimeInput.type = "datetime-local";
  dateTimeInput.required = true;
  dateTimeGroup.appendChild(dateTimeLabel);
  dateTimeGroup.appendChild(dateTimeInput);

  // Create Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "button";
  submitButton.textContent = "book now";

  // Append all elements to the form
  form.appendChild(addressGroup);
  form.appendChild(durationGroup);
  form.appendChild(dateTimeGroup);
  form.appendChild(submitButton);

  // Create modal for map
  const mapModal = document.createElement("div");
  mapModal.className = "mapModal";
  mapModal.innerHTML = `
    <div class="mapModalContent">
      <span class="mapModalClose">&times;</span>
      <iframe id="mapIframe" src="" frameborder="0" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(mapModal);

  // Function to open map modal
  function openMapModal(coordinates) {
    const mapIframe = document.getElementById("mapIframe");
    mapIframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBj6J12DcNEqPTQ7cmvLR-WI33erAjdmXs&q=${coordinates}`;
    mapModal.style.display = "block";
  }

  // Close modal on click
  const closeModal = document.querySelector(".mapModalClose");
  closeModal.addEventListener("click", () => {
    mapModal.style.display = "none";
    const mapIframe = document.getElementById("mapIframe");
    mapIframe.src = ""; // Clear iframe src to stop loading map
  });

  return form;
}
