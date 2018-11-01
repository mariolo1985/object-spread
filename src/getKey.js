import spreading from './spreading';

export default function getKey(targetKey, ...args) {
    const spreadinged = spreading(...args);
    const keys = Object.keys(spreadinged);
    if (keys.length < 1) {
        return null;
    }

    let keyValue = null;
    Object.keys(spreadinged).forEach((key) => {
        if (key === targetKey) {
            keyValue = spreadinged[key];
        }
    });

    return keyValue;
}
