import pxToRem from "./pxToRem";
import rgba from "./rgba";
function boxShodow(offset: Array<number> = [], raduis: Array<number> = [], color: string, opacity: number, inset: string = ""): string {
    const [x, y] = offset
    const [blur,spread]=raduis
    return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
        color,
        opacity
    )}`;
}