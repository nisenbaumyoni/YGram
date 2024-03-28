import { UserCmp } from "../UserCmp";

export function SuggestedForYou() 
{
    return(
        <section className="suggested-for-you" >
            <p className="soft-text">Suggested for you</p>
            <div>
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} creator={false}/>
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} creator={false}/>
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} creator={false}/>
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} creator={false}/>
            <UserCmp className="user-cmp" user={"nopic"} isLoggedIn={false} creator={false}/>
            </div>
        </section>
    )
}