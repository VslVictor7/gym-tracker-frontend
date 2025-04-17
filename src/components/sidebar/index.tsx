'use client'

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from '../ui/button';
import Link from "next/link";
import { Package, PanelBottom, Home, User, Dumbbell, LogOut } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../ui/tooltip";
import { ModeToggle } from "../mode-toggle";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
  } from '@/components/ui/alert-dialog';

import { logoutUser } from "@/backend/logout";

export function Sidebar() {
    return(
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background
            sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link href='#' className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
                        text-primary-foreground rounded-full"
                        >
                            <Package className="h-4 w-4"/>
                            <span className="sr-only">logo</span>

                        </Link>
                        <Tooltip>
                            
                            <TooltipTrigger asChild>

                                <Link href='#'
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  <Home className="h-5 w-5"/>
                                  <span className="sr-only">Home</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Home</TooltipContent>

                        </Tooltip>

                        <Tooltip>
                            
                            <TooltipTrigger asChild>

                                <Link href='#'
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  <User className="h-5 w-5"/>
                                  <span className="sr-only">Perfil</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side="right">Perfil</TooltipContent>

                        </Tooltip>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Link
                                href="#"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                <LogOut className="h-5 w-5 text-red-500" />
                                <span className="sr-only">Sair</span>
                                </Link>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Deseja mesmo sair?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Você será desconectado da aplicação e precisará fazer login novamente.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={async () => {
                                    try {
                                        await logoutUser();
                                        window.location.href = '/login'; // ou router.push('/login') se estiver usando useRouter
                                    } catch (err) {
                                        console.error(err);
                                        alert('Erro ao sair');
                                    }
                                    }}
                                    className="bg-red-600 hover:bg-red-700"
                                >
                                    Sair
                                </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialog>

                        <Tooltip>
                            <TooltipTrigger asChild>
                            <div className="mt-4">
                                <ModeToggle />
                            </div>
                            </TooltipTrigger>
                            <TooltipContent side="right">Alternar Tema</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>

                </nav>

            </aside>

            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4
                 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="h-5 w-5" />
                                <span className="sr-only">☰</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-x">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href='#'
                                className="flex h-10 w-10 bg-primary rounded-full text-lg
                                items-center justify-center text-primary-foreground md:text-base gap-2"
                                prefetch={false}
                                >
                                  <Package className="h-5 w-5 transition-all"/>
                                  <span className="sr-only">logo</span>
                                </Link>

                                <Link href='#'
                                className="flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground"
                                prefetch={false}
                                >
                                  <Home className="h-5 w-5 transition-all"/>
                                  Home
                                </Link>

                                <Link href='#'
                                className="flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground"
                                prefetch={false}
                                >
                                  <User className="h-5 w-5 transition-all"/>
                                  Perfil
                                </Link>

                                <Link href='#'
                                className="flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground"
                                prefetch={false}
                                >
                                  <Dumbbell className="h-5 w-5 transition-all"/>
                                  Exercicios
                                  
                                </Link>

                                <Link href='#'
                                className="flex items-center gap-4 px-2.5 text-muted-foreground
                                hover:text-foreground"
                                >
                                  <LogOut className="h-5 w-5 transition-all text-red-500"/>
                                  Sair
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

            </div>
              
        </div>
    )
}