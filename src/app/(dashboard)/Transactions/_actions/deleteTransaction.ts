"use server";

import { auth } from "@/auth";
import Transaction from "@/models/Transaction";
import { redirect } from "next/navigation";

export async function DeleteTransaction(id: string) {
  const session = await auth();
  if (!session) redirect("/auth");
  const transaction = await Transaction.findByIdAndDelete(id);
  if (!transaction) throw new Error("No transaction found");
}
