"use client"

import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "../Navitem/Index";
import "./index.css";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark} from "react-icons/fa6";
import { useState } from "react";


export function Header() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Inicio"
        },
        {
            url: "/produtos",
            label: "Produtos e Cortes"
        },
        {
            url: "/o-que-comprar",
            label: "O que Comprar"
        },
        {
            url: "/#contato",
            label: "Contato"
        }   
    ];

    const pathname = usePathname();

    const [openMenu,setOpenMenu] = useState<Boolean>(false);

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="logo"> 
                    <Image src="/CASA_DE_CARNES_RODEIO_II.ico"
                        width={50}
                        height={50}
                    alt="Logo"/>
                </Link>

                <ul className={"nav-items" + (openMenu ? " open" : "")}>
                    {items.map((item, index) => (
                        <NavItem 
                        key={index}
                        url={item.url}
                        label={item.label}
                        isActive={pathname === item.url}
                        />
                    ))}
                    
                </ul>

                <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ?  <FaXmark/> : <FaBars />}
                </button>

                <button className="btn-default">
                    Contatar
                </button>
            </nav>
        </header>
    );
}
