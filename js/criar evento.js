export function itringToArray (string, separator - ", ") {
    return string.split(separator);
}

export function arrayToString(arr, separator = ", "){
    return arr.join(separator);
}

export function stringToDate(dateString, separator = " "){
    const dateAndTime = dateString.split(separator);

    const [day, month, year] = dateAndTime [0].split("/");
    
    cont [hours, minutes] = dateAndTime[1].split(":");

    constisoString = `$ {
        year.length < 4 ? "20" + year : year
    } -${month} -${day}T${hours} :${minutes} :00.00Z`;

    console.log("A string normalizada no formato ISO 8601: ", isoString);

    const date = new Date(isoString);

    console.log("O obejeto date gerado a partir da string ISO: ", date);
    
    return date;
}

export function isoStringToLocaleDateString (isoString, option = {}) {
    const date = new Date(isoString);

    return date.toLocaleDateString("pt=br", options);
}