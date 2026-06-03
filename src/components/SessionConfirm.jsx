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

    const bookingData = {
      tutorId: tutor?._id,
      tutorName: tutor?.tutorName,
      studentName: form.get("name"),
      studentEmail: session?.user?.email,
      phone: form.get("phone"),
    };

    console.log(bookingData);

    // এখানে API call দিবা
      const res = await fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await res.json();
     if (data?.success || data?.insertedId) {
      toast.success("Booking Confirmed 🎉");
    } else {
      toast.error("Booking Failed ❌");
    }


  console.log("Saved:", data);
 
  };

  return (
    <Modal>
      <Button className="w-full py-3 bg-green-600 text-white rounded-lg">
        Book Session
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md rounded-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Confirm your session</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name */}
                  <TextField name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  {/* EMAIL (AUTO FROM SESSION) */}
                  <TextField name="email">
                    <Label>Email</Label>
                    <Input
                      value={session?.user?.email || ""}
                      readOnly
                    />
                  </TextField>


                
                  {/* PHONE */}
                  <TextField name="phone">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                  <Button slot="close" type="submit" className="w-full">
                    Confirm Session
                  </Button>

                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}