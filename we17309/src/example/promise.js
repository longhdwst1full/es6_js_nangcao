

export default function promise() {
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve(10);
            script.onerror = reject(new Error`Lỗi rồi ${script}`)
            document.head.append(script);
        })
    }
    try {
        
        loadScript("https://javascript.info/callbacks")
            .then(data => data + 1)
            .then(data2 => console.log(data2))
            .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
    }
}
