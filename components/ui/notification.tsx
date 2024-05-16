import * as React from "react"

interface NotificationProps {
  contentCount: number; // Nova propriedade para receber o número de AccordionContent
}

export default function Notification({ contentCount }: NotificationProps) {
  return (
    <div className="bg-lime-300 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold text-neutral-900">
      {contentCount} { }
    </div>
  );
}