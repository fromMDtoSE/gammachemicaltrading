import { Fragment, useRef } from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

type HeroProps = {
    scrollToForm: () => void; // Function to scroll to SimpleForm
};

export default function Hero({ scrollToForm }: HeroProps) {
    return (
        <Fragment>
            <div className="h-screen overflow-hidden screen bg-gray-800 flex justify-center items-center">
                <div className="max-w-6xl w-full px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <Image src="/logo.svg" width={300} height={300} alt="Company's logo" />
                        </div>
                        <div className="w-full md:w-1/2 text-white">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                Gamma Chemical Trading
                            </h1>
                            <div className="text-xl font-semibold mb-4">
                                <p>Who we are</p>
                            </div>
                            <div>
                                <p className="text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                            <Button variant="default" size="lg" className="mt-6" onClick={scrollToForm}>
                                Fill Out the Form
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
