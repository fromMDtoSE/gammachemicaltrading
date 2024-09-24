'use client';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Fragment, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import main from "@/lib/sendEmail";

// Define the type for an individual product option
type ProductOption = {
    id: string;
    name: string;
};

// Define the type for an individual offering
type Offering = {
    id: string;
    name: string;
};

const formSchema = z.object({
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    phoneNumber: z.string().min(2).max(50),
    email: z.string().min(2).max(100),
    productDropDown: z.string().array().nonempty(),
    offeringsDropDown: z.string().array().nonempty(),
    message: z.string().min(2).max(900),
});

export default function SimpleForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            phoneNumber: "",
            email: "",
            productDropDown: [],
            offeringsDropDown: [],
            message: "",
        }
    });

    // Define the type for the offerings options map
    type OfferingsOptionsMap = {
        [productId: string]: Offering[];
    };

    // Example product options array
    const productOptions: ProductOption[] = [
        { id: '1', name: 'Product Category 1' },
        { id: '2', name: 'Product Category 2' },
        // Add more product options as needed
    ];

    // Example offerings options map
    const offeringsOptionsMap: OfferingsOptionsMap = {
        '1': [
            { id: '1-1', name: 'Offering 1 for Product Category 1' },
            { id: '1-2', name: 'Offering 2 for Product Category 1' },
            // Add more offerings for Product Category 1 as needed
        ],
        '2': [
            { id: '2-1', name: 'Offering 1 for Product Category 2' },
            { id: '2-2', name: 'Offering 2 for Product Category 2' },
            // Add more offerings for Product Category 2 as needed
        ],
    };

    const [filteredOfferings, setFilteredOfferings] = useState<Offering[]>([]);

    const handleCategoryChange = (selectedCategories: string[]) => {
        const newFilteredOfferings = selectedCategories.flatMap(
            category => offeringsOptionsMap[category] || []
        );
        setFilteredOfferings(newFilteredOfferings);
        //@ts-ignore
        form.setValue("offeringsDropDown", []);
    };

    const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>, field: any) => {
        const selected = event.target.value;
        let updatedSelection = [...field.value];

        if (field.value.includes(selected)) {
            updatedSelection = updatedSelection.filter((item: string) => item !== selected);
        } else {
            updatedSelection.push(selected);
        }

        field.onChange(updatedSelection);
        handleCategoryChange(updatedSelection);
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form submitted with values:", values);
        try {
            await main(values); // Call main function to send email with form values
            form.reset();// Optionally reset the form after successful submission
            
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }

    return (
        <Fragment>
            <div className={"min-h-screen h-max max-w-screen-2xl flex flex-row justify-center items-center my-10 bg-gray-800"}>
                <div className="flex flex-row w-full justify-center mx-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-100 p-10 w-1/2 rounded-r-none rounded-lg">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
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
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email Address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="productDropDown"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Which product category are you most interested in?</FormLabel>
                                        <FormControl>
                                            <div className="space-y-2">
                                                {productOptions.map((option) => (
                                                    <div key={option.id} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            value={option.id}
                                                            checked={field.value.includes(option.id)}
                                                            onChange={(e) => handleProductChange(e, field)}
                                                        />
                                                        <label className="ml-2">{option.name}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {filteredOfferings.length > 0 && (
                                <FormField
                                    control={form.control}
                                    name="offeringsDropDown"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Which offerings of the categories you chose are you most interested in?</FormLabel>
                                            <FormControl>
                                                <div className="space-y-2">
                                                    {filteredOfferings.map((option) => (
                                                        <div key={option.id} className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                value={option.id}
                                                                checked={field.value.includes(option.id)}
                                                                onChange={(e) => {
                                                                    const selected = e.target.value;
                                                                    let updatedSelection = [...field.value];

                                                                    if (field.value.includes(selected)) {
                                                                        updatedSelection = updatedSelection.filter((item: string) => item !== selected);
                                                                    } else {
                                                                        updatedSelection.push(selected);
                                                                    }

                                                                    field.onChange(updatedSelection);
                                                                }}
                                                            />
                                                            <label className="ml-2">{option.name}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your message here (capped at 900 characters...)"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                    <div className="w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40656.15893393041!2d35.82203284192918!3d32.01212436879747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9f588c9eef6d%3A0x1abe25af174dcb8d!2sGamma%20Chemical%20Trading%20Co!5e0!3m2!1sen!2sjo!4v1720775922253!5m2!1sen!2sjo"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="shadow-md rounded-lg rounded-l-none"></iframe>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
