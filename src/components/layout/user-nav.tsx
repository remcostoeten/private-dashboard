import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/core/database/firebase";
import { removeSession } from "@/core/actions/auth-actions";
import { signOutWithGoogle } from "@/core/database/auth";

const UserNav = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);

    const handleSignOut = async () => {
        await signOutWithGoogle();
        await removeSession();
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (user) {
        const displayName = () => {
            if (user.displayName) {
                return user.displayName;
            } else if (user.email) {
                return user.email;
            } else {
                return "";
            }
        };

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                src={user.photoURL ?? ""}
                                alt={user.displayName ?? ""}
                            />
                            <AvatarFallback>{displayName()[0].toUpperCase()}</AvatarFallback>{" "}
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex flex-col space-y-1 p-2 border-b">
                        <p className="text-sm font-medium leading-none">
                            {user.displayName}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <hr />
                    <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return null;
};

export default UserNav;
