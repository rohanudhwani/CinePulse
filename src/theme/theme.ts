interface Spacing{
    space_2:number;
    space_4:number;
    space_8:number;
    space_10:number;
    space_12:number;
    space_15:number;
    space_16:number;
    space_18:number;
    space_20:number;
    space_24:number;
    space_28:number;
    space_32:number;
    space_36:number;
}

export const SPACING:Spacing = {
    space_2: 2,
    space_4: 4,
    space_8: 8,
    space_10: 10,
    space_12: 12,
    space_15: 15,
    space_16: 16,
    space_18: 18,
    space_20: 20,
    space_24: 24,
    space_28: 28,
    space_32: 32,
    space_36: 36,
};

interface ColorInterface {
    Black: string;
    BlackRGBA10: string;
    Orange: string;
    OrangeRGBA0: string;
    Grey: string;
    DarkGrey: string;
    Yellow: string;
    White: string;
    WhiteRGBA75: string;
    WhiteRGBA50: string;
    WhiteRGBA32: string;
    WhiteRGBA15: string;
}

const colors: ColorInterface = {
    Black: "#000000",
    BlackRGBA10: "rgba(0, 0, 0, 0.1)",
    Orange: "#FFA500",
    OrangeRGBA0: "rgba(255, 165, 0, 0)",
    Grey: "#808080",
    DarkGrey: "#555555",
    Yellow: "#FFFF00",
    White: "#FFFFFF",
    WhiteRGBA75: "rgba(255, 255, 255, 0.75)",
    WhiteRGBA50: "rgba(255, 255, 255, 0.5)",
    WhiteRGBA32: "rgba(255, 255, 255, 0.32)",
    WhiteRGBA15: "rgba(255, 255, 255, 0.15)",
};