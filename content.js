window.onload = function() {
    let extensions = document.getElementsByClassName("tw-absolute tw-full-height tw-full-width tw-left-0 tw-top-0");
    if (extensions != null && extensions.length > 0) {
        extensions[0].remove();
    }
};