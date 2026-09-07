const eventSection = document.querySelector("[data-event-end]");

if (eventSection && Date.now() >= Date.parse(eventSection.dataset.eventEnd)) {
  document.querySelector(`a[href="#${eventSection.id}"]`)?.remove();
  document.getElementById("event-schema")?.remove();
  eventSection.remove();
}
