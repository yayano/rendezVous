"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import AppointementForm from "./forms/AppointementForm";
import { Appointment } from "@/types/appwrite.types";
const AppointmentModal = ({
  type,
  userId,
  patientId,
  appointment,
}: {
  patientId: string;
  userId: string;
  appointment?: Appointment;
  type: "planifier" | "annuler";
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${type === "planifier" && "text-green-500"}`}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} Rendez-vous</DialogTitle>
          <DialogDescription>
            Veuillez remplir les détails suivants pour {type} un rendez-vous
          </DialogDescription>
        </DialogHeader>
        <AppointementForm
          userId={userId}
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
