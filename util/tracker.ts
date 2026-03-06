const category = (daysLeft: any) => {
    if (daysLeft <= 0) {
        return "CRITICAL"
    } else if (daysLeft >= 1 && daysLeft <= 9) {
        return "HIGH"
    } else if (daysLeft >= 10 && daysLeft <= 30) {
        return "MEDIUM"
    } else {
        return "LOW"
    }
}

const calculateDaysRemaining = (theDate: any) => {
    const todayDate = new Date();
    const dueDate = new Date(theDate);
    const difference = (dueDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24);
    return Math.ceil(difference);
}

const calculateResponse = (obligationArr) => {

}