export function decodedResistorValue(value) {
    const [first, second, x] = value;
    const y = COLORS.indexOf(first);
    const v = COLORS.indexOf(second);
    const z = COLORS.indexOf(x);
    // we computing the numeric value
    const result = (y * 10 + v) * Math.pow(10, z);
    if (result >= 1000000000) {
        return `${result / 1000000000} gigaohms`;
    }
    else if (result >= 1000000) {
        return `${result / 1000000} megaohms`;
    }
    else if (result >= 1000) {
        return `${result / 1000} kiloohms`;
    }
    else {
        return `${result} ohms`;
    }
}
export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
console.log(decodedResistorValue(["yellow", "violet", "red"])); // 4.7 kiloohms
console.log(decodedResistorValue(["orange", "orange", "black"])); // 33 ohms
console.log(decodedResistorValue(["red", "green", "yellow"])); // 2.5 kiloohms
console.log(decodedResistorValue(["white", "white", "white"])); // 9.9 gigaohms
