function calculateAge(birthday) {

    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = Date.now(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

}