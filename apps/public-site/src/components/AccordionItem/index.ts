import { ArrowIcon } from "../Icons/ArrowIcon"
import { TypographySize, TypographyTag, createTypography } from "../Typography"

export enum AccordionItemWidth {
    WIDE = "100%",
    AUTO = "auto"
}

export interface AccordionItemProps {
    header?:string
    content:HTMLElement
    width?: AccordionItemWidth
}




export const createAccordionItem = ({header,content,width = AccordionItemWidth.WIDE}:AccordionItemProps) => {

    const accordionItemEl = document.createElement("div")
    accordionItemEl.className = "accordion-item"

    const contentEl = document.createElement("div")
    contentEl.className = "accordion-item__content"
    contentEl.append(content)

    const headerEl = document.createElement("button")
    headerEl.style.width = width
    headerEl.className = "accordion-item__header"
    const headerText = header ? createTypography({label:header,size:TypographySize.bodyLarge,tag:TypographyTag.span}) : ""
    headerEl.append(headerText,ArrowIcon())
    headerEl.addEventListener("click",(event)=>{
        event.preventDefault()
        contentEl.classList.toggle("active")
        

    })


    accordionItemEl.append(headerEl,contentEl)



    return accordionItemEl

}