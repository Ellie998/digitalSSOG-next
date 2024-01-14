'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

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
import { useRecoilState } from 'recoil';
import { elementType, elementsState, selectedElementState } from '../canvas-atom';

import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

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
});

const DetailEditElement = () => {
  const [elements, setElements] = useRecoilState(elementsState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  const selectedElementInfo: elementType | undefined = elements.find(
    (element) => element.id === selectedElement,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: selectedElementInfo?.type,
      text: '',
      fontSize: selectedElementInfo?.style.fontSize,
      textAlign: selectedElementInfo?.style.textAlign,
      color: selectedElementInfo?.style.color,
      backgroundColor: selectedElementInfo?.style.backgroundColor,
      opacity: Number(selectedElementInfo?.style.opacity.replace('%', '')),
      border: selectedElementInfo?.style.border,
      borderRadius: Number(selectedElementInfo?.style.borderRadius.replace('px', '')),
      shadow: selectedElementInfo?.style.shadow,
      width: selectedElementInfo?.style.width,
      height: selectedElementInfo?.style.height,
      zIndex: Number(selectedElementInfo?.style.zIndex),
    },
  });

  useEffect(() => {
    form.setValue('type', selectedElementInfo?.type || '');
    // form.setValue('text',selectedElementInfo?.text||"");
    form.setValue('fontSize', selectedElementInfo?.style.fontSize || '');
    form.setValue('textAlign', selectedElementInfo?.style.textAlign || '');
    form.setValue('color', selectedElementInfo?.style.color || '');
    form.setValue('backgroundColor', selectedElementInfo?.style.backgroundColor || '');
    form.setValue('opacity', Number(selectedElementInfo?.style.opacity.replace('%', '')) || 100);
    form.setValue('border', selectedElementInfo?.style.border || '');
    form.setValue('borderRadius', Number(selectedElementInfo?.style.borderRadius) || 0);
    form.setValue('shadow', selectedElementInfo?.style.shadow || '');
    form.setValue('width', selectedElementInfo?.style.width || '');
    form.setValue('height', selectedElementInfo?.style.height || '');
    form.setValue('zIndex', Number(selectedElementInfo?.style.zIndex) || 0);
  }, [selectedElement]);

  const editElement = (editElement: elementType) => {
    console.log(editElement.style);
    return setElements((prevElements): elementType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);
      return [...tempElements, editElement];
    });
  };
  const deleteElement = (deleteElement: { id: string }) => {
    return setElements((prevElements): elementType[] => {
      const tempElements = prevElements.filter((element) => element.id !== deleteElement.id);
      return [...tempElements];
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 "
      >
        <div className="font-bold text-md">Edit UI</div>
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
              <Input type="text" {...field} placeholder="ex) 1px soild black" />
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
          onClick={() =>
            editElement({
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
              id: selectedElement,
            })
          }
        >
          Edit
        </Button>
        <Button
          className="mr-4"
          type="button"
          variant={'destructive'}
          onClick={() => {
            deleteElement({ id: selectedElement });
            setSelectedElement('');
          }}
        >
          Delete
        </Button>
      </form>
    </Form>
  );
};

export default DetailEditElement;
