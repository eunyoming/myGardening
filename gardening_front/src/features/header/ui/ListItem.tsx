import React from "react";
import {NavigationMenuLink} from "@/shared/shadcn/components/ui/navigation-menu.tsx";
import {cn} from "@/shared/shadcn/lib/utils.ts";
import type {LinkItem} from "@/entities/header/index.js";
import {useNavigate} from "react-router-dom";

export function ListItem({
                      title,
                      description,
                      icon: Icon,
                      className,
                      href,
                      ...props
                  }: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
    const navigate = useNavigate();
    return (
        <NavigationMenuLink
            className={cn('w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2', className)} {...props}
            asChild>
            <a onClick={() => navigate(href)}>
                <div
                    className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
                    <Icon className="text-foreground size-5"/>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <span className="font-medium">{title}</span>
                    <span className="text-muted-foreground text-xs">{description}</span>
                </div>
            </a>
        </NavigationMenuLink>
    );
}