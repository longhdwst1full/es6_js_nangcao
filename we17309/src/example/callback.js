const callback = () => {
    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        script.onerror = () => callback(new Error(`Script load error for ${script}`))
        document.head.append(script);
    }
    loadScript("https://javascript.info/callbacks", (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(data);
        }
    })
}

export default callback