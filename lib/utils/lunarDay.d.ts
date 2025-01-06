declare const calendar: {
    lunarInfo: number[];
    solarMonth: number[];
    Gan: string[];
    Zhi: string[];
    Animals: string[];
    festival: {
        "1-1": {
            title: string;
        };
        "2-14": {
            title: string;
        };
        "5-1": {
            title: string;
        };
        "5-4": {
            title: string;
        };
        "6-1": {
            title: string;
        };
        "9-10": {
            title: string;
        };
        "10-1": {
            title: string;
        };
        "12-25": {
            title: string;
        };
        "3-8": {
            title: string;
        };
        "3-12": {
            title: string;
        };
        "4-1": {
            title: string;
        };
        "5-12": {
            title: string;
        };
        "7-1": {
            title: string;
        };
        "8-1": {
            title: string;
        };
        "12-24": {
            title: string;
        };
    };
    lFestival: {
        "12-30": {
            title: string;
        };
        "1-1": {
            title: string;
        };
        "1-15": {
            title: string;
        };
        "2-2": {
            title: string;
        };
        "5-5": {
            title: string;
        };
        "7-7": {
            title: string;
        };
        "7-15": {
            title: string;
        };
        "8-15": {
            title: string;
        };
        "9-9": {
            title: string;
        };
        "10-1": {
            title: string;
        };
        "10-15": {
            title: string;
        };
        "12-8": {
            title: string;
        };
        "12-23": {
            title: string;
        };
        "12-24": {
            title: string;
        };
    };
    getFestival(): {
        "1-1": {
            title: string;
        };
        "2-14": {
            title: string;
        };
        "5-1": {
            title: string;
        };
        "5-4": {
            title: string;
        };
        "6-1": {
            title: string;
        };
        "9-10": {
            title: string;
        };
        "10-1": {
            title: string;
        };
        "12-25": {
            title: string;
        };
        "3-8": {
            title: string;
        };
        "3-12": {
            title: string;
        };
        "4-1": {
            title: string;
        };
        "5-12": {
            title: string;
        };
        "7-1": {
            title: string;
        };
        "8-1": {
            title: string;
        };
        "12-24": {
            title: string;
        };
    };
    getLunarFestival(): {
        "12-30": {
            title: string;
        };
        "1-1": {
            title: string;
        };
        "1-15": {
            title: string;
        };
        "2-2": {
            title: string;
        };
        "5-5": {
            title: string;
        };
        "7-7": {
            title: string;
        };
        "7-15": {
            title: string;
        };
        "8-15": {
            title: string;
        };
        "9-9": {
            title: string;
        };
        "10-1": {
            title: string;
        };
        "10-15": {
            title: string;
        };
        "12-8": {
            title: string;
        };
        "12-23": {
            title: string;
        };
        "12-24": {
            title: string;
        };
    };
    setFestival(b?: {}): void;
    setLunarFestival(b?: {}): void;
    solarTerm: string[];
    sTermInfo: string[];
    nStr1: string[];
    nStr2: string[];
    nStr3: string[];
    lYearDays: (b: any) => number;
    leapMonth: (b: any) => number;
    leapDays: (b: any) => 0 | 30 | 29;
    monthDays: (b: any, f: any) => -1 | 30 | 29;
    solarDays: (b: any, f: any) => number;
    toGanZhiYear: (b: any) => string;
    toAstro: (b: any, f: any) => string;
    toGanZhi: (b: any) => string;
    getTerm: (b: any, f: any) => number;
    toChinaMonth: (b: any) => string | -1;
    toChinaDay: (b: any) => string;
    getAnimal: (b: any) => string;
    solar2lunar: (b: any, f: any, e: any) => -1 | {
        date: string;
        lunarDate: string;
        festival: any;
        lunarFestival: any;
        lYear: number;
        lMonth: number;
        lDay: number;
        Animal: string;
        IMonthCn: string;
        IDayCn: string;
        cYear: number;
        cMonth: number;
        cDay: number;
        gzYear: string;
        gzMonth: string;
        gzDay: string;
        isToday: boolean;
        isLeap: boolean;
        nWeek: number;
        ncWeek: string;
        isTerm: boolean;
        Term: string | null;
        astro: string;
    };
    lunar2solar: (b: any, f: any, e: any, c: any) => -1 | {
        date: string;
        lunarDate: string;
        festival: any;
        lunarFestival: any;
        lYear: number;
        lMonth: number;
        lDay: number;
        Animal: string;
        IMonthCn: string;
        IDayCn: string;
        cYear: number;
        cMonth: number;
        cDay: number;
        gzYear: string;
        gzMonth: string;
        gzDay: string;
        isToday: boolean;
        isLeap: boolean;
        nWeek: number;
        ncWeek: string;
        isTerm: boolean;
        Term: string | null;
        astro: string;
    };
};
export default calendar;
