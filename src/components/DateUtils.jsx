export const getDayfromDate = (date) => {
    return date.day;
}
export const getMonthfromDate = (date) => {
    return date.month;
}
export const getMonthName = (month) => {
    //const monthsName = ['Ene', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const monthsName = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return monthsName[month];
}
export const getYearfromDate = (date) => {
    return date.year;
}

export const getCurrentDate = () => {
    const current = new Date()
    return {
        day: current.getDate(),
        month: current.getMonth() + 1,
        year: current.getFullYear(),
    };
};
