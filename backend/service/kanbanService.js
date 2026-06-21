export function dateNotInPast(date){
    const deadline = new Date(date);
    const today = Date.now
    if(deadline < today){
        throw new Error("Deadline date cannot be set in the past")
    }
    return true;
}