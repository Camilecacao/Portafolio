import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const CardProject = (props) => {
    return(
        <div className="flex flex-col justify-center items-center min-h-[200px] relative group">
            <div className="text-center bg-purple-300 absolute top-0 z-20 p-5 rounded">
                <h1 className="font-bold">{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className="h-full w-full rounded absolute"> 
            <Image
                fill
                className="rounded top-0 left-0 absolute"
                alt={props.title}
                src={props.bgCardImage}             
                
                />
            </div>
            <div className="group-hover:flex gap-5 mt-5 hidden group-hover:z-20 insert-0 items-end transition-all">
                <Link href={props.urlRepositorio}>
                    <Button color="primary">repositorio</Button>
                </Link>
                <Link href={props.urlDespliegue}>
                    <Button color="secondary">deploy</Button>
                </Link>
            </div>
                
        </div>
    );
};

export default CardProject;