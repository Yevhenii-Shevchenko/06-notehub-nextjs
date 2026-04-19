import NoteDetailsClient from "./NoteDetails.client";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

export default function NoteDetailsPage() {
  return (
    <TanStackProvider>
      <NoteDetailsClient />
    </TanStackProvider>
  );
}
