import validator from "validator/es";

class ValidatorClass {
    /* return boolean */
    isEmail = val => validator.isEmail(val);    // is this a email
    isLength = (val, min, max) => validator.isLength(val, {min, max}); // check length diapason
    isPasEquals = (v1, v2) => validator.equals(v1, v2); // check passwords equals(match)
    isAlphanumeric = val => validator.isAlphanumeric(val);  // check if the string contains only letters and numbers (a-zA-Z0-9).
    isEmpty = val => validator.isEmpty(val);    //
    isStrongPassword = ()=>{};  //
    blacklist = (val, chars) => validator.blacklist(val, chars);  // remove characters that appear in the blacklist.
    escape = (val) => validator.escape(val);  // replace <, >, &, ', " and / with HTML entities.
    trim = (val, chars) => validator.trim(val, chars);  // trim characters (whitespace by default) from input.

    /* return comments */
    isEmailMsg = val => this.isEmail(val) ? '' : "email invalid";
    isLengthMsg = (val, min, max) => this.isLength(val, min, max) ? '' : `diapason: ${min}-${max} symbols`;
    isPasEqualsMsg = (v1, v2) => this.isPasEquals(v1, v2) ? '' : "passwords don't match";
    isAlphanumericMsg = val => validator.isAlphanumeric(val) ? '' : "only letters and numbers";
}

export default ValidatorClass;