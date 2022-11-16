const boxes = document.querySelectorAll(".box");

const checkBox = () => {
  // get the bottom position of the viewport to show box
  const triggerHeight = (window.innerHeight / 5) * 4;

  for (box of boxes) {
    // get the top position of the box relative to the viewport
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop <= triggerHeight) box.classList.add("show");
    else box.classList.remove("show");
  }
};

checkBox();

window.addEventListener("scroll", checkBox);
