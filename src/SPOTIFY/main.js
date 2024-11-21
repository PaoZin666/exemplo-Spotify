document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelector(".items");
  const itemList = Array.from(document.querySelectorAll(".item"));
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  const centerDiv = document.querySelector(".center");
  let activeIndex = 0;

  const updateActiveItem = () => {
    itemList.forEach((item, index) => {
      item.classList.remove("active");
      if (index === activeIndex) {
        item.classList.add("active");
        const itemClass = item.classList.item(1);
        updateBackgroundColor(itemClass);
      }
    });
    const offset = (items.offsetWidth / 2) - (itemList[activeIndex].offsetWidth / 2);
    const scrollValue = itemList[activeIndex].offsetLeft - offset;
    items.style.transform = `translateX(-${scrollValue}px)`;
  };

  const nextItem = () => {
    activeIndex = (activeIndex + 1) % itemList.length;
    updateActiveItem();
  };

  const prevItem = () => {
    activeIndex = (activeIndex - 1 + itemList.length) % itemList.length;
    updateActiveItem();
  };

  const updateBackgroundColor = (itemClass) => {
    let backgroundColor;
    switch (itemClass) {
      case "ze-vaqueiro":
        backgroundColor = "#fd5c39cc";
        break;
      case "pericles":
        backgroundColor = "#5d5757";
        break;
      case "tarso":
        backgroundColor = "#a30000";
        break;
      case "matue":
        backgroundColor = "#7c0099a8";
        break;
      case "teto":
        backgroundColor = "#00acd5";
        break;
        case "ugovhb":
          backgroundColor = "#d19d59fa";
          break;
      default:
        backgroundColor = "#000";
        break;
    }
    centerDiv.style.backgroundColor = backgroundColor;
  };

  nextButton.addEventListener("click", nextItem);

  prevButton.addEventListener("click", prevItem);

  updateActiveItem();
});
