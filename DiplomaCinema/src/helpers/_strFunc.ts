export const getUserSlice = (str: string): string =>{
    return !!str ? str.split('').reduce((prev: string, elem: string) => elem === elem.toUpperCase() ? prev + elem : prev, '') : "NN";
}

export const getPath = (text: string): string => {
    switch (text) {
    case 'Главная':
        return '/';
    case 'Фильмы':
        return '/movies';
    case 'Тренды':
        return '/trends';
    case 'Настройки':
        return '/settings';
    default:
        return '/';
    }
};
