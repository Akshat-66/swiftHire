import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  // 🔍 Debug user data
  useEffect(() => {
    if (user) {
      console.log("Logged-in user metadata:", user?.unsafeMetadata);
    }
  }, [user]);

  const userRole = user?.unsafeMetadata?.role?.toLowerCase();

  return (
    <>
      <nav className="py-4 px-10 flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/mylogoo.png" alt="swiftHire Logo" className="h-20 w-auto" />
        </Link>

        {/* Right side buttons */}
        <div className="flex items-center gap-6">
          <SignedOut>
            <Button
              variant="outline"
              onClick={() => setShowSignIn(true)}
              className="text-lg px-6 py-3"
            >
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            {/* ✅ Show if role is recruiter (case-insensitive) */}
            {userRole === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full text-base px-5 py-3">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}

            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-14 h-14",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {/* SignIn Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <SignIn fallbackRedirectUrl={window.location.pathname} />
        </div>
      )}
    </>
  );
};

export default Header;
