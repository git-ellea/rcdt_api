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

export const calculateResponse = (obligationArr: any) => {
    let finalRes = [] as any;
    obligationArr.map((element: any, index: any) => {
        const daysRemainingRes = calculateDaysRemaining(element.dueDate);
        const riskLevelRes = category(daysRemainingRes);
        if (riskLevelRes !== "CRITICAL") {
            finalRes.push({
                "name": element.name,
                "daysRemaining": daysRemainingRes,
                "riskLevel": riskLevelRes
            })
        } else {
            finalRes.push({
                "name": element.name,
                "daysRemaining": daysRemainingRes,
                "riskLevel": riskLevelRes,
                "penaltyExposure": Math.abs(daysRemainingRes) * element.penaltyPerDay
            })
        }
    })
    return finalRes;
}

export const totalPenalty = (arr: any) => {
    return arr.reduce((prev: any, curr: any) =>
        (prev.penaltyExposure || 0) + (curr.penaltyExposure || 0)
    )
}