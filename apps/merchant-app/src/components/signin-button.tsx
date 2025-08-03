"use client"

import { signIn } from "next-auth/react";
// import { signIn } from "../../auth";
// import { signInWithGitHub } from "../lib/githubSignIn";
// import { Button } from "@/components/ui/button";
// import { Github } from "@/components/ui/github";

const GithubSignIn = () => {
  return (
    
      <button className="w-full"
        onClick={()=>
          signIn('github')

        }
      >
        {/* <Github /> */}
        Continue with GitHub
      </button>
    
  );
};

export { GithubSignIn };
