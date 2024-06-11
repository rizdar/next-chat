import { Spinner } from "@nextui-org/react";

export default function loading() {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Spinner label="Loading..." color="secondary" />
    </div>
  );
}
