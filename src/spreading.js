export default function spreading(...args) {
    let spreaded = {};
    Object.keys(args).forEach((key) => {
        Object.assign(spreaded, args[key]);
    });

    return spreaded;
}
