import { UserCmp } from "./UserCmp";

export function SuggestedForYou() 
{
    return(
        <section className="suggested-for-you">
            <p className="soft-text">Suggested for you</p>
            <UserCmp user={"nopic"} isLoggedIn={false} />
            <UserCmp user={"nopic"} isLoggedIn={false} />
            <UserCmp user={"nopic"} isLoggedIn={false} />
            <UserCmp user={"nopic"} isLoggedIn={false} />
            <UserCmp user={"nopic"} isLoggedIn={false} />
        </section>
    )
}