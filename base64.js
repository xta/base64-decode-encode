function isBrowser() {
    return typeof window !== 'undefined';
}

export function encode(str) {
    if (isBrowser()) {
        const bytes = new TextEncoder().encode(str);
        const byteStr = String.fromCharCode(...bytes);
        return window.btoa(byteStr);
    }
    return Buffer.from(str, 'utf-8').toString('base64');
}

export function decode(str) {
    if (isBrowser()) {
        const byteStr = window.atob(str);
        const bytes = Uint8Array.from(byteStr, c => c.charCodeAt(0));
        return new TextDecoder().decode(bytes);
    }
    return Buffer.from(str, 'base64').toString('utf-8');
}
