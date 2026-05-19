"use client";
import { motion } from "framer-motion";
import { TextField,Label, Select,ListBox,Input, FieldError,Button, Card } from "@heroui/react";


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

  // submition linek
  const onSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const addtutor = Object.fromEntries(formData.entries())
    console.log(addtutor)
  }


  return (
<div className="min-w-3xl mx-auto shadow-xl mt-10 mb-10 border bg-white dark:bg-[#0f172a] transition-colors duration-300">
  <div className="text-center pt-10">

  <span className="bg-[#AAFFC7] text-[#124170] px-4 py-1 rounded-full text-sm font-medium">
    Tutor Booking
  </span>

  <h2 className="text-4xl font-bold text-[#2572bf] mt-4">
    Add Your Preferred Teacher
  </h2>

  <p className="mt-4 text-[#475569] max-w-2xl mx-auto">
    Fill in the details below to connect with experienced tutors and start learning smarter.
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

        {/* Tutor Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
      viewport={{ once: false, amount: 0.2 }}
          className="md:col-span-2"
        >
          <TextField name="tutorName" isRequired>
            <Label className="text-gray-700 dark:text-gray-200">
              Tutor Name
            </Label>

         <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />
          </TextField>
        </motion.div>

        {/* Photo URL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
         viewport={{ once: false, amount: 0.2 }}
          className="md:col-span-2"
        >
          <TextField name="photo" isRequired>
            <Label className="text-gray-700 dark:text-gray-200">
              Photo URL
            </Label>

           <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />
          </TextField>
        </motion.div>

        {/* Subject */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Select
            name="subject"
            isRequired
            className="w-full"
            placeholder="Select Subject"
          >
            <Label className="text-gray-700 dark:text-gray-200">
              Subject / Category
            </Label>

            <Select.Trigger
              className="
                !rounded-none
                bg-white
                dark:bg-slate-900
                text-black
                dark:text-white
                border
                border-green-300
                dark:border-slate-700
              "
            >
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover className="!rounded-none bg-white dark:bg-slate-900 dark:text-white">
              <ListBox>
                <ListBox.Item id="Mathematics">
                  Mathematics
                </ListBox.Item>

                <ListBox.Item id="Physics">
                  Physics
                </ListBox.Item>

                <ListBox.Item id="Chemistry">
                  Chemistry
                </ListBox.Item>

                <ListBox.Item id="Biology">
                  Biology
                </ListBox.Item>

                <ListBox.Item id="English">
                  English
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </motion.div>

        {/* Hourly Fee */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="hourlyFee" type="number" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Hourly Fee
            </Label>

            <Input
  placeholder="John Doe"
  className={inputStyle}
/>
            <FieldError />

          </TextField>
        </motion.div>

        {/* Available Days */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="availableDays" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Available Days
            </Label>

           <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />

          </TextField>
        </motion.div>

        {/* Time Slot */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="timeSlot" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Available Time Slot
            </Label>

            <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />

          </TextField>
        </motion.div>

        {/* Total Slot */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="totalSlot" type="number" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Total Slot
            </Label>

           <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />

          </TextField>
        </motion.div>

        {/* Session Start Date */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="sessionStartDate" type="date" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Session Start Date
            </Label>

            <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />

          </TextField>
        </motion.div>

        {/* Institution */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="institution" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Institution & Experience
            </Label>

           <Input
  placeholder="John Doe"
  className={inputStyle}
/>

            <FieldError />

          </TextField>
        </motion.div>

        {/* Location */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <TextField name="location" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Location (Area/City)
            </Label>

           <Input
  placeholder="John Doe"
  className={inputStyle}
/>
            <FieldError />

          </TextField>
        </motion.div>

        {/* Teaching Mode */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Select
            name="teachingMode"
            isRequired
            className="w-full"
            placeholder="Select Mode"
          >
            <Label className="text-gray-700 dark:text-gray-200">
              Teaching Mode
            </Label>

            <Select.Trigger
              className="
                !rounded-none
                bg-white
                dark:bg-slate-900
                text-black
                dark:text-white
                border
                border-green-300
                dark:border-slate-700
              "
            >
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover className="!rounded-none bg-white dark:bg-slate-900 dark:text-white">
              <ListBox>
                <ListBox.Item id="Online">
                  Online
                </ListBox.Item>

                <ListBox.Item id="Offline">
                  Offline
                </ListBox.Item>

                <ListBox.Item id="Both">
                  Both
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </motion.div>

      </div>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Button
          type="submit"
       className=" w-full !rounded-none mt-8  bg-[#53ef92]  hover:bg-green-500 px-5 py-2 transition-all text-slate-700"
        >
          Add Tutor
        </Button>
      </motion.div>

    </motion.form>

  </Card>

</div>
  );
}