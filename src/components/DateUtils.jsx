
export const getDayfromDate = (date) => {
    return date.day;
}
export const getMonthfromDate = (date) => {
    return date.month;
}
export const getYearfromDate = (date) => {
    return date.year;
}

export const getCurrentDate = () => {
  
    const current = new Date()
    const date2 = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const monthsName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
    const initialDate = {
      day: current.getDate(),
      month: monthsName[current.getMonth() ],
      year: current.getFullYear(),
    };
  
    return initialDate;
  };
