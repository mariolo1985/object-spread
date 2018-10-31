module.exports = function getKeyValue(source, key) {
    return { key, ...source } = source;
}
