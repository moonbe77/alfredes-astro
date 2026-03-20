"use client";

import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface ContactFormLabels {
  title: string;
  name: string;
  email: string;
  phone: string;
  dateRange: string;
  datePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  nameError: string;
  emailError: string;
  phoneError: string;
  messageError: string;
}

interface ContactFormProps {
  labels: ContactFormLabels;
}

export default function ContactForm({ labels }: ContactFormProps) {
  const formSchema = z.object({
    name: z.string().min(2, { message: labels.nameError }),
    email: z.string().email({ message: labels.emailError }),
    phone: z.string().min(10, { message: labels.phoneError }),
    dateRange: z.object({
      from: z.date(),
      to: z.date(),
    }),
    message: z.string().min(10, { message: labels.messageError }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    // TODO: send form data to a backend endpoint or email service
    alert(labels.submit + " ✓");
  }

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-amber-900">{labels.title}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.name}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-white/80" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.email}</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="bg-white/80" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.phone}</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (123) 456-7890" {...field} className="bg-white/80" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{labels.dateRange}</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal bg-white/80",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value.from, "LLL dd, y")
                          )
                        ) : (
                          <span>{labels.datePlaceholder}</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.message}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={labels.messagePlaceholder}
                    className="resize-none bg-white/80"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
            {labels.submit}
          </Button>
        </form>
      </Form>
    </div>
  );
}
