interface LikeNotification
{
    type: "like",
    fromUser: string
}

interface SystemNotification
{
    type: "system",
    message: string,
    actionUrl?: string
}

function renderNotification(notification: LikeNotification | SystemNotification):string{
    if(notification.type==="like"){
        return `${notification.fromUser} liked your post`
    }else if(notification.type==="system"){
        return `System: ${notification.message}`
    }
}
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }))