import { auth } from "@/auth";
import { GetFormatterForCurrency } from "@/lib/helpers";
import Transaction from "@/models/Transaction";
import UserSettings from "@/models/UserSettings";
import { OverviewQuerySchema } from "@/schema/overview";
import { User } from "lucide-react";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect("/auth");
  }
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const queryParams = OverviewQuerySchema.safeParse({
    from,
    to,
  });
  if (!queryParams.success) {
    return Response.json(queryParams.error.message, {
      status: 400,
    });
  }
  const transactions = await getTransactionsHistory(
    user.id!,
    queryParams.data.from,
    queryParams.data.to
  );
  // console.log(transactions);
  return Response.json(transactions);
}
export type getTransactionHistoryResponseType = Awaited<
  ReturnType<typeof getTransactionsHistory>
>;
async function getTransactionsHistory(userId: string, from: Date, to: Date) {
  const userSettings = await UserSettings.findOne({
    userId,
  });
  if (!userSettings) {
    throw new Error("User settings not found");
  }
  const formatter = GetFormatterForCurrency(userSettings.currencyCode);
  const transactions = await Transaction.find({
    userId,
    date: {
      $gte: from,
      $lte: to,
    },
  }).sort({
    date: 1,
  });
  console.log("===TRANSACTIONS===");
  console.log(transactions);
  return transactions.map((transaction) => ({
    ...transaction,
    formattedAmount: formatter.format(transaction.amount),
  }));
}
