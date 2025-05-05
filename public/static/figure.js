const section = document.querySelector("#general-info");
const figure = document.querySelector("#general-info figure");
const paragraph = document.querySelector("#general-info p");

if (section && figure && paragraph) {
    // Calculate the new height
    const figureHeight = figure.offsetHeight;
    const paragraphHeight = paragraph.offsetHeight;
    const sectionHeight = section.offsetHeight;

    const newMinHeight = sectionHeight + (figureHeight - paragraphHeight);

    // Apply the calculated height to #section
    section.style.minHeight = `${newMinHeight}px`;
}
