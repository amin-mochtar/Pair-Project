function convertedPrice(money){

    let money_string = money.toString(),
        reminder = money_string.length % 3,
        rupiah = `Rp ${money_string.substr(0, reminder)}`
        thousands = money_string.substr(sisa).match(/\{3}/g);

        if (thousands) {
            separator = reminder ? "." : "";
            rupiah += separator + thousands.join('.' + ".00")
        }

    return rupiah
}