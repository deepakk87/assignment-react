export function isNumeric(str: string | undefined) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(parseFloat(str))
  }