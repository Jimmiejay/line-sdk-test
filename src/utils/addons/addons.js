export {
    permissionChecker
}


const permissionChecker = () => {
    return new Promise(async (resolve, reject) => {
        let userAgent = navigator.userAgent.toLocaleLowerCase();
        let pattern = /android/;

        if (!!navigator.permissions) {
            resolve();
        } else {
            if (pattern.test(userAgent)) {
                let currentURL = location.href;
                location.href = `${currentURL}/?openExternalBrowser=1`
            }
        }
    })
}