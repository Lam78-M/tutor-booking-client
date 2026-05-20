"use client";
import { motion } from "framer-motion";

import {Button, 
      FieldError, 
       Input, 
       Label, 
       Modal, 
       Surface, 
       TextField, 
       Select, 
       ListBox} from "@heroui/react";
import { BiSolidEditAlt } from "react-icons/bi";

export function EditModal() {
     const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const addtutor = Object.fromEntries(formData.entries())
    console.log(addtutor)

  // calling api-------------
//   const res = await fetch('http://localhost:5000/tutor',{
//     method: "POST",
//     headers: {
//       'content-type' : 'application/json'
//     },
//     body: JSON.stringify(addtutor)
//   })

//  const data = await res.json()
//      if(res.ok){
//       toast.success("your are successffull")
//      }
  }
  return (
    <Modal>
       <button
                           className= " border p-2 text-blue-600 hover:text-blue-800 text-lg hover:bg-green-200"
                           title="Edit"
                         >
                         <BiSolidEditAlt />
                         </button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                

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
                   <ListBox.Item id="English">
                  ICT
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
       className=" w-full !rounded-none mt-8 border border-green-500  bg-[#53ef92]  hover:bg-green-500 px-5 py-2 transition-all text-slate-700"
        >
          Add Tutor
        </Button>
      </motion.div>

    </motion.form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}