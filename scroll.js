const anchorLinks = document.querySelectorAll('a[data-to-anchor]');


for (link of anchorLinks) {
    function handleClick(e) {
        const dataValue = e.currentTarget.dataset.toAnchor;
        const block = document.querySelector(`section[data-from-anchor="${dataValue}"]`);
        block.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    link.addEventListener('click', handleClick);
}