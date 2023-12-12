"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MethodItem = {
  id: string;
  order: number | null;
  description: string | null;
  guideLength: number;
  appName: string | null;
};

export const columns: ColumnDef<MethodItem>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "guideLength",
    header: "Guide Length",
  },
  {
    accessorKey: "appName",
    header: "App name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const method = row.original;
      const router = useRouter();

      async function onDelete() {
        try {
          const response = await fetch(`/api/methods/${method.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: method.id,
            }),
          });

          if (!response.ok) {
            toast.error("method 삭제 실패");
            throw Error("");
          }
          toast.success("method 삭제 성공");
          router.refresh();
        } catch (error) {
          console.log(error);
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <BsThreeDotsVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                router.push(`/admin/functions/mehtods/${method.id}`)
              }>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
