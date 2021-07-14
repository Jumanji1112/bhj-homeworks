'use strict';

let tooltip = Array.from(document.getElementsByClassName("has-tooltip"));
tooltip.forEach(item => item.addEventListener("click", function (event) {
    event.preventDefault();

    let tooltipContainer = document.querySelector(".tooltip");
    if (tooltipContainer) {
        let target = event.target;
        if (tooltipContainer === target.nextElementSibling) {
            tooltipContainer.remove();
            return;
        } else {
            tooltipContainer.remove();
        }
    }

    let tooltipTitle = this.title;
    let tooltipPosition = this.getBoundingClientRect();
    let tooltipLeft = tooltipPosition.left;
    let tooltipTop = tooltipPosition.top + tooltipPosition.height;
    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${tooltipLeft}px; top: ${tooltipTop}px">${tooltipTitle}</div>`);
}));