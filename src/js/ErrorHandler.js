let instance = null;

class ErrorHandler {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }
}