import "../styles/footer.css";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  // Footer container
  const footerContent = document.createElement("div");
  footerContent.className = "footerContent";

  // Column 1 - Contact Information
  const contactColumn = document.createElement("div");
  contactColumn.className = "footerColumn";

  const contactHeading = document.createElement("h3");
  contactHeading.textContent = "Contact Information";
  contactColumn.appendChild(contactHeading);

  const contactDetails = document.createElement("div");
  contactDetails.className = "contactDetails";

  const phone = document.createElement("a");
  phone.href = "tel:+1234567890";
  phone.textContent = "+1 234 567 890";
  contactDetails.appendChild(phone);

  const email = document.createElement("a");
  email.href = "mailto:info@example.com";
  email.textContent = "info@example.com";
  contactDetails.appendChild(email);

  contactColumn.appendChild(contactDetails);

  // Column 2 - Address
  const addressColumn = document.createElement("div");
  addressColumn.className = "footerColumn";

  const addressHeading = document.createElement("h3");
  addressHeading.textContent = "Address";
  addressColumn.appendChild(addressHeading);

  const address = document.createElement("p");
  address.textContent = "123 Main St, City, Country";
  addressColumn.appendChild(address);

  // Column 3 - Social Media Links
  const socialColumn = document.createElement("div");
  socialColumn.className = "footerColumn";

  const socialHeading = document.createElement("h3");
  socialHeading.textContent = "Follow Us";
  socialColumn.appendChild(socialHeading);

  const socialLinks = document.createElement("div");
  socialLinks.className = "socialLinks";

  const facebookLink = document.createElement("a");
  facebookLink.href = "#";
  facebookLink.textContent = "Facebook";
  socialLinks.appendChild(facebookLink);

  const instagramLink = document.createElement("a");
  instagramLink.href = "#";
  instagramLink.textContent = "Instagram";
  socialLinks.appendChild(instagramLink);

  socialColumn.appendChild(socialLinks);

  // Append columns to footer content
  footerContent.appendChild(contactColumn);
  footerContent.appendChild(addressColumn);
  footerContent.appendChild(socialColumn);

  // Append footer content to footer
  footer.appendChild(footerContent);

  // Footer bottom - Copyright
  const footerBottom = document.createElement("div");
  footerBottom.className = "footerBottom";
  footerBottom.textContent = "© 2024 Your Company. All Rights Reserved.";

  footer.appendChild(footerBottom);

  return footer;
}
