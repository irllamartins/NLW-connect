import { Button } from "@/components/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="text-white">Hello world!</div>
      <h1 className="text-4xl font-semibold font-heading">oi</h1>
      <Button >
        Enviar
      </Button>
      <Button >
        <ArrowRight />
      </Button>
    </main>
  );
}
