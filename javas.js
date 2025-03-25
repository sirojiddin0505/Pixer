window.addEventListener("load", function () {
    function checkNetworkStatus() {
        const videoFrame = document.querySelector(".hero__right iframe");
        
        if (!navigator.onLine) {
            const offlineImage = document.createElement("img");
            offlineImage.src = "images/services2.png";             
            offlineImage.alt = "there img";
            offlineImage.style.width = "80%";
            
            videoFrame.parentNode.replaceChild(offlineImage, videoFrame);
        }
    }

    checkNetworkStatus();
    
    window.addEventListener("offline", checkNetworkStatus);
});
