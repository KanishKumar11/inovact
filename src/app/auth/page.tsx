import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Enter your details</CardTitle>
          <CardDescription>To experience the best</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between w-full flex-wrap">
            {" "}
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button type="submit">Google</Button>
            </form>
            <Button>Github</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
