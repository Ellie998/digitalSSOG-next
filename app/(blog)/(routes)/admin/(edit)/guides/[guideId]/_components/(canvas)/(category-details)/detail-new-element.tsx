/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSetRecoilState } from 'recoil';
import { elementType, elementsState } from '../canvas-atom';
import { Input } from '@/components/ui/input';

const types = [
  { label: 'Icon', value: 'icon' },
  { label: 'Flex', value: 'flex' },
  { label: 'tab', value: 'tab' },
] as const;

const formSchema = z.object({
  type: z.string(),
  text: z.string(),
  fontSize: z.string(),
  textAlign: z.string(),
  color: z.string(),
  backgroundColor: z.string(),
  opacity: z.number(),
  border: z.string(),
  borderRadius: z.number(),
  shadow: z.string(),
  width: z.string(),
  height: z.string(),
  zIndex: z.number(),
  id: z.string(),
});

const DetailNewElement = () => {
  const setElements = useSetRecoilState(elementsState);
  // color, border - color, 두께, type, round, 그림자, 요소 크기, 투명도, 정렬, 순서,

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
      text: '',
      fontSize: '14px',
      textAlign: 'inherit',
      color: '#000000',
      backgroundColor: '#ffffff',
      opacity: 100,
      border: 'none',
      borderRadius: 0,
      shadow: 'inherit',
      width: '100%',
      height: 'fit-content',
      zIndex: 0,
      id: '',
    },
  });

  const addElement = (newElement: elementType) => {
    return setElements((prevElements): elementType[] => [...prevElements, newElement]);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 "
      >
        <div className="font-bold text-md">New UI</div>
        {/* type */}
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
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? types.find((type) => type.value === field.value)?.label
                        : 'Select Type'}
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
                            form.setValue('type', type.value);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              type.value === field.value ? 'opacity-100' : 'opacity-0',
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
        {/* text */}
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">text</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* fontSize */}
        <FormField
          control={form.control}
          name="fontSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">fontSize</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* width */}
        <FormField
          control={form.control}
          name="width"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">width</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* height */}
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">height</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* textAlign */}
        <FormField
          control={form.control}
          name="textAlign"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">textAlign</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* color */}
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">color</FormLabel>
              <Input type="color" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* backgroundColor */}
        <FormField
          control={form.control}
          name="backgroundColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">backgroundColor</FormLabel>
              <Input type="color" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* opacity */}
        <FormField
          control={form.control}
          name="opacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">opacity</FormLabel>
              <Input type="number" {...field} min={0} max={100} step={10} />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* border */}
        <FormField
          control={form.control}
          name="border"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">border</FormLabel>
              <Input type="ext" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* borderRadius */}
        <FormField
          control={form.control}
          name="borderRadius"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">borderRadius</FormLabel>
              <Input type="number" {...field} min={0} max={100} step={1} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* shadow */}
        <FormField
          control={form.control}
          name="shadow"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">shadow</FormLabel>
              <Input type="text" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* zIndex */}
        <FormField
          control={form.control}
          name="zIndex"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-4">zIndex</FormLabel>
              <Input type="number" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mr-4"
          type="button"
          onClick={() => {
            addElement({
              type: form.getValues().type,

              style: {
                fontSize: form.getValues().fontSize,
                textAlign: form.getValues().textAlign,
                color: form.getValues().color,
                backgroundColor: form.getValues().backgroundColor,
                opacity: `${form.getValues().opacity}%`,
                border: form.getValues().border,
                borderRadius: `${form.getValues().borderRadius}px`,
                shadow: form.getValues().shadow,
                width: form.getValues().width,
                height: form.getValues().height,
                zIndex: `${form.getValues().zIndex}`,
              },
              id: uuidv4(),
            });
          }}
        >
          Add
        </Button>
      </form>
    </Form>
  );
};

export default DetailNewElement;
