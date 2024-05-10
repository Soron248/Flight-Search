import FlightData from "@/components/FlightData";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="w-full px-5">
      {/* heading title */}
      <div className="lg:max-w-4xl 2xl:max-w-5xl mx-auto py-3">
        <h1 className="text-xl md:text-3xl font-bold">Master Price</h1>
      </div>
      <hr />

      {/* filtering form */}
      <div className="max-w-5xl mx-auto py-3">
        <Form />
      </div>

      {/* Flight data parsing */}
      <div className="max-w-5xl mx-auto py-3">
        <FlightData />
      </div>
    </div>
  );
}
