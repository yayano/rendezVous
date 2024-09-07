import AppointementForm from "@/components/forms/AppointementForm";
import PatientForm from "@/components/forms/PatienForm";
import { getPatient } from "@/lib/actions/patient.action";

import Image from "next/image";
import Link from "next/link";

export default async function NewAppointement({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div>
      <div className="flex h-screen max-h-screen">
        {/** TODO: OTP Verification | passKeyModel */}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[860px] flex-1 justify-between">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            <AppointementForm
              type="create"
              userId={userId}
              patientId={patient.$id}
            />

            <p className="copyright mt-10 py-12">© 2024 yayano™</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </section>

        <Image
          src="/assets/images/appointment-img.png"
          height={1000}
          width={1000}
          alt="appointement"
          className="side-img max-w-[390px] bg-bottom"
        />
      </div>
    </div>
  );
}
