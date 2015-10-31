'use strict'

module.exports = class Cache {
    constructor() {
        this.storage = {};
    }

    get(key) {
        return this.storage[key];
    }

    refresh(key, duration) {
        const obj = this.storage[key];
        this.set(obj.key, obj.value, obj.duration);
    }

    set(key, value, duration) {
        const obj = this.storage[key] = {
            duration: duration,
            fresh: true,
            key: key,
            value: value,
        };

        obj.timeout = setTimeout(() => {
            obj.fresh = false;
        }, duration);
    }
}
