# Dates

- Data() -> fecha completa
- Data().now() -> minisegundos desde 1 enero 1970
- new Date()
- new Date("1-5-2000")
- new Date("January 5 2000")
- new Date().getFullYear()
- new Date().getMonth() -> inicia en 0.
- new Date().getMinutes()
- new Date().getHours()
- new Date().getTime() -> minisegundos desde 1 enero 1970
- new Date().toLocalString()
- new Date().toLocalTimeString() -> convierten a local time
- new Date().toLocalDateString()

## Moment.js para trabajar con fechas https://momentjs.com

- Usar locale para usar la fechas en español
- moment.locale("es")
- moment().format("MMMM Do YYYY h:ms:ss a") -> julio 14 2020 4:06:22 pm
- moment.().add(3 ,"days").calendar()
