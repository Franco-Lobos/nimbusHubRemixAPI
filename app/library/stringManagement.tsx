export function convertToURLfriendly(string: string) {
    return string.replace(/ /g, "-").toLowerCase();
}