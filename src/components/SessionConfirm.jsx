"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { success } from "better-auth";
import toast from "react-hot-toast";

export function SessionConfirm({ tutor }) {
  const { data: session } = authClient.useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

      const { data: tokenData } = await authClient.token();

    const bookingData = {
      tutorId: tutor?._id,
      tutorName: tutor?.tutorName,
      studentName: form.get("name"),
      studentEmail: session?.user?.email,
      phone: form.get("phone"),
    };

    console.log(bookingData);

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
    },
    body: JSON.stringify(bookingData),
  });

const data = await res.json();

console.log("Saved:", data);

if (!data?.success) {
  toast.error(data?.message || "Booking Failed ❌");
  return;
}

//  Success case ---------
if (data?.insertedId) {
  toast.success("Booking Confirmed 🎉");
  window.location.reload();
} else {
  toast.error("Booking Failed ❌");
}
 
  };

  return (
    <Modal>
      <Button className="w-full py-3 bg-green-600 text-white rounded-lg">
        Book Session
      </Button>

      <Modal.Backdrop >
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md rounded-md dark:bg-[#0f172a]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading  >Confirm your session</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name---------- */}
               
<TextField name="name">
  <Label className="text-gray-500">Name</Label>

  <Input
    placeholder="Enter your name"
    className="bg-[#0f172a] text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
  />
</TextField>

{/* Email --------- */}
<TextField name="email">
  <Label className="text-gray-500">Email</Label>

  <Input
    value={session?.user?.email || ""}
    readOnly
    className="bg-[#0f172a] text-gray-500 border border-gray-700"
  />
</TextField>

{/* Phone ------------ */}
<TextField name="phone">
  <Label className="text-gray-500">Phone</Label>

  <Input
    placeholder="Enter your phone number"
    className="bg-[#0f172a] text-white border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
  />
</TextField>
               
<Button
  slot="close"
  type="submit"
  disabled={tutor?.availableSlots === 0}
  className={`w-full py-3 rounded-lg text-white ${
    tutor?.availableSlots === 0
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-green-600"
  }`}
>
  {tutor?.availableSlots === 0
    ? "No Slots Available"
    : "Confirm Session"}
</Button>
                 

                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary" className="text-green-500">
                Cancel
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}