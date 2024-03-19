import { UserCmp } from "./UserCmp";

export function SuggestedForYou() 
{
    return(
        <section >
            <p className="soft-text">Suggested for you</p>
            <div>
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} />
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} />
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} />
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} />
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} />
            </div>
        </section>
    )
}