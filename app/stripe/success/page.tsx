import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function stripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-[#ff7d1a] w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase
          </p>
          <p>Have a great day!</p>

          <Button asChild className="mt-5 bg-[#ff7d1a] hover:opacity-70">
            <Link href="/">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}