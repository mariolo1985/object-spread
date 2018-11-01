export default function spreading() {
    let spreaded = {};
    Object.keys(arguments).forEach((key) => {
        Object.assign(spreaded, arguments[key]);
    });

    return spreaded;
}
