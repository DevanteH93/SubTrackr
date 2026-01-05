import Login from "./Login"
// You might need to remove the lines below with (@/.....)this if code messes up
// these didnt pop up naturally. i had to type the code in myself
// import Login from "@/components/Login"
// import SubscriptionSummary from "@/components/SubscriptionSummary"
// import SubscriptionsDisplay from "@/components/SubscriptionsDisplay"

import SubscriptionSummary from "./SubscriptionSummary"
import SubscriptionsDisplay from "./SubscriptionsDisplay"


export default function Dashboard() {

    const isAuthenticated = false

    if (!isAuthenticated) {
        return (
            <Login />
        )
    }

    return (
        <>
            <SubscriptionSummary />
            <SubscriptionsDisplay />

        </>
    );
}