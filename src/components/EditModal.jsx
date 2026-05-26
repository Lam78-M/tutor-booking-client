"use client";

import { useStatStyles } from "@chakra-ui/react";
import {Button, Input, Label, Modal, Surface, TextField, Select,FieldError, ListBox} from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

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
export function EditModal({tutor, fetchTutors}) {
  const [open, setOpen] = useState(false);

  const  {_id, tutorName, photo, subject, available, hourlyFee, sessionStart, institution, location, teachingMode, totalSlot} = tutor




   const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const addtutor = Object.fromEntries(formData.entries())
    console.log(addtutor)

  // calling api-------------
  const res = await fetch(`http://localhost:5000/add-tutor/${_id}`,{
    method: "PATCH",
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(addtutor)
  })

const data = await res.json()

if(data.modifiedCount > 0){
   toast.success("Updated Successfully")
   await fetchTutors()
   setOpen(false)
}
  }
  return (
    <Modal open={open} onOpenChange={setOpen}>
      
      <Button onPress={()=> setOpen(true)} className="px-3  text-sm rounded-md bg-blue-500 text-white hover:bg-blue-700 transition">
        Edit
      </Button>
      

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl">
            <Modal.CloseTrigger />
        
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
  <h1 className="text-center text-3xl mb-10 border-b-2 border-b-green-400">
  Edit Your Tutor
</h1>
      <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Tutor Name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
      viewport={{ once: false, amount: 0.2 }}
          className="md:col-span-2"
        >
          <TextField defaultValue={tutorName} name="tutorName" isRequired>
            <Label  className="text-gray-700 dark:text-gray-200">
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
          <TextField defaultValue={photo} name="photo" isRequired>
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
           defaultValue={subject}
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
          <TextField 
          defaultValue={hourlyFee}
           name="hourlyFee" type="number" isRequired>

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
          <TextField defaultValue={available} name="available" isRequired>

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
          <TextField defaultValue={sessionStart} name="sessionStart" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Available 
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
          <TextField defaultValue={totalSlot}  name="totalSlot" type="number" isRequired>

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
          <TextField defaultValue={sessionStart} name="sessionStart" type="date" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Session Start 
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
          <TextField defaultValue={institution} name="institution" isRequired>

            <Label className="text-gray-700 dark:text-gray-200">
              Institution 
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
          <TextField defaultValue={location} name="location" isRequired>

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
            defaultValue={teachingMode}
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
      
      </motion.div>
       <Modal.Footer>
    
              <Button  type="submit" slot="close" className="border-green-500  bg-[#3b9c62]  hover:bg-green-500">Save</Button>
            </Modal.Footer>

    </motion.form>


              </Surface>
            </Modal.Body>
         
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}