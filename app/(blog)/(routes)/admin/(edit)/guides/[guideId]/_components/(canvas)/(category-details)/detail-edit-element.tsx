/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRecoilState } from "recoil";
import { elementsState, selectedElementState } from "../canvas-atom";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const types = [
  { label: "Icon", value: "icon" },
  { label: "Flex", value: "flex" },
  { label: "tab", value: "tab" },
] as const;

const formSchema = z.object({
  type: z.string(),
  style: z.string(),
});

const DetailEditElement = () => {
  const [elements, setElements] = useRecoilState(elementsState);
  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementState);

  const selectedElementInfo = elements.find(
    (element) => element.id === selectedElement
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: selectedElementInfo?.type,
      style: selectedElementInfo?.style,
    },
  });

  useEffect(() => {
    form.setValue("type", selectedElementInfo?.type || "");
    form.setValue("style", selectedElementInfo?.style || "");
  }, [selectedElement]);

  const editElement = (editElement: {
    type: string;
    style: string;
    id: string;
  }) => {
    return setElements(
      (prevElements): { type: string; style: string; id: string }[] => {
        const tempElements = prevElements.filter(
          (element) => element.id !== editElement.id
        );
        return [...tempElements, editElement];
      }
    );
  };
  const deleteElement = (deleteElement: { id: string }) => {
    return setElements(
      (prevElements): { type: string; style: string; id: string }[] => {
        const tempElements = prevElements.filter(
          (element) => element.id !== deleteElement.id
        );
        return [...tempElements];
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 ">
        <div className="font-bold text-md">Edit UI</div>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-2">UI type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}>
                      {field.value
                        ? types.find((type) => type.value === field.value)
                            ?.label
                        : "Select Type"}
                      <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0  cursor-pointer">
                  <Command className="  z-[999] cursor-pointer">
                    <CommandInput placeholder="Search App..." />
                    <CommandEmpty>No App found.</CommandEmpty>
                    <CommandGroup>
                      {types.map((type) => (
                        <CommandItem
                          className="cursor-pointer z-100"
                          value={type.label}
                          key={type.value}
                          onSelect={() => {
                            form.setValue("type", type.value);
                          }}>
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              type.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {type.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">UI Style</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mr-4"
          type="button"
          onClick={() =>
            editElement({
              type: form.getValues().type,
              style: form.getValues().style,
              id: selectedElement,
            })
          }>
          Edit
        </Button>
        <Button
          className="mr-4"
          type="button"
          variant={"destructive"}
          onClick={() => {
            deleteElement({ id: selectedElement });
            setSelectedElement("");
          }}>
          Delete
        </Button>
      </form>
    </Form>
  );
};

export default DetailEditElement;
