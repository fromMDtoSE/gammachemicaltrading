import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

let data = [
{
        "id": 1,
        "name": "Alcohols",
        "description": "a group of organic compounds composed of carbon, hydrogen, and oxygen. They are classified as primary, secondary, or tertiary based on the number of carbon atoms bonded to the carbon atom that bears the hydroxyl group. The general formula for a simple acyclic alcohol is CnH2n+1OH.",
        "price": 100,
        "items": ["Ethanol All Grades", "Benzyl Alcohol", "Iso Propyl Alcohol  (Ipa)", "Methanol", "Methylene Chloride", "Mono Ethylene Glycol", "Monopropylene Glycol (Mpg)", "N - Butanol", "Texanol"]
    },
{
        "id": 2,
        "name": "Esters",
        "description": "a group of organic compounds that are formed by the reaction of an alcohol with a carboxylic acid. They are commonly used as solvents, plasticizers, and flavoring agents. Esters are characterized by their pleasant fruity odors and are often used in the production of perfumes and food additives.",
        "price": 100,
        "items": ["Ethyl Acetate", "Iso Butyl Acetate", "Iso Propyl Acetate", "N Butyl", "N Propyl Acetate"]
    },
 {
        "id": 3,
        "name": "Glycol Ethers / Esters",
        "description": "a group of solvents that are derived from ethylene glycol or propylene glycol. They are commonly used in paints, coatings, and cleaning products due to their excellent solvency and low toxicity. Glycol esters are esters of glycol ethers and are used as plasticizers, solvents, and emulsifiers.",
        "price": 100,
        "items": ["Butyl Glycol", "Ethyl Glycol", "Methoxy Propanol", "Methoxy Propyl Acetate"]
    },
 {
        "id": 4,
        "name": "Hydrocarbons",
        "description": "organic compounds that are composed of carbon and hydrogen atoms. They are classified into three main types: alkanes, alkenes, and alkynes. Hydrocarbons are the main components of fossil fuels such as gasoline, diesel, and natural gas. They are used as fuels, solvents, and raw materials in the chemical industry.",
        "price": 100,
        "items": ["Hexane", "Isoparaffin", "Naphtha", "Paraffin Oil", "Solvent Naphtha - 100", "Toluene", "Whitespirit", "Xylene"]
    },
{
        "id": 5,
        "name": "Ketones",
        "description": "a group of organic compounds that are characterized by the presence of a carbonyl group bonded to two alkyl groups. They are commonly used as solvents, intermediates in chemical synthesis, and flavoring agents. Ketones are classified as symmetrical or unsymmetrical based on the structure of the alkyl groups bonded to the carbonyl group.",
        "price": 100,
        "items": ["Acetone", "Cyclohexanone"]
    },
{
        "id": 6,
        "name": "Pigments",
        "description": "colored substances that are used to impart color to paints, inks, plastics, and other materials. They are classified into organic and inorganic pigments based on their chemical composition. Pigments are available in a wide range of colors and are used in various applications such as automotive coatings, printing inks, and cosmetics.",
        "price": 100,
        "items": ["Black 4330 Synox", "Brown 4610 Synox", "Brown 663 Dragon", "Green 4590", "Polyethylene Glycol 400", "Red 4130", "Red 4222", "Yellow Bayer", "Yellow 4920 Synox"]
    },
{
        "id": 7,
        "name": "Preservatives",
        "description": "a group of chemicals that are used to prevent the growth of microorganisms in food, pharmaceuticals, and personal care products. Preservatives are added to products to extend their shelf life and maintain their quality.",
        "price": 100,
        "items": ["Biocide"]
    },
{
        "id": 8,
        "name": "Plasticizers",
        "description": "a group of chemicals that are added to plastics to improve their flexibility, durability, and processability. They are commonly used in the production of PVC, rubber, and other polymers. Plasticizers are classified into phthalate and non-phthalate plasticizers based on their chemical structure.",
        "price": 100,
        "items": ["Dbp , Dibutyl Phthalate", "Dop, Dioctyl Phthalate"]
    },
 {
        "id": 9,
        "name": "Titaniums",
        "description": "chemicals element that is known for its high strength-to-weight ratio, corrosion resistance, and biocompatibility. It is commonly used in aerospace, medical, and automotive applications. Titanium is available in various forms such as titanium dioxide, titanium tetrachloride, and titanium sponge.",
        "price": 100,
        "items": ["Titan 121- Crystal", "Titan 128, Titan 902", "Titan Chiki", "Titan Chinese 298", "Titan 134", "Titan 706", "Titan Lemon"]
    },
{
        "id": 10,
        "name": "Thickeners",
        "description": "a group of chemicals that are used to increase the viscosity of a liquid. They are commonly used in food, pharmaceutical, and cosmetic products to improve their texture and stability. Thickeners are classified into natural and synthetic thickeners based on their source.",
        "price": 100,
        "items": ["Aerosil200", "Bermocoll Ebs 481 Fq"]
    },
{
        "id": 11,
        "name": "Inorganic Bases",
        "description": "a group of chemicals that are characterized by their ability to accept protons. They are commonly used in the production of soaps, detergents, and fertilizers. Inorganic bases are classified into strong and weak bases based on their dissociation in water.",
        "price": 100,
        "items": ["Ammonia", "Caustic Soda Flakes", "Koh, Potassium Hydroxide", "Sodium Hydrogen Carbonate (Sodium Bicarbonate)"]
    },
 {
        "id": 12,
        "name": "Metallic Compounds",
        "description": "a group of chemicals that are composed of metal atoms bonded to other elements. They are commonly used in the production of pigments, catalysts, and electronic materials. Metallic compounds are classified into organic and inorganic compounds based on their chemical structure.",
        "price": 100,
        "items": ["Aluminium Paste Leafing", "Zinc Dust", "Zinc Oxide Lithopone", "Zinc Stearate"]
    },
 {
        "id": 13,
        "name": "Speciality Chemicals",
        "description": "a group of chemicals that are used in specific applications due to their unique properties. They are commonly used in the production of pharmaceuticals, agrochemicals, and electronic materials. Speciality chemicals are classified into various categories such as surfactants, polymers, and additives.",
        "price": 100,
        "items": ["Anti Foam", "Icolleen Iceberg", "Kaolin", "Texapon"]
    },
 {
        "id": 14,
        "name": "Polymeric Compounds",
        "description": "a group of chemicals that are composed of repeating units called monomers. They are commonly used in the production of plastics, rubbers, and adhesives. Polymeric compounds are classified into natural and synthetic polymers based on their source.",
        "price": 100,
        "items": ["Styrene Acrylic", "Carbopol", "Polyethylene Glycol 400"]
    },
 {
        "id": 15,
        "name": "Other Chemicals",
        "description": "a group of chemicals that do not fall into any specific category. They are used in various applications such as pharmaceuticals, cosmetics, and food additives. Other chemicals are classified into various categories based on their chemical structure and properties.",
        "price": 100,
        "items": ["Aluminium Silicate", "Calcium Carbonate", "Carbopol", "Carbon Black 660", "Carbon Black Ucm", "Citric Acid", "Glycerin", "Dlp", "Dmf", "Light Liquid Paraffin Bp", "Sodium Hexa Mata Phosphate", "Soyalecithine", "Stearic Acid", "Talc", "Zinc Phosphate"]
    }
]

const avatarFallback = (productName: string) => productName.charAt(0).toUpperCase();

export default function ProductCard() {
    return (
        <Accordion type="single" collapsible>
            <div className={"grid grid-cols-3 gap-1 max-w-screen-2xl flex-wrap m-2 bg-gray-800"}>
                {data.map((product) => (
                    <div key={product.id} className="h-full flex flex-col">
                        <Card className="flex flex-col h-full">
                            <CardHeader className="flex-grow">
                                <CardTitle>{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-8 flex-grow">
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/molecule.png" alt="Molecule Avatar" />
                                        <AvatarFallback>{avatarFallback(product.name)}</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">{`${product.name} are:`}</p>
                                        <p className="text-sm text-muted-foreground pl-3">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium whitespace-nowrap">{`${product.price} JOD`}</div>
                                </div>
                            </CardContent>
                            <AccordionItem value={product.id.toString()} className="flex-shrink">
                                <AccordionTrigger className="pl-6 text-2xl font-semibold leading-none tracking-tight">
                                    Our offerings
                                </AccordionTrigger>
                                {product.items.map((i, index) => (
                                    <AccordionContent key={i} className={"pl-10"}>
                                        {`${index + 1}`}{" - "}{i}
                                    </AccordionContent>
                                ))}
                            </AccordionItem>
                        </Card>
                    </div>
                ))}
            </div>
        </Accordion>
    );
}
