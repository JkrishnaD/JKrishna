import Link from "next/link";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-16">
      <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
        Contact
      </div>
      <h1 className="text-3xl font-bold sm:text-5xl">Get in Touch</h1>
      <p className="text-center text-muted-foreground max-w-[500px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Wnat to chat? Just shoot Into my{" "}
        <Link href={"https://x.com/jkrishna_d"} className="text-blue-400">
          twitter Dm with a question
        </Link>{" "}
        and I will respond with in no time.
      </p>
    </div>
  );
};