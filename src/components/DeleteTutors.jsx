"use client";

import {AlertDialog, Button} from "@heroui/react";
import { fetchSegmentOnCacheMiss } from "next/dist/client/components/segment-cache/cache";
import { redirect } from "next/dist/server/api-utils";
import { permanentRedirect } from "next/navigation";

export function DeleteTutors({tutor}) {
    
    const {tutorName, _id}  = tutor

   const handleDelete = async ()=>{
    const dataDelete = await fetch(`http://localhost:5000/add-tutor/${_id}`,
        {
            method: 'DELETE',
            headers:{
                "content-type" : "application/json"
            } 
        })
        const data = await dataDelete.json()
        permanentRedirect('/add-tutor')
        console.log(data)
   }


  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete tutor permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete<strong> {tutorName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}