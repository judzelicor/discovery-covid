export function addCommaSeparator(number) {
    if (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
    } 
    
    else {
        return 0
    }
}