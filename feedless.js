const hide = () => {
    const myFeed = document.querySelector('ytd-rich-grid-renderer')

    if (myFeed){
    myFeed.style.display = 'none';
    }
};


hide();

const check = new MutationObserver(hide);
check.observe(document.body, {childList: true, subtree: true});