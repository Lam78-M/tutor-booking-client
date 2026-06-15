"use client";

import { motion } from "framer-motion";
import {
  TextField,
  Label,
  Select,
  ListBox,
  Input,
  FieldError,
  Button,
  Card,
} from "@heroui/react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";


const inputStyle = `
  !rounded-none
  bg-white
  dark:bg-slate-900
  text-black
  dark:text-white
  border
  border-green-300
  dark:border-slate-700
`;

export default function AddTutor() {

  useEffect(() => {
    document.title = "Add Tutor | Tutor App";
  }, []);
     
    const onSubmit = async (e) => {
  e.preventDefault();
  
  // 🌟 ১. ‘await’ করার আগেই ফর্মের রেফারেন্সটি একটি ভেরিয়েবলে সেভ করে রাখো
  const form = e.currentTarget; 
  
  const formData = new FormData(form);
  const tutorData = Object.fromEntries(formData.entries());

  const { data: tokenData } = await authClient.token();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/add-tutor`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(tutorData), 
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Successfully Added");
      // 🌟 ২. এখন `e.currentTarget` এর বদলে সরাসরি `form.reset()` ব্যবহার করো
      form.reset(); 
    } else {
      toast.error(data.message || "Failed to add tutor");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server Error");
  }
};
  

  return (
    <div className="p-5 max-w-3xl mx-auto shadow-xl mt-10 mb-10 border bg-white dark:bg-[#0f172a] transition-colors duration-300 px-4">
      
      {/* Top Header */}
      <div className="text-center pt-10">
        <span className="bg-[#AAFFC7] text-[#124170] px-4 py-2 rounded-full text-sm font-medium">
          Tutor Booking
        </span>
        <h2 className="text-4xl font-bold text-[#2572bf] mt-4">
          Add Your Preferred Teacher
        </h2>
        <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
          Fill in the details below to connect with experienced <br /> tutors and start learning smarter.
        </p>
      </div>

      <Card className="!rounded-none bg-transparent shadow-none border-0">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="p-10 space-y-2 !rounded-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tutor Name ---------- */}
            <TextField name="tutorName" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Tutor Name
              </Label>
              <Input placeholder="John Doe" className={inputStyle} />
              <FieldError />
            </TextField>

         
            <TextField name="photo" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Tutor Photo URL
              </Label>
              <Input 
                type="url" 
                placeholder="https://i.ibb.co/.../image.jpg" 
                className={inputStyle} 
              />
              <FieldError />
            </TextField>

            {/* Subject ------------------*/}
            <Select
              name="subject"
              isRequired
              className="w-full"
              placeholder="Select Subject"
            >
              <Label className="text-gray-700 dark:text-gray-200">
                Subject / Category
              </Label>
              <Select.Trigger className={inputStyle}>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="!rounded-none bg-white dark:bg-slate-900 dark:text-white">
                <ListBox>
                  <ListBox.Item id="Mathematics">Mathematics</ListBox.Item>
                  <ListBox.Item id="Physics">Physics</ListBox.Item>
                  <ListBox.Item id="Chemistry">Chemistry</ListBox.Item>
                  <ListBox.Item id="Biology">Biology</ListBox.Item>
                  <ListBox.Item id="English">English</ListBox.Item>
                  <ListBox.Item id="ICT">ICT</ListBox.Item>
                  <ListBox.Item id="Arabic">Arabic</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Available time ------------*/}
            <TextField name="available" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Available Days & Time
              </Label>
              <Input placeholder="Fri - Tue | 7:00 AM - 10:00 AM" className={inputStyle} />
              <FieldError />
            </TextField>

            {/* Hourly Fee ------------------- */}
            <TextField name="hourlyFee" type="number" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Hourly Fee
              </Label>
              <Input placeholder="550" className={inputStyle} />
              <FieldError />
            </TextField>

            {/* Total Slot ------------------ */}
            <TextField name="totalSlot" type="number" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Total Slot
              </Label>
              <Input placeholder="28" className={inputStyle} />
              <FieldError />
            </TextField>

            {/* Session Start Date -----------------*/}
            <TextField name="sessionStart" type="date" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Session Start
              </Label>
              <Input className={inputStyle} />
              <FieldError />
            </TextField>

            {/* Institution --------------------*/}
            <TextField name="institution" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Institution
              </Label>
              <Input placeholder="Islamic University | Hafiza & Tutor" className={inputStyle} />
              <FieldError />
            </TextField>

            {/* Location ------------------*/}
            <TextField name="location" isRequired>
              <Label className="text-gray-700 dark:text-gray-200">
                Location (Area/City)
              </Label>
              <Input placeholder="Old Dhaka" className={inputStyle} />
              <FieldError />
            </TextField>

            {/* Teaching Mode --------------------- */}
            <Select
              name="teachingMode"
              isRequired
              className="w-full"
              placeholder="Select Mode"
            >
              <Label className="text-gray-700 dark:text-gray-200">
                Teaching Mode
              </Label>
              <Select.Trigger className={inputStyle}>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className="!rounded-none bg-white dark:bg-slate-900 dark:text-white">
                <ListBox>
                  <ListBox.Item id="Online">Online</ListBox.Item>
                  <ListBox.Item id="Offline">Offline</ListBox.Item>
                  <ListBox.Item id="Both">Both</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

          </div>

          {/* Submit Button -------------------- */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="w-full !rounded-none mt-8 border border-green-500 bg-[#53ef92] hover:bg-green-500 px-5 py-2 transition-all text-slate-700"
            >
              Add Tutor
            </Button>
          </motion.div>
        </motion.form>
      </Card>
    </div>
  );
}